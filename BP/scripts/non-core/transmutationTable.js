import * as mc from "@minecraft/server";
//Variables
//Functions
//Events
mc.world.afterEvents.dataDrivenEntityTrigger.subscribe(async data=>{
    let entity = data.entity
    let id = data.eventId
    if(id == "projecte:transmutationPart" && entity){
        let item = entity.runCommand(`testfor @e[type=projecte:transmutation_table,c=1,r=1,hasitem={item=projecte:tome, location=slot.inventory}]`).successCount == 1
        entity.setProperty("projecte:book", item)
    }
})
mc.world.afterEvents.playerPlaceBlock.subscribe(async data=>{
    mc.system.runTimeout(()=>{
        let block = data.block
        let dimension = data.dimension
        let isTransmutationTable = dimension.runCommand(`testforblock ${block.x} ${block.y} ${block.z} projecte:transmutation_table`)
        if(isTransmutationTable.successCount == 1){
           let entity = dimension.spawnEntity(`projecte:transmutation_table`, block.bottomCenter())
           let entity2 = dimension.spawnEntity(`projecte:transmutation_table_display`, block.bottomCenter())
           entity.nameTag = "transmutation_table"
        }
    },3)
})