import * as mc from "@minecraft/server";
//Events
mc.system.afterEvents.scriptEventReceive.subscribe(data=>{
    if(data.id == "projecte:despawn"){
        let entity = data.sourceEntity
        if(entity.typeId == "projecte:transmutation_table"){
            let inventory = entity.getComponent("inventory").container
            let tome = inventory.getItem(17)?.clone()
            let burn = inventory.getItem(16)?.clone()
            tome ? entity.dimension.spawnItem(tome, entity.location) : null
            burn ? entity.dimension.spawnItem(burn, entity.location) : null
        }else if(entity.typeId == "projecte:energy_condenser_mk1"){
            let inventory = entity.getComponent("inventory").container
            for(let i = 0; i < 92; i++){
                let item = inventory.getItem(i)?.clone()
                item ? entity.dimension.spawnItem(item, entity.location) : null
            }
        }else if(entity.typeId == "projecte:alchemical_chest"){
            let inventory = entity.getComponent("inventory").container
            for(let i = 0; i < 104; i++){
                let item = inventory.getItem(i)?.clone()
                item ? entity.dimension.spawnItem(item, entity.location) : null
            }
        }
        data.sourceEntity.remove()
    }
})