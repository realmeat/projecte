import * as mc from "@minecraft/server";
//Variables
//Functions
//Events
mc.world.afterEvents.playerPlaceBlock.subscribe(async data=>{
    mc.system.runTimeout(()=>{
        let block = data.block
        let dimension = data.dimension
        let isTransmutationTable = dimension.runCommand(`testforblock ${block.x} ${block.y} ${block.z} projecte:energy_condenser_mk1`)
        if(isTransmutationTable.successCount == 1){
           let entity = dimension.spawnEntity(`projecte:energy_condenser_mk1`, block.bottomCenter())
           entity.nameTag = "energy_condenser_mk1"
        }
    },3)
})