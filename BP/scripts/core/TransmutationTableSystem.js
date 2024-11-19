import * as mc from "@minecraft/server";
import * as TransmutableConfig from "../configurations/TransmutableItems.js"
import { NumberSuffix } from "../ToolsUtils.js";
//Variables
var EMCI = {}
var EMCIArray = []
//Functions
function ItemsToArray() {
    for (let ItemID in TransmutableConfig["default"]) {
        EMCIArray.push(JSON.stringify(TransmutableConfig["default"][ItemID]))
    }
    ArrayToItems()
}
function ArrayToItems() {
    EMCIArray.forEach((item, index) => {
        // mc.world.sendMessage(`${item}`)
        EMCI[`item:${index}`] = JSON.parse(item)
    })
}
function RegisterItem(ItemData) {
    if (!EMCIArray.includes(ItemData)) {
        EMCIArray.push(ItemData)
        ArrayToItems()
    }
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function GetEMCValid(Entity = mc.Entity.prototype, Slot = Number, Item = mc.ItemStack.prototype) {
    let ItemEMC = undefined
    let ItemId = ""
    if (Item != undefined) {
        for (let itemID in EMCI) {
            const itemE = EMCI[itemID]
            if (ItemEMC == undefined && Item.typeId == itemE.id) {
                let data = itemE.data ? Number(itemE.data) : 0
                let hasItem = `hasItem={item=${Item.typeId}, data=${data}, slot=${Slot}, location=slot.inventory}`
                const Result = Entity.runCommand(`testfor @s[${hasItem}]`).successCount == 1
                if (Result) {
                    ItemId = itemID
                    ItemEMC = itemE
                }
            }
        }
    }
    return {
        Item,
        ItemEMC,
        ItemId
    }
}
function SetEMCItem(Entity = mc.Entity.prototype, container = mc.EntityInventoryComponent.prototype.container, Slot = Number, ItemID = String) {
    let CurrentEMC = Entity.getProperty("projecte:emc")
    let ItemEMC = EMCI[ItemID]
    if (ItemEMC) {
       // let itemStack = new mc.ItemStack(ItemEMC.id)
        let data = ItemEMC.data ? Number(ItemEMC.data) : 0
        let commandItem = `${ItemEMC.id} 1 ${data}`
        Entity.runCommand(`replaceitem entity @s slot.inventory ${Slot} ${commandItem}`)
        let newItem = container.getItem(Slot).clone()
        let points = clamp(Math.round(newItem.maxAmount * (CurrentEMC / (ItemEMC.emc * newItem.maxAmount))), 1, newItem.maxAmount)
       // mc.world.sendMessage(`Items: ${points}, EMC: ${NumberSuffix(ItemEMC.emc)}, Current: ${NumberSuffix(ItemEMC.emc * points)}`)
        Entity.setDynamicProperty(`projecte:item:${Slot}`, points)
        newItem.amount = points
        newItem.setLore([
            `§r§eEMC: ${NumberSuffix(ItemEMC.emc * points)}`
        ])
        container.setItem(Slot, newItem)
    }
}
async function TransmutationAsync(entity, container, TomeList = [], TomePage = 1) {
    let CurrentEMC = entity.getProperty("projecte:emc")
    let Start = (TomePage - 1) * 16
    let End = Start + 16
    let AllItems = TomeList.slice(Start, End)
    AllItems.forEach(async (ItemID, i) => {
        let OldItem = container.getItem(i)
        let EmcItem = EMCI[ItemID]
        let itemEmc = EmcItem.emc * (entity.getDynamicProperty(`projecte:item:${i}`) || 1)
        //let itemStack = new mc.ItemStack(EmcItem.id)
        if (OldItem?.typeId == "projecte:empty_slot" && CurrentEMC >= itemEmc) {
            SetEMCItem(entity, container, i, ItemID)
        } else if (!OldItem && CurrentEMC >= itemEmc) {
            let empty = new mc.ItemStack("projecte:empty_slot")
            container.setItem(i, empty)
            entity.setDynamicProperty(`projecte:item:${i}`, undefined)
            mc.world.playSound(`item.petransmute`, entity.location, { volume: 1 })
            entity.setProperty("projecte:emc", clamp(CurrentEMC - itemEmc, 0, 1e21))
        } else if (OldItem?.typeId != "projecte:empty_slot" && CurrentEMC < itemEmc) {
            let empty = new mc.ItemStack("projecte:empty_slot")
            container.setItem(i, empty)
        }
        await new Promise(resolve => mc.system.runTimeout(resolve, 1))
    })
}
//Events
ItemsToArray()
mc.system.afterEvents.scriptEventReceive.subscribe(data => {
    let entity = data.sourceEntity
    if (data.id == "projecte:register_item") {
        let args = data.message.split(" ")
        let item = {
            id: args[0],
            data: args[1],
            emc: Number(args[2])
        }
        RegisterItem(JSON.stringify(item))
    }
    if (entity && data.id == "projecte:emc_remover") {
        let entityInventory = entity.getComponent("inventory")?.container
        if (entityInventory) {
            let invSize = Array(entityInventory.size).fill("item")
            invSize.forEach((_, i) => {
                let item = entityInventory.getItem(i)
                if (item && item?.getLore()[0]?.includes("EMC:")) {
                    item = item.clone()
                    item.setLore([])
                    entityInventory.setItem(i)
                    entityInventory.addItem(item)
                }
            })
        }
    }
})
mc.world.afterEvents.dataDrivenEntityTrigger.subscribe(data => {
    let entity = data.entity
    let id = data.eventId
    if (id == "projecte:transmutation" && entity) {
        let emcValue = entity.getProperty(`projecte:emc`)
        let container = mc.EntityInventoryComponent.prototype.container; container = entity.getComponent("inventory").container
        if (container) {
            let EMCViewItem = new mc.ItemStack("minecraft:book")
            EMCViewItem.nameTag = `§r§f§8EMC: ${NumberSuffix(emcValue)}`
            container.setItem(18, EMCViewItem)
            let BurnSlot = GetEMCValid(entity, 17, container.getItem(17))
            let TomeSlot = container.getItem(16)?.typeId == "projecte:tome" ? container.getItem(16) : undefined
            let TomeList = TomeSlot?.getDynamicProperty("projecte:items") ? JSON.parse(TomeSlot?.getDynamicProperty("projecte:items")) : []
            let TomePage = entity.getDynamicProperty("projecte:page") ? entity.getDynamicProperty("projecte:page") : 1
            let NextPageSlot = container.getItem(20)
            let PrevPageSlot = container.getItem(19)
            if (BurnSlot.ItemEMC && emcValue < 1e21) {
                let FinalEMC = clamp(emcValue + (BurnSlot.ItemEMC.emc * BurnSlot.Item.amount), 0, 1e21)
                //  console.warn(NumberSuffix(100000000000000))
                entity.setProperty("projecte:emc", FinalEMC)
                container.setItem(17, undefined)
                for (let i = 0; i < 16; i++) {
                    let empty = new mc.ItemStack("projecte:empty_slot")
                    entity.setDynamicProperty(`projecte:item:${i}`, undefined)
                    container.setItem(i, empty)
                }
                mc.world.playSound(`item.petransmute`, entity.location, { volume: 1 })
                if (TomeSlot && !TomeList.includes(BurnSlot.ItemId) && TomeList.length < 500) {
                    let newTome = TomeSlot.clone()
                    TomeList.push(BurnSlot.ItemId)
                    newTome.setDynamicProperty("projecte:items", JSON.stringify(TomeList))
                    newTome.setLore([`§r§7Items: [${TomeList.length}/500]`])
                    container.setItem(16, newTome)
                }
            }
            if (!NextPageSlot) {
                container.setItem(20, new mc.ItemStack("projecte:empty_slot"))
                TomePage += 1
                TomePage = clamp(TomePage, 1, Math.ceil(TomeList.length / 16))
                entity.setDynamicProperty("projecte:page", TomePage)
                for (let i = 0; i < 16; i++) {
                    let empty = new mc.ItemStack("projecte:empty_slot")
                    container.setItem(i, empty)
                }
            } else if (!PrevPageSlot) {
                container.setItem(19, new mc.ItemStack("projecte:empty_slot"))
                TomePage -= 1
                TomePage = clamp(TomePage, 1, Math.ceil(TomeList.length / 16))
                entity.setDynamicProperty("projecte:page", TomePage)
                for (let i = 0; i < 16; i++) {
                    let empty = new mc.ItemStack("projecte:empty_slot")
                    container.setItem(i, empty)
                }
            }
            if (TomeSlot) {
                if (TomePage > Math.ceil(TomeList.length / 16)) {
                    TomePage = clamp(TomePage, 1, Math.ceil(TomeList.length / 16))
                    entity.setDynamicProperty("projecte:page", TomePage)
                    for (let i = 0; i < 16; i++) {
                        let empty = new mc.ItemStack("projecte:empty_slot")
                        container.setItem(i, empty)
                    }
                }
                TransmutationAsync(entity, container, TomeList, TomePage)
            } else {
                for (let i = 0; i < 16; i++) {
                    let empty = new mc.ItemStack("projecte:empty_slot")
                    entity.setDynamicProperty(`projecte:item:${i}`, undefined)
                    container.setItem(i, empty)
                }
            }
        }
    }
})