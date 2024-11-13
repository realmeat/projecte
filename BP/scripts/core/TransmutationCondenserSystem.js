import * as mc from "@minecraft/server";
import * as TransmutableConfig from "../configurations/TransmutableItems.js"
//Variables
var EMCI = {}
var EMCIArray = []
//Functions
function ItemsToArray(){
    for(let ItemID in TransmutableConfig["default"]){
        EMCIArray.push(JSON.stringify(TransmutableConfig["default"][ItemID]))
    }
    ArrayToItems()
}
function ArrayToItems(){
    EMCIArray.forEach((item, index)=>{
       // mc.world.sendMessage(`${item}`)
        EMCI[`item:${index}`] = JSON.parse(item)
    })
}
function RegisterItem(ItemData){
    if(!EMCIArray.includes(ItemData)){
        EMCIArray.push(ItemData)
        ArrayToItems()
    }
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function getAllItems(container, min, max){
    let items = []
    let emptySlots = []
    for(let i = min; i < max; i++){
        let Item = container.getItem(i)
        if(Item){
            items.push({item: Item, slot: i})
        }else{
            emptySlots.push(i)
        }
    }
    return {
        eSlots: emptySlots,
        items: items
    }
}
function GetEMCValid(Entity=mc.Entity.prototype, Slot=Number, Item=mc.ItemStack.prototype){
    let ItemEMC = undefined
    let ItemId = ""
    if(Item != undefined){
        for(let itemID in EMCI){
            const itemE = EMCI[itemID]
            if(ItemEMC == undefined && Item.typeId == itemE.id){
                const dataSplit = itemE.data?.split(":")
                let data = dataSplit ? Number(dataSplit[dataSplit.length - 1]) : undefined
                let hasItem = data ? `hasItem={item=${Item.typeId}, data=${data}, slot=${Slot}, location=slot.inventory}` : `hasItem={item=${Item.typeId}, slot=${Slot}, location=slot.inventory}` 
                const Result = Entity.runCommand(`testfor @s[${hasItem}]`).successCount == 1
                if(Result){
                    ItemId = itemID
                    ItemEMC = itemE
                }
            }
        }
        if(ItemEMC && ItemId != ""){
            return {
                Item,
                ItemEMC,
                ItemId
            }
        }else{
            return undefined
        }
    }
    
}
function AddEMCItem(Entity, ItemID, Slot, OldItem = undefined){
    let ItemEMC = EMCI[ItemID]
    let successCount = 0
    if(ItemEMC){
        const dataSplit = ItemEMC.data?.split(":")
        let data = dataSplit ? Number(dataSplit[dataSplit.length - 1]) : undefined
        if(!OldItem){
            let commandItem = data ? `${ItemEMC.id} 1 ${data}` : `${ItemEMC.id}` 
            let command = Entity.runCommand(`replaceitem entity @s slot.inventory ${Slot} ${commandItem}`)
            successCount = command.successCount
        }else if(OldItem && OldItem.amount < OldItem.maxAmount){
            let commandItem = data ? `${ItemEMC.id} ${OldItem.amount + 1} ${data}` : `${ItemEMC.id} ${OldItem.amount + 1}` 
            let command = Entity.runCommand(`replaceitem entity @s slot.inventory ${Slot} ${commandItem}`)
            successCount = command.successCount
        }
    }
    return successCount
}
async function CondenserSystem(container=mc.EntityInventoryComponent.prototype.container, entity, ItemType, emcValue){
    let EmcCurrent = clamp((emcValue/ItemType.ItemEMC.emc),0, 1).toFixed(2)
    let CondenserItem = new mc.ItemStack("minecraft:book")
    CondenserItem.nameTag = `item:${EmcCurrent}`
    container.setItem(92, CondenserItem)
    let get = getAllItems(container, 0, 90)
    let AllItems = get.items
    let AllEmpty = get.eSlots
    if(EmcCurrent >= 1.00){
        let ValidSlot = -1
        let Item = undefined
        let slots = Array(90).fill("none")
        slots.map((v, i)=>{
            let ValidItem = GetEMCValid(entity, i, container.getItem(i))
            if(ValidItem && ValidItem?.ItemId == ItemType.ItemId && ValidItem.Item.amount < ValidItem.Item.maxAmount && ValidSlot == -1){
                ValidSlot = i
                Item = ValidItem.Item
            }else if(!container.getItem(i) && ValidSlot == -1){
                ValidSlot = i
            }
        })
        if(ValidSlot >= 0){
            AddEMCItem(entity, ItemType.ItemId, ValidSlot, Item)
            entity.setProperty("projecte:emc", clamp(emcValue - ItemType.ItemEMC.emc, 0, 100000000000000))
        }
    }else if(EmcCurrent < 1.00){
        let selectedItem = undefined
        let slot = 0
        if(AllItems.length > 0){
            AllItems.forEach((slotData, i)=>{
                let ItemBurn = GetEMCValid(entity, slotData.slot, slotData.item)
                if(ItemBurn && ItemBurn?.ItemEMC && ItemBurn?.ItemId != ItemType.ItemId && selectedItem == undefined){
                    selectedItem = ItemBurn
                    slot = slotData.slot
                }
            })
            if(selectedItem){
                let item = selectedItem.Item.clone()
                item.amount -= item.amount == 1 ? 0 : 1
                container.setItem(slot,  item.amount == 1 ? undefined : item)
                entity.setProperty("projecte:emc", clamp(emcValue + selectedItem.ItemEMC.emc, 0, 100000000000000))
            }
        }
    }
}
//Events
ItemsToArray()
mc.system.afterEvents.scriptEventReceive.subscribe(data=>{
    if(data.id == "projecte:register_item"){
        let args = data.message.split(" ")
        let item = {
            id: args[0],
            data: args[1],
            emc: Number(args[2])
        }
        RegisterItem(JSON.stringify(item))
    }
})
mc.world.afterEvents.dataDrivenEntityTrigger.subscribe(data=>{
    let entity = data.entity
    let id = data.eventId
    if(id == "projecte:transmutationCondenser" && entity){
        let emcValue = entity.getProperty(`projecte:emc`)
        let container = mc.EntityInventoryComponent.prototype.container; container = entity.getComponent("inventory").container
        if(container){
            let ItemType = GetEMCValid(entity, 91, container.getItem(91))
            let CondenserBar = container.getItem(92)
           
            if(ItemType){
                CondenserSystem(container, entity, ItemType, emcValue)
            }else if(!ItemType && CondenserBar?.typeId == "minecraft:book"){
                container.setItem(92, new mc.ItemStack("projecte:empty_slot"))
            }
        }
    }
})