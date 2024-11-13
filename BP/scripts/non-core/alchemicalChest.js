import * as mc from "@minecraft/server";
//Variables
//Functions
//Events
mc.world.afterEvents.playerPlaceBlock.subscribe(async data=>{
    mc.system.runTimeout(()=>{
        let block = data.block
        let dimension = data.dimension
        let isTransmutationTable = dimension.runCommand(`testforblock ${block.x} ${block.y} ${block.z} projecte:alchemical_chest`)
        if(isTransmutationTable.successCount == 1){
           let entity = dimension.spawnEntity(`projecte:alchemical_chest`, block.bottomCenter())
           entity.nameTag = "alchemical_chest"
        }
    },3)
})