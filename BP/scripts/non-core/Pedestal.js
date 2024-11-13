import * as mc from "@minecraft/server";
import { Events } from "../core/ProjectERings";
import Rings from "../configurations/Rings";
import * as tools from "../ToolsUtils.js";
//Variables
var RingsFunctions = {
    "projecte:void_ring": {
        "active_event": "VoidRingDrop",
    }
}
//Events
mc.system.afterEvents.scriptEventReceive.subscribe(data => {
    let entity = mc.Player.prototype
    entity = data.sourceEntity
    if (entity && entity.isValid() && data.id == "projecte:rings_detect" && entity.typeId == "projecte:pedestal") {
        let slot = entity.getComponent("inventory").container.getSlot(0)
        let block = entity.dimension.getBlock(entity.location)
        let pedestalActive = block.permutation.getState("projecte:active")
        let item = slot.getItem()
        let RingData = Rings[item?.typeId]
        if(RingData && RingData["on_pedestal"] && pedestalActive){
            let onPedestal = RingData["on_pedestal"]
            if(onPedestal.event in Events){
                let params = onPedestal.params
                Object.assign(params, {item, slot: 0})
                Events[onPedestal.event](entity, params)
            }
        }
    }else if (entity && data.id == "projecte:drop_item" && entity.typeId == "projecte:pedestal") {
       let slot = entity.getComponent("inventory").container.getSlot(0)
       let block = entity.dimension.getBlock(entity.location)
       let permutation = block.permutation
       permutation = permutation.withState("projecte:with_item", false)
       permutation = permutation.withState("projecte:active", false)
       block.setPermutation(permutation)
       entity.dimension.spawnItem(slot.getItem(), entity.location)
       entity.remove()
    }else if (entity && data.id == "projecte:pedestal_interact" && entity.typeId == "projecte:pedestal") {
        let slot = entity.getComponent("inventory").container.getSlot(0)
        let block = entity.dimension.getBlock(entity.location)
        let permutation = block.permutation
        let pedestalActive = block.permutation.getState("projecte:active")
        let item = slot.getItem()
        let RingData = Rings[item?.typeId]
        if(RingData && RingData["on_pedestal"]){
            let onPedestal = RingData["on_pedestal"]
            if(onPedestal.event in Events){
                !pedestalActive ? mc.world.playSound("item.pecharge", block.center()) : mc.world.playSound("item.peuncharge", block.center())
                permutation = permutation.withState("projecte:active", !pedestalActive)
                block.dimension.spawnParticle("projecte:glow_particle", tools.Vector(0,-0.1,0).add(block.center()))
                
                block.setPermutation(permutation)
            }
        }
    }
})
mc.world.beforeEvents.itemUseOn.subscribe(data=>{
    let item = data.itemStack
    let entity = data.source
    let block = data.block
    let RingData = Rings[item?.typeId]
    mc.system.run(()=>{
        let isPedestal = block.dimension.runCommand(`testforblock ${block.x} ${block.y} ${block.z} projecte:dm_pedestal`).successCount == 1
        if(isPedestal && RingData && RingData["on_pedestal"]){
            let WithItem = block.permutation.getState("projecte:with_item")
            let Permutation = block.permutation
            if(WithItem == false){
                let PedestalEntity = block.dimension.spawnEntity("projecte:pedestal", block.center())
                PedestalEntity.getComponent("inventory").container.addItem(item.clone())
               // console.warn(PedestalEntity.getComponent("equippable").isValid())
                entity.getComponent("equippable").setEquipment("Mainhand")
                PedestalEntity.runCommand(`replaceitem entity @s slot.weapon.mainhand 0 ${item.typeId}`)
                Permutation = Permutation.withState("projecte:with_item", true)
            }
            block.setPermutation(Permutation)
        }
    })
})