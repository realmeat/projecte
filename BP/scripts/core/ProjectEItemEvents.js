import * as mc from "@minecraft/server";
import * as mcui from "@minecraft/server-ui";
import * as ItemConfiguration from "../configurations/ItemEvents.js";
import * as ItemConfigurationUI from "../configurations/ItemEventsUI.js";
//Variables
const ItemEvents = ItemConfiguration["default"]
const ItemEventsUI = ItemConfigurationUI["default"]
var EntityHeavyAttackDelay = []
var Rotation = {
    "north": 0,
    "south": 180,
    "west": 90,
    "east": -90
}
//Functions UI
function UITranslateDropdown(keyname, array, type){
    let Dropdown = []
    for(let nameId of array){
        let Text = ItemEventsUI[keyname][nameId][type]
        if(Text){
            Dropdown.push(Text)
        }
    }
    return Dropdown
}
function ItemConfigurateUI(entity=mc.Entity.prototype, item=mc.ItemStack.prototype){
    let ItemData = ItemEvents[item.typeId]
    let UI = new mcui.ModalFormData()
    UI.title({rawtext:[{translate:`item.${item.typeId}`}]})
    if(ItemData){
        let AllIndexs = 0
        let Selections = {
            "use": 0,
            "destroy": 0,
            "attack": 0
        }
        UI.slider({"rawtext":[{translate:"itemconfig.tool_level"}]}, 0, ItemData.level_max, 1, item.getDynamicProperty("projecte:level") || 0)
        if(ItemData["use_modes"]?.length > 1){UI.dropdown({"rawtext":[{translate:"itemconfig.use_mode"}]}, UITranslateDropdown("use_modes", ItemData["use_modes"], "raw"), (item.getDynamicProperty("projecte:use_mode") || 0)); AllIndexs += 1; Selections["use"] = AllIndexs}
        if(ItemData["destroy_modes"]?.length > 1){UI.dropdown({"rawtext":[{translate:"itemconfig.destroy_mode"}]}, UITranslateDropdown("destroy_modes", ItemData["destroy_modes"], "raw"), (item.getDynamicProperty("projecte:destroy_mode") || 0)); AllIndexs += 1; Selections["destroy"] = AllIndexs}
        if(ItemData["attack_modes"]?.length > 1){UI.dropdown({"rawtext":[{translate:"itemconfig.attack_mode"}]}, UITranslateDropdown("attack_modes", ItemData["attack_modes"], "raw"), (item.getDynamicProperty("projecte:attack_mode") || 0)); AllIndexs += 1; Selections["attack"] = AllIndexs}
        UI.show(entity).then(form=>{
            let elements = form.formValues
            if(form.canceled == false){
                let Lore = [
                    `§r§7Level: ${ elements[0] == 0 ? "§cDisabled" : "§u" + elements[0]}`
                ]
                item.setDynamicProperty("projecte:level", elements[0])
                if(ItemData["use_modes"]){
                    let Mode = ItemData["use_modes"].length > 1 ? elements[Selections["use"]] : 0
                    item.setDynamicProperty("projecte:use_mode", Mode)
                    Lore.push(`§r§7Use Mode: §u${ItemEventsUI["use_modes"][ItemData["use_modes"][Mode]].default}`)
                }
                if(ItemData["destroy_modes"]){
                    let Mode = ItemData["destroy_modes"].length > 1 ? elements[Selections["destroy"]] : 0
                    item.setDynamicProperty("projecte:destroy_mode", Mode)
                    Lore.push(`§r§7Destroy Mode: §u${ItemEventsUI["destroy_modes"][ItemData["destroy_modes"][Mode]].default}`)
                }
                if(ItemData["attack_modes"]){
                    let Mode = ItemData["attack_modes"].length > 1 ? elements[Selections["attack"]] : 0
                    item.setDynamicProperty("projecte:attack_mode", Mode)
                    Lore.push(`§r§7Attack Mode: §u${ItemEventsUI["attack_modes"][ItemData["attack_modes"][Mode]].default}`)
                }
                if(ItemData.additional_damage > 0 && elements[0] > 0){
                    let finalDamage = ItemData.additional_damage * elements[0]
                    item.setDynamicProperty("minecraft:additional_damage", finalDamage)
                    Lore.push(`§r§7Extra Damage: §u${finalDamage}`)
                }
                item.setLore(Lore)
                entity.getComponent("equippable").setEquipment("Mainhand", item)
            }
        })
    }
}
//Functions Utils
/** 
 * @param{String} Event - Event Name
 * @param{String} type - Type of Events: AfterEvent or BeforeEvent
 * @param{Function} Callback - Function Callback
*/
function EventOnce(Event, type, Callback=()=>{}){
    let EventSignal = mc.world[type][Event].subscribe((data)=>{
        Callback(data)
        mc.system.runTimeout(()=>{
            mc.world[type][Event].unsubscribe(EventSignal)
        },1)
    })
}
function rotationPosition(position, rotationY) {
    var angleRadian = (rotationY * Math.PI) / 180;

    var nX = position.x * Math.cos(angleRadian) + position.z * Math.sin(angleRadian);
    var nY = position.y;
    var nZ = -position.x * Math.sin(angleRadian) + position.z * Math.cos(angleRadian);

    if (Math.abs(nX) < 1e-15) nX = 0;
    if (Math.abs(nY) < 1e-15) nY = 0;
    if (Math.abs(nZ) < 1e-15) nZ = 0;
    return { x: nX, y: nY, z: nZ };
}
function GetBlockFromArray(Block=mc.Block.prototype, Array=[String.prototype]){
    let Data = undefined
    Array.forEach((Value, Index)=>{
        if(Value.startsWith("tag:")){
            let Tag = Value.replace("tag:", "")
            if(Block.hasTag(Tag)){
                Data = Block
            }
        }else if(Value.startsWith("tag:") == false || Value != "all"){
            var BlockValid = Block.dimension.runCommand(`testforblock ${Block.x} ${Block.y} ${Block.z} ${Value}`).successCount
            if(BlockValid == 1){
                Data = Block
            }
        }else if(Value == "all"){
            var BlockValid = Block.dimension.runCommand(`testforblock ${Block.x} ${Block.y} ${Block.z} air`).successCount
            if(BlockValid == 0){
                Data = Block
            }
        }
    }) 
    return Data
}
function GetTransformBlockFromArray(Block=mc.Block.prototype, Array=[{"BlockA": {"id": String.prototype, states:{}},"BlockB": {"id": String.prototype, states:{}, shared_states:{}}}]){
    let Data = undefined
    Array.map((Value, Index)=>{
        let BlockA = Value.BlockA
        if(BlockA && BlockA.id){
            var BlockID = Block.dimension.runCommand(`testforblock ${Block.x} ${Block.y} ${Block.z} ${BlockA.id}`).successCount == 1
            if(BlockID){
                let States = JSON.stringify(Block.permutation.getAllStates() || {})
                let AStates = JSON.stringify(BlockA.states || {})
                let BlockB = {
                    "id": Value.BlockB.id,
                    "states": {}
                }
                if(AStates != "{}" && AStates == States){
                    if(BlockB.states && Value.BlockB.shared_states){
                        for(let State in Value.BlockB.shared_states){
                            let BlockAStates = Block.permutation.getAllStates()[Value.BlockB.shared_states[State]]
                            if(BlockAStates){
                                BlockB.states[State] = BlockAStates
                            }
                        }
                    }else if(BlockB.states && Value.BlockB.states){
                        BlockB.states = Value.BlockB.states
                    }
                    Data = {
                        BlockA,
                        BlockB
                    }
                }else if(AStates == "{}"){
                    if(BlockB.states && Value.BlockB.shared_states){
                        for(let State in Value.BlockB.shared_states){
                            let BlockAStates = Block.permutation.getAllStates()[Value.BlockB.shared_states[State]]
                            if(BlockAStates){
                                BlockB.states[State] = BlockAStates
                            }
                        }
                    }else if(BlockB.states && Value.BlockB.states){
                        BlockB.states = Value.BlockB.states
                    }
                    Data = {
                        BlockA,
                        BlockB
                    }
                }
            }
        }
    }) 
    return Data
}
function DirectionView2D(view){
    if(view.x > 0 && view.z == 0){
        return "east"
    }else if(view.x > 0 && view.z < 0){
        return "east"
    }else if(view.x > 0 && view.z > 0){
        return "east"
    }else if(view.x < 0 && view.z < 0){
        return "west"
    }else if(view.x < 0 && view.z > 0){
        return "west"
    }else if(view.x < 0 && view.z == 0){
        return "west"
    }else if(view.x == 0 && view.z > 0){
        return "south"
    }else if(view.x < 0 && view.z > 0){
        return "south"
    }else if(view.x > 0 && view.z > 0){
        return "south"
    }else if(view.x == 0 && view.z < 0){
        return "north"
    }else if(view.x < 0 && view.z < 0){
        return "north"
    }else if(view.x > 0 && view.z < 0){
        return "north"
    }
}
function DirectionRot2D(rotY) {
    // Normaliza a rotação para o intervalo [-180, 180)
    rotY = Math.round((((rotY + 180) % 360 + 360) % 360 - 180))
    if (rotY < -135 || rotY >= 135) {
      return "north";
    } else if (rotY >= -135 && rotY < -45) {
      return "east";
    } else if (rotY >= -45 && rotY < 45) {
      return "south";
    } else {
      return "west";
    }
}
//Function Game
function VeinBlock(BlockTarget=mc.Block.prototype, BlocksLimit=0, BlockDestroyList=[String.prototype], Blocks=[String.prototype], Entity, TeleportDrop){
    let NewBlocks = Blocks
    let id = `${BlockTarget.x} ${BlockTarget.y} ${BlockTarget.z}`
    let ValidBlock = GetBlockFromArray(BlockTarget, BlockDestroyList)
    if(ValidBlock && NewBlocks.includes(id) == false && Blocks.length < BlocksLimit){
        NewBlocks.push(id)
        let AllOffsets = [
            BlockTarget.above(1),
            BlockTarget.below(1),
            BlockTarget.east(1),
            BlockTarget.west(1),
            BlockTarget.north(1),
            BlockTarget.south(1)
        ]
        BlockTarget.dimension.runCommand(`setblock ${id} air [] destroy`)
        if(TeleportDrop){
            BlockTarget.dimension.getEntities({location:BlockTarget.location, type:"minecraft:item", maxDistance:2, minDistance:0}).map(item=>{
                item.teleport(Entity.location)
            })
        }
        AllOffsets.forEach((NBlockTarget)=>{
            if(NBlockTarget){
                mc.system.runTimeout(()=>{
                    VeinBlock(NBlockTarget, BlocksLimit, BlockDestroyList, NewBlocks, Entity, TeleportDrop)
                }, 2)
            }
        })
    }
}
//Events
mc.world.beforeEvents.itemUseOn.subscribe(data=>{
    let block = data.block
    let face = data.blockFace
    let entity = data.source
    let item = data.itemStack
    if(entity.isSneaking == false && item?.typeId in ItemEvents && item?.getDynamicProperty("projecte:level") > 0 && item.getDynamicProperty("projecte:use_mode") >= 0){
        let ItemData = ItemEvents[item.typeId]
        let ActionType = ItemData["use_modes"][item.getDynamicProperty("projecte:use_mode")]
        let ActionEvent = ItemData["uses"][ActionType]
        let Action = ItemData["uses"][ActionType][`lvl:${item.getDynamicProperty("projecte:level")}`]
        if(ActionType == "default_use" && Action){
            let actionDirection = Action["directions"][face]
            data.cancel = true
            mc.system.run(()=>{
               if(actionDirection){
                  let rot = Rotation[DirectionRot2D(entity.getRotation().y)]
                  let from =  actionDirection.rot == true ? rotationPosition(actionDirection.from, rot) : actionDirection.from
                  let to = actionDirection.rot == true ? rotationPosition(actionDirection.to, rot) : actionDirection.to
                  let fFrom = {x:Math.min(from.x, to.x),y:Math.min(from.y, to.y), z:Math.min(from.z, to.z)}
                  let fTo = {x:Math.max(from.x, to.x),y:Math.max(from.y, to.y), z:Math.max(from.z, to.z)}
                  let FirstBlock = 0
                  for(let x = fFrom.x; x <= fTo.x; x++){
                      for(let y = fFrom.y; y <= fTo.y; y++){
                          for(let z = fFrom.z; z <= fTo.z; z++){
                              let blockT = block.offset({x, y, z})
                              let TransformBlock = GetTransformBlockFromArray(blockT, ActionEvent.transform_blocks)
                              if(TransformBlock){
                                  FirstBlock += 1
                                  blockT.setPermutation(mc.BlockPermutation.resolve(TransformBlock.BlockB.id, TransformBlock.BlockB.states))
                              }
                          }
                      }
                  }
                  if(FirstBlock >= 1){
                    mc.world.playSound(`item.petransmute`, block.location, {volume: 1})
                  }
               }
            })
          }
    }
})
mc.world.beforeEvents.playerBreakBlock.subscribe(data=>{
    let entity = data.player
    let item = data.itemStack
    let block = data.block
    let dimension = data.dimension
    let blockView = entity.getBlockFromViewDirection({maxDistance:7})
    if(item?.typeId in ItemEvents && item?.getDynamicProperty("projecte:level") > 0 && item.getDynamicProperty("projecte:destroy_mode") >= 0){
        let ItemData = ItemEvents[item.typeId]
        let ActionType = ItemData["destroy_modes"][item.getDynamicProperty("projecte:destroy_mode")]
        let ActionEvent = ItemData["destroys"][ActionType]
        let Action = ItemData["destroys"][ActionType][`lvl:${item.getDynamicProperty("projecte:level")}`]
        if(ActionType == "vein" && Action){
            let AllOffsets = [
                block.above(1),
                block.below(1),
                block.east(1),
                block.west(1),
                block.north(1),
                block.south(1)
            ]
            mc.system.run(data=>{
                let first = 0
                for(let blockT of AllOffsets){
                    if(first == 0){
                        let ValidBlock = GetBlockFromArray(blockT, ActionEvent.destroy_blocks)
                        if(ValidBlock){
                            VeinBlock(blockT, Action.limit, ActionEvent.destroy_blocks, [], entity, ItemData["destroys"][ActionType].teleport_drop)
                            first += 1
                        }
                    }
                }
               if(first > 0){
                entity.playSound(`item.pedestruct`, {volume:1})
               }
            })
            
        }else if(ActionType == "destroy_range" && Action && blockView){
            mc.system.run(()=>{
                let actionDirection = Action["directions"][blockView.face]
                if(actionDirection){
                      let rot = Rotation[DirectionRot2D(entity.getRotation().y)]
                      let from =  actionDirection.rot == true ? rotationPosition(actionDirection.from, rot) : actionDirection.from
                      let to = actionDirection.rot == true ? rotationPosition(actionDirection.to, rot) : actionDirection.to
                      let fFrom = {x:Math.min(from.x, to.x),y:Math.min(from.y, to.y), z:Math.min(from.z, to.z)}
                      let fTo = {x:Math.max(from.x, to.x),y:Math.max(from.y, to.y), z:Math.max(from.z, to.z)}
                      let FirstBlock = 0
                      for(let x = fFrom.x; x <= fTo.x; x++){
                          for(let y = fFrom.y; y <= fTo.y; y++){
                              for(let z = fFrom.z; z <= fTo.z; z++){
                                  let blockT = block.offset({x, y, z})
                                  let validBlock = GetBlockFromArray(blockT, ActionEvent.destroy_blocks)
                                  if(validBlock){
                                      FirstBlock += 1
                                      mc.system.runTimeout(()=>{
                                        blockT.dimension.runCommand(`setblock ${blockT.x} ${blockT.y} ${blockT.z} air [] destroy`)
                                        if(ItemData["destroys"][ActionType].teleport_drop){
                                          blockT.dimension.getEntities({type:"minecraft:item", location:blockT.location, maxDistance:2,minDistance:0}).map(item=>{
                                              item.teleport(entity.location)
                                          })
                                        }
                                      },2)
                                  }
                              }
                          }
                      }
                      if(FirstBlock >= 1){
                          entity.playSound(`item.pedestruct`, {volume:1})
                      }
                }
            })
        }
    }
})
mc.world.afterEvents.entityHurt.subscribe(data=>{
    let EntitySource = data.damageSource.damagingEntity
    let AttackSource = data.damageSource.cause
    let AttackDamage = data.damage
    let EntityTarget = data.hurtEntity
    let item = EntitySource?.getComponent("equippable")?.getEquipment("Mainhand")
    if(EntitySource && AttackSource == "entityAttack"){
        if(item && item?.typeId in ItemEvents && item?.getDynamicProperty("projecte:level") > 0 && item?.getDynamicProperty("projecte:attack_mode") >= 0){
            let ItemLevel = item.getDynamicProperty("projecte:level")
            let ItemDamage = item.getDynamicProperty("minecraft:additional_damage")
            let ItemData = ItemEvents[item.typeId]
            let Mode = ItemData["attack_modes"][item.getDynamicProperty("projecte:attack_mode")]
            let Action = ItemData["attacks"][Mode]
            if(Mode == "black_hole" && Action){
                EntitySource.playSound(`item.pedestruct`, {volume:1})              
                Action.user_effects ? Action.user_effects.forEach(effect=>{EntitySource.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                EntityTarget.dimension.getEntities({type:EntityTarget.typeId, excludeTypes:["minecraft:player"], location:EntityTarget.location, maxDistance:Action.range, minDistance:0}).map((entity)=>{
                    entity.teleport(EntityTarget.location, {"checkForBlocks": true})
                    entity.clearVelocity()
                    Action.attack.flame != undefined ? entity.setOnFire(Action.attack.flame, false) : null
                    Action.target_effects ? Action.target_effects.forEach(effect=>{entity.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                    entity.id != EntityTarget.id ? entity.applyDamage((ItemDamage + AttackDamage) * Action.attack.damage_multiplier) : entity.applyDamage(ItemDamage * Action.attack.damage_multiplier)
                })
            }else if(Mode == "default_attack" && Action){
                Action.user_effects ? Action.user_effects.forEach(effect=>{EntitySource.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                Action.attack.flame != undefined ? EntityTarget.setOnFire(Action.attack.flame, false) : null
                Action.target_effects ? Action.target_effects.forEach(effect=>{EntityTarget.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                EntityTarget.applyDamage((ItemDamage) * Action.attack.damage_multiplier)
            }else if(Mode == "range_attack" && Action){
                Action.user_effects ? Action.user_effects.forEach(effect=>{EntitySource.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                EntitySource.dimension.getEntities({type:EntityTarget.typeId, excludeTypes:["minecraft:player"], location:EntitySource.location, maxDistance:Action.range, minDistance:0}).map((entity)=>{
                    Action.attack.flame != undefined ? entity.setOnFire(Action.attack.flame, false) : null
                    Action.target_effects ? Action.target_effects.forEach(effect=>{entity.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                    entity.applyDamage((ItemDamage) * Action.attack.damage_multiplier)
                })
            }else if(Mode == "solar_burn" && Action){
                Action.user_effects ? Action.user_effects.forEach(effect=>{EntitySource.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                if(EntityHeavyAttackDelay.includes(`${EntitySource.id}`) == false && EntitySource.isInWater == false && (mc.world.getTimeOfDay() >= 1000 && mc.world.getTimeOfDay() <= 12000)){
                    let AttackSeconds = 2
                    EntitySource.playSound("item.pedestruct", {volume:1})
                    if(AttackSeconds > 0){
                        EntityHeavyAttackDelay.push(`${EntitySource.id}`)
                        mc.system.runTimeout(()=>{
                            EntitySource.onScreenDisplay.setActionBar({"rawtext":[{"translate": "game.player_stunned"}, {"text": `${Math.round(AttackSeconds)}s`}]})
                            EntitySource.playSound("item.peuncharge", {volume:1})
                        }, 8)
                        mc.system.runTimeout(()=>{
                            delete EntityHeavyAttackDelay[EntityHeavyAttackDelay.indexOf(`${EntitySource.id}`)]
                            EntitySource.onScreenDisplay.setActionBar({"rawtext":[{"translate": "game.attack_delay_over"}]})
                            EntitySource.playSound("item.pecharge", {volume:1})
                        }, (20 * AttackSeconds))
                    }
                    EntitySource.dimension.getEntities({type:EntityTarget.typeId, excludeTypes:["minecraft:player"], location:EntitySource.location, maxDistance:Action.range, minDistance:0}).map((entity)=>{
                        entity.setOnFire(10, false)
                        entity.dimension.createExplosion(entity.location, 0.5, {"causesFire": false, "breaksBlocks": false, "allowUnderwater": false, "source": EntitySource})
                        Action.target_effects ? Action.target_effects.forEach(effect=>{entity.addEffect(effect.type, effect.time, {amplifier: effect.amplifier})}) : null
                        entity.applyDamage((ItemDamage) * Action.attack.damage_multiplier)
                    })
                }
            }
        }
    }
})
mc.world.afterEvents.itemUse.subscribe(data=>{
    let entity = data.source
    let item = data.itemStack
    let ItemData = ItemEvents[item?.typeId]
    let blockView = entity.getBlockFromViewDirection()
    if(ItemData && entity.isSneaking){
        ItemConfigurateUI(entity, item)
    }
})