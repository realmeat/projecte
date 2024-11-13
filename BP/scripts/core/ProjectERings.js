import * as mc from "@minecraft/server";
import * as mcui from "@minecraft/server-ui";
import * as tools from "../ToolsUtils.js";
import * as RingsData from "../configurations/Rings.js"
import * as ItemIcons from "../configurations/ItemIcons.js"
//Variables
const RingItems = RingsData["default"]
var BlocksChangeds = {}
var EntityChangeds = {}
var PlayersFlying = {}
var FacesLocation = {
    "North": tools.Vector(0, 0, -1),
    "South": tools.Vector(0, 0, 1),
    "East": tools.Vector(1, 0, 0),
    "West": tools.Vector(-1, 0, 0),
    "Up": tools.Vector(0, 1, 0),
    "Down": tools.Vector(0, -1, 0)

}
export const Events = {
    "ProjectileShoot": async (Entity = mc.Player.prototype, Params) => {
        if (Params.id) {
            let entityInventory = Entity.getComponent("inventory")?.container
            let invSize = new Array(entityInventory.size).fill("1")
            let ViewDirection = tools.Vector().add(Entity.getViewDirection()).mul(1.1)
            let VelocityDir = tools.VectorMul(tools.newVector(2.5, 2.5, 2.5), ViewDirection)
            for (let i = 0; i < (Params.repeat || 1); i++) {
                let itemValid = false
                if (entityInventory && Params.item) {
                    invSize.forEach((_, index) => {
                        let slot = entityInventory.getSlot(index)
                        let item = slot.getItem()
                        if (item && item.typeId == Params.item && itemValid == false) {
                            itemValid = true
                            let old = item.amount
                            old = tools.clamp(old - 1, 0, 64)
                            item.amount = old >= 2 ? old : 1
                            slot.setItem(old > 0 ? item : undefined)
                        }
                    })
                } else if (Params.item == undefined) {
                    Entity.playSound("item.petransmute")
                    itemValid = true
                }
                if (itemValid == true) {
                    let RandomOffset = tools.VectorAdd(tools.Vector((0.5 * Math.random()), (0.5 * Math.random()), (0.5 * Math.random())).add(Entity.getHeadLocation()), ViewDirection)
                    let FinalVec = Params.random_offset ? RandomOffset : tools.Vector(1, 1, 1).mul(ViewDirection).add(Entity.getHeadLocation())
                    let projectile = Entity.dimension.spawnEntity(Params.id, FinalVec)
                    projectile.setDynamicProperty("minecraft:owner_id", Entity.id)
                    projectile.setDynamicProperty("minecraft:target_id", -1)
                    projectile.setDynamicProperty("minecraft:follow", true)
                    projectile.applyImpulse(VelocityDir)
                    if (Params.facing) {
                        projectile.teleport(projectile.location, { keepVelocity: true, facingLocation: tools.VectorAdd(projectile.location, VelocityDir) })
                    }
                }
                if (Params.delay > 0) {
                    await new Promise(resolve => mc.system.runTimeout(resolve, Params.delay))
                }

            }
        }
    },
    "SetBlock": async (Entity = mc.Player.prototype, Params) => {
        if (Params.id) {
            let BlockView = Entity.getBlockFromViewDirection({ maxDistance: 7 })
            if (BlockView) {
                let Block = BlockView.block.offset(FacesLocation[BlockView.face])
                if (Params.solid) {
                    let isAir = Entity.runCommand(`execute if block ${Block.x} ${Block.y} ${Block.z} air`).successCount == 1
                    if (isAir) {
                        Block.setPermutation(mc.BlockPermutation.resolve(Params.id, Params.states))
                        Entity.playSound("item.petransmute")
                    }
                }
            }
        }
    },
    "DelayedItem": async (Entity = mc.Player.prototype, Params = { item: mc.ItemStack.prototype }) => {
        let item = Params.item
        let delay = item.getDynamicProperty("projecte:item_delay")
        if (delay > 0) {
            item.setDynamicProperty("projecte:item_delay", delay - 1)
            if (item.getDynamicProperty("projecte:item_delay") == 0) {
                Entity.playSound("item.pecharge")
                Entity.onScreenDisplay.setActionBar({ "rawtext": [{ translate: Params.text }, { text: " " }, { text: "Reloaded" }] })
            }
            Entity.getComponent("inventory").container.setItem(Params.slot, item)
        }
    },
    "MindStoneUse": async (Entity = mc.Player.prototype, Params = { item: mc.ItemStack.prototype }) => {
        if (Params.amount) {
            let item = Params.item
            let delay = item.getDynamicProperty("projecte:item_delay")
            if (delay == 0 || delay == undefined) {
                Entity.playSound("item.peuncharge")
                item.setDynamicProperty("projecte:item_delay", Params.delay || 0)
                Entity.addExperience(Params.amount)
                Entity.getComponent("equippable").setEquipment("Mainhand", item)
            }
        }
    },
    "SoulStoneUse": async (Entity = mc.Player.prototype, Params = { item: mc.ItemStack.prototype }) => {
        if (Params.amount) {
            let item = Params.item
            let delay = item.getDynamicProperty("projecte:item_delay")
            if (delay == 0 || delay == undefined) {
                Entity.playSound("item.peuncharge")
                item.setDynamicProperty("projecte:item_delay", Params.delay || 0)
                Entity.getComponent("health").setCurrentValue(Entity.getComponent("health").currentValue + Params.amount)
                Entity.getComponent("equippable").setEquipment("Mainhand", item)
            }
        }
    },
    "LifeStoneUse": async (Entity = mc.Player.prototype, Params = { item: mc.ItemStack.prototype }) => {
        if (Params.amount) {
            let item = Params.item
            let delay = item.getDynamicProperty("projecte:item_delay")
            if (delay == 0 || delay == undefined) {
                Entity.playSound("item.peuncharge")
                item.setDynamicProperty("projecte:item_delay", Params.delay || 0)
                Entity.getComponent("health").setCurrentValue(Entity.getComponent("health").currentValue + Params.amount)
                Entity.addEffect("saturation", 1, { amplifier: Params.amount, showParticles: false })
                Entity.getComponent("equippable").setEquipment("Mainhand", item)
            }
        }
    },
    "BodyStoneUse": async (Entity = mc.Player.prototype, Params = { item: mc.ItemStack.prototype }) => {
        if (Params.amount) {
            let item = Params.item
            let delay = item.getDynamicProperty("projecte:item_delay")
            if (delay == 0 || delay == undefined) {
                Entity.playSound("item.peuncharge")
                item.setDynamicProperty("projecte:item_delay", Params.delay || 0)
                Entity.addEffect("saturation", 1, { amplifier: Params.amount, showParticles: false })
                Entity.getComponent("equippable").setEquipment("Mainhand", item)
            }
        }
    },
    "SphereProjectileShoot": (Entity = mc.Player.prototype, Params) => {
        if (Params.id && Params.radius) {
            let entityInventory = Entity.getComponent("inventory")?.container
            let invSize = new Array(entityInventory.size).fill("1")
            let Target = Entity.getEntitiesFromViewDirection({ "maxDistance": 10 })[0]
            let DomePositions = tools.createSphere(Params.radius, Params.amount)
            if (Target) {
                Target = Target.entity
                DomePositions.forEach(async (position) => {
                    let itemValid = false
                    if (entityInventory && Params.item) {
                        invSize.forEach((_, index) => {
                            let slot = entityInventory.getSlot(index)
                            let item = slot.getItem()
                            if (item && item.typeId == Params.item && itemValid == false) {
                                itemValid = true
                                let old = item.amount
                                old = tools.clamp(old - 1, 0, 64)
                                item.amount = old >= 2 ? old : 1
                                slot.setItem(old > 0 ? item : undefined)
                            }
                        })
                    } else if (Params.item == undefined) {
                        itemValid = true
                    }
                    if (itemValid == true) {
                        let projectile = Entity.dimension.spawnEntity(Params.id, tools.VectorAdd(Target.getHeadLocation(), position))
                        projectile.setDynamicProperty("minecraft:owner_id", Entity.id)
                        projectile.setDynamicProperty("minecraft:follow", true)
                        projectile.setDynamicProperty("minecraft:target_id", -1)
                        projectile.teleport(projectile.location, { keepVelocity: false, facingLocation: Target.getHeadLocation() })
                        projectile.setProperty("projecte:rot_x", projectile.getRotation().x)
                        projectile.setProperty("projecte:rot_y", projectile.getRotation().y)
                    }
                    await new Promise(resolve => mc.system.runTimeout(resolve, 8))
                })
            }
        }
    },
    "FollowUser": async (Entity = mc.Player.prototype, Params = { types: [], radius: 0 }) => {
        if (Params.radius) {
            let options = { location: Entity.location, maxDistance: Params.radius, minDistance: 0 }
            if (Params.options) { Object.assign(options, Params.options) }
            let targets = Entity.dimension.getEntities(options)
            targets.map((target => {
                if (target.id != Entity.id) {
                    if ((Params.types && Params.types.length > 0 && Params.types.includes(target.typeId)) || (Params.types == undefined || JSON.stringify(Params.types) == "[]")) {
                        target.teleport(tools.VectorAdd(target.location, tools.VectorMul(tools.newVector(0.1, 0.1, 0.1), tools.VectorMul(target.getViewDirection(), 1.1))), { facingLocation: Entity.location, keepVelocity: false, checkForBlocks: true })
                    }
                }
            }))
        }
    },
    "HarvestGod": async (Entity = mc.Player.prototype, Params = { types: [], radius: 0 }) => {
        if (Params.radius) {
            for (let x = (Params.radius * -1); x < Params.radius; x++) {
                for (let z = (Params.radius * -1); z < Params.radius; z++) {
                    let Block = Entity.dimension.getBlock(tools.Vector(x, 0, z).add(Entity.location))
                    let States = Block.permutation.getAllStates()
                    let BlockID = `${Block.location.x}:${Block.location.y}:${Block.location.z}`
                    if (Block && BlocksChangeds[BlockID] == undefined) {
                        let StateTarget = undefined
                        let StateVal = undefined
                        for (let state in States) {
                            let CurrentState = States[state]
                            if (state.includes("growth") && typeof (CurrentState) == "number" && (StateTarget == undefined && StateVal == undefined)) {
                                StateVal = Block.permutation.getState(state)
                                StateTarget = state
                            }
                        }
                        if (StateTarget) {
                            let Values = mc.BlockStates.get(StateTarget).validValues
                            let NextState = tools.clamp(StateVal + 1, Values[0], Values[Values.length - 1])
                            if (NextState > StateVal) {
                                BlocksChangeds[BlockID] = true
                                let RandomTick = 20 * Math.random()
                                mc.system.runTimeout(() => {
                                    if (Block.permutation.getState(StateTarget)) {
                                        Block.setPermutation(Block.permutation.withState(StateTarget, NextState))
                                    }
                                    delete BlocksChangeds[BlockID]
                                }, (tools.clamp(RandomTick, 5, 20)))
                            }
                        }
                    }
                }
            }
        }
    },
    "ZeroRing": async (Entity = mc.Player.prototype, Params = { types: [], radius: 0 }) => {
        if (Params.radius) {
            let options = { location: Entity.location, maxDistance: Params.radius, minDistance: 0 }
            if (Params.options) { Object.assign(options, Params.options) }
            let targets = Entity.dimension.getEntities(options)
            targets.map((target => {
                target.extinguishFire(true)
                if (target.typeId == "minecraft:blaze" && !EntityChangeds[`${target.id}`]) {
                    EntityChangeds[`${target.id}`] = true
                    mc.system.runTimeout(() => {
                        target.applyDamage(2 * Math.random())
                        delete EntityChangeds[`${target.id}`]
                    }, tools.clamp(20 * Math.random(), 10, 20))

                }
            }))
            for (let x = Params.radius * -1; x < Params.radius; x++) {
                for (let z = Params.radius * -1; z < Params.radius; z++) {
                    let Block = Entity.dimension.getBlock(tools.Vector(x, -1, z).add(Entity.location))
                    let BlockID = `${Block.location.x}:${Block.location.y}:${Block.location.z}`
                    if (Block && (Block.hasTag("stone") || Block.hasTag("dirt")) && BlocksChangeds[BlockID] == undefined) {
                        let BlockAbove = Block.above(1)
                        if (BlockAbove) {
                            let BlockAir = Block.dimension.runCommand(`execute if block ${BlockAbove.x} ${BlockAbove.y} ${BlockAbove.z} air`)
                            if (BlockAir.successCount == 1) {
                                BlocksChangeds[BlockID] = true
                                let Rand = 100 * Math.random()
                                if (Rand >= 50) {
                                    let RandomTick = (10 * Math.random()).toFixed(2)
                                    mc.system.runTimeout(() => {
                                        BlockAbove.setPermutation(mc.BlockPermutation.resolve("minecraft:snow_layer"))
                                        delete BlocksChangeds[BlockID]
                                    }, (tools.clamp(RandomTick, 3, 10)))

                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "VoidRing": async (Entity = mc.Player.prototype, Params = { types: [], radius: 0 }) => {
        let entityInventory = Entity.getComponent("inventory")?.container
        let Mainhand = Entity.getComponent("equippable").getEquipmentSlot("Mainhand")
        let Ring = Mainhand.getItem()
        let UI = new mcui.ActionFormData()
        UI.title("void_ring_filter")
        UI.body("Void Ring Filter")
        //Interaction Area
        let Items = Array(entityInventory.size).fill("none")
        let Selects = []
        let Selecteds = JSON.parse(Ring.getDynamicProperty("projecte:filter") || "[]")
        Items.forEach((_, index) => {
            let item = entityInventory.getItem(index)
            if (item && item.typeId != Ring.typeId && !Selects.includes(item.typeId)) {
                let failed = false
                try {
                    mc.BlockPermutation.resolve(item.typeId)
                } catch (e) {
                    failed = true
                }
                let isBlock = failed ? "item" : "tile"
                let ItemText = item.typeId.replace("minecraft:", "")
                Selects.push(item.typeId)
                UI.button({ "rawtext": [{ translate: `${isBlock}.${ItemText}${item.typeId.startsWith("minecraft:") ? '.name' : ''}` }, { text: Selecteds.includes(item.typeId) ? "\n§rSelected§r" : "" }] }, `${ItemIcons.icons[(item.typeId)]}`)
            }
        })
        Selecteds.forEach((id, index) => {
            if (id && !Selects.includes(id) && id != Ring.typeId) {
                let failed = false
                try {
                    mc.BlockPermutation.resolve(id)
                } catch (e) {
                    failed = true
                }
                let isBlock = failed ? "item" : "tile"
                let ItemText = id.replace("minecraft:", "")
                Selects.push(id)
                UI.button({ "rawtext": [{ translate: `${isBlock}.${ItemText}.name` }, { text: Selecteds.includes(id) ? "\n§rSelected§r" : "" }] }, `${ItemIcons.icons[(id)]}`)
            }
        })
        UI.show(Entity).then(form => {
            let selection = Selects[form.selection]
            // console.warn(form.selection)
            if (form.canceled == false) {
                if (selection) {
                    if (!Selecteds.includes(selection)) {
                        Selecteds.push(selection)
                        Ring.setDynamicProperty("projecte:filter", JSON.stringify(Selecteds))
                        Mainhand.setItem(Ring)
                    } else if (Selecteds.includes(selection)) {
                        Ring.setDynamicProperty("projecte:filter", JSON.stringify(Selecteds.slice(Selecteds.indexOf(selection), Selecteds.indexOf(selection))))
                        Mainhand.setItem(Ring)
                    }
                    Events["VoidRing"](Entity, Params)
                }
            }
        })
    },
    "VoidRingDrop": async (Entity = mc.Player.prototype, Params = { types: [], radius: 0 }) => {
        let entityInventory = Entity.getComponent("inventory")?.container
        let Ring = Params.item
        let Items = Array(entityInventory.size).fill("none")
        let Selects = []
        let Selecteds = JSON.parse(Ring.getDynamicProperty("projecte:filter") || `[]`)
        if (Selecteds.length > 0) {
            Items.forEach((_, index) => {
                let slot = entityInventory.getSlot(index)
                let item = slot.getItem()
                if (item && Selecteds.includes(item.typeId)) {
                    slot.setItem()
                }
            })
        }
        if (Params.radius) {
            let options = { location: Entity.location, maxDistance: Params.radius, minDistance: 0, type: "minecraft:item" }
            if (Params.options) { Object.assign(options, Params.options) }
            let targets = Entity.dimension.getEntities(options)
            targets.map((target => {
                if (target.id != Entity.id) {
                    if (Selecteds.length > 0) {
                        let Component = target.getComponent("item").itemStack.typeId
                        if (Selecteds.includes(Component)) {
                            target.teleport(tools.VectorAdd(target.location, tools.VectorMul(tools.newVector(0.1, 0.1, 0.1), tools.VectorMul(target.getViewDirection(), 1.1))), { facingLocation: Entity.location, keepVelocity: false, checkForBlocks: true })
                        }
                    } else {
                        target.teleport(tools.VectorAdd(target.location, tools.VectorMul(tools.newVector(0.1, 0.1, 0.1), tools.VectorMul(target.getViewDirection(), 1.1))), { facingLocation: Entity.location, keepVelocity: false, checkForBlocks: true })
                    }

                }
            }))
        }
    },
    "SwrgFly": async (Entity = mc.Player.prototype, Params = { types: [], type, radius: 0 }) => {
        if (!PlayersFlying[`${Entity.id}`]) {
            PlayersFlying[`${Entity.id}`] = {
                slot: Params.slot,
                type: Params.type,
                item: Params.item
            }
            Entity.runCommand(`ability @s mayfly true`)
        }
    },
    "HurricaneBoots": async (Entity = mc.Player.prototype, Params = { types: [], type, radius: 0 }) => {
        if (Entity.isSneaking) {
            Entity.addEffect(`jump_boost`, 1, { "showParticles": false, "amplifier": 10 })
        } else if (!Entity.isSneaking) {
            Entity.addEffect(`jump_boost`, 1, { "showParticles": false, "amplifier": 2 })
        }
        if (!PlayersFlying[`${Entity.id}`]) {
            PlayersFlying[`${Entity.id}`] = {
                slot: Params.slot,
                type: Params.type,
                item: Params.item
            }
            Entity.runCommand(`ability @s mayfly true`)
        }
    },
    "GravityGreaves": async (Entity = mc.Player.prototype, Params = { types: [], type, radius: 0 }) => {
        Entity.addEffect(`resistance`, 10, { "showParticles": false, "amplifier": 5 })
        if (Entity.isSneaking && Entity.isFalling) {
            Entity.addEffect(`slow_falling`, 10, { "showParticles": false, "amplifier": 2 })
        }
    },
    "InfernalArmor": async (Entity = mc.Player.prototype, Params = { types: [], type, radius: 0 }) => {
        Entity.addEffect(`fire_resistance`, 10, { "showParticles": false, "amplifier": 2 })
    },
    "AbyssHelmet": async (Entity = mc.Player.prototype, Params = { types: [], type, radius: 0 }) => {
        if (Entity.isSneaking && Entity.isOnGround) {
            let target = Entity.getEntitiesFromViewDirection({ "maxDistance": 7 })[0]?.entity
            if (target && EntityChangeds[`${target.id}`] == undefined) {
                EntityChangeds[`${target.id}`] = true
                target.runCommand(`summon lightning_bolt ~~~`)
                mc.system.runTimeout(() => {
                    delete EntityChangeds[`${target.id}`]
                }, 10)

            }
        }
        //  console.warn(mc.world.getTimeOfDay())
        if (Entity.isInWater) {
            Entity.addEffect(`water_breathing`, 2, { "showParticles": false, "amplifier": 2 })
        }
    },
    "SwrgThunder": async (Entity = mc.Player.prototype, Params = { types: [], radius: 0 }) => {
        if (Params.radius) {
            let options = { location: Entity.location, maxDistance: Params.radius, minDistance: 0, type: "minecraft:item" }
            if (Params.options) { Object.assign(options, Params.options) }
            let targets = Entity.dimension.getEntities({ families: ["mob"] })
            targets.map((target => {
                if (!EntityChangeds[`${target.id}`]) {
                    EntityChangeds[`${target.id}`] = true
                    mc.system.runTimeout(() => {
                        target.runCommand(`summon ~ ~ ~ lightning_bolt`)
                        delete EntityChangeds[`${target.id}`]
                    }, tools.clamp(20 * Math.random(), 10, 20))

                }
            }))
        }
    }
}
//Functions
//Events
mc.world.afterEvents.itemUse.subscribe(async (data) => {
    let entity = data.source
    let item = data.itemStack
    let RingData = RingItems[item?.typeId]
    if (RingData) {
        if (entity.isSneaking) {
            let CurrentMode = item.getDynamicProperty("projecte:mode") || 0
            let NextMode = CurrentMode >= RingData.sequences_change.length - 1 ? 0 : CurrentMode + 1
            item.getDynamicProperty("projecte:mode") == undefined ? item.setDynamicProperty("projecte:mode", CurrentMode) : item.setDynamicProperty("projecte:mode", NextMode)
            CurrentMode = item.getDynamicProperty("projecte:mode")
            entity.onScreenDisplay.setActionBar({ rawtext: [{ translate: "item.mode" }, { text: "§u" }, { translate: (RingData.texts[RingData.modes[CurrentMode]].raw) }] })
            item.setLore([`§r§7Use Mode: §u${RingData.texts[RingData.modes[CurrentMode]].default || RingData.modes[CurrentMode]}`])
            let sequence = RingData.sequences_change[CurrentMode]
            if (sequence.type == "transform") {
                let newItem = new mc.ItemStack(sequence.value.id)
                newItem.setLore(item.getLore())
                for (let propertyId of item.getDynamicPropertyIds()) {
                    newItem.setDynamicProperty(propertyId, item.getDynamicProperty(propertyId))
                }
                entity.playSound(`item.petransmute`, { volume: 0.6 })
                entity.getComponent("equippable").setEquipment("Mainhand", newItem)
            } else if (sequence.type == "mode") {
                entity.playSound(`item.petransmute`, { volume: 0.6 })
                entity.getComponent("equippable").setEquipment("Mainhand", item)
            }
        } else if (!entity.isSneaking) {
            if (RingData.type == "use") {
                let CurrentMode = item.getDynamicProperty("projecte:mode") || 0
                let mode = RingData["actions"][RingData["modes"][CurrentMode]]
                if (mode && mode.event in Events) {
                    let params = mode.params
                  //  Object.assign(params, { item })
                    Events[mode.event](entity, params)
                }
            } else if (RingData.type == "inventory-use") {
                let CurrentMode = item.getDynamicProperty("projecte:mode") || 0
                let mode = RingData["use_actions"][RingData["modes"][CurrentMode]]
                if (mode && mode.event in Events) {
                    let params = mode.params
                  //  Object.assign(params, { item })
                    Events[mode.event](entity, params)
                }
            }
        }
    }
})
mc.system.afterEvents.scriptEventReceive.subscribe(data => {
    let entity = mc.Player.prototype
    entity = data.sourceEntity
    if (entity && data.id == "projecte:rings_detect" && entity.typeId == "minecraft:player") {
        let entityInventory = entity.getComponent("inventory")?.container
        let equipment = entity.getComponent("equippable")
        let equipments = ["Chest", "Head", "Feet", "Legs", "Offhand"]
        equipments.forEach((slot, index) => {
            let item = equipment.getEquipment(slot)
            let RingData = RingItems[item?.typeId]
            if (RingData && RingData.type == "equipment") {
                let CurrentMode = item.getDynamicProperty("projecte:mode") || 0
                let mode = RingData["actions"][RingData["modes"][CurrentMode]]
                if (mode && mode.event in Events) {
                    Object.assign(mode.params, { item, slot: slot, type: "equipment" })
                    Events[mode.event](entity, mode.params)
                }
            }
        })
        if (entityInventory) {
            let invSize = new Array(entityInventory.size).fill("1")
            invSize.forEach((_, index) => {
                let item = entityInventory.getItem(index)
                let RingData = RingItems[item?.typeId]
                if (RingData && RingData.type == "inventory") {
                    let CurrentMode = item.getDynamicProperty("projecte:mode") || 0
                    let mode = RingData["actions"][RingData["modes"][CurrentMode]]
                    if (mode && mode.event in Events) {
                        Object.assign(mode.params, { item, slot: index, type: "inventory" })
                        Events[mode.event](entity, mode.params)
                    }
                } else if (RingData && RingData.type == "inventory-use") {
                    let CurrentMode = item.getDynamicProperty("projecte:mode") || 0
                    let mode = RingData["inventory_actions"][RingData["modes"][CurrentMode]]
                    if (mode && mode.event in Events) {
                        Object.assign(mode.params, { item, slot: index, type: "inventory" })
                        Events[mode.event](entity, mode.params)
                    }
                }
            })
        }
        if (PlayersFlying[`${entity.id}`]) {
            let playerFlying = PlayersFlying[`${entity.id}`]
            let item = undefined
            if (playerFlying.type == "inventory") {
                item = entityInventory.getItem(playerFlying.slot)
                if ((item && item.typeId != playerFlying.item.typeId) || (!item)) {
                    let inSurvival = entity.runCommand(`testfor @s[m=s]`).successCount == 1
                    entity.runCommand(`ability @s[m=s] mayfly false`)
                    entity.runCommand(`ability @s[m=a] mayfly false`)
                    if (inSurvival) {
                        entity.runCommand("gamemode a")
                        entity.runCommand(`gamemode s`)
                    }
                    delete PlayersFlying[`${entity.id}`]

                }
            } else if (playerFlying.type == "equipment") {
                item = equipment.getEquipment(playerFlying.slot)
                if ((item && item.typeId != playerFlying.item.typeId) || (!item)) {
                    let inSurvival = entity.runCommand(`testfor @s[m=s]`).successCount == 1
                    entity.runCommand(`ability @s[m=s] mayfly false`)
                    entity.runCommand(`ability @s[m=a] mayfly false`)
                    if (inSurvival) {
                        entity.runCommand("gamemode a")
                        entity.runCommand(`gamemode s`)
                    }
                    delete PlayersFlying[`${entity.id}`]

                }
            }

        }
    }
})
///Actors Systems
mc.world.afterEvents.dataDrivenEntityTrigger.subscribe(data => {
    let entity = data.entity
    let event = data.eventId
    if (event == "projecte:archangel_arrow" && entity.typeId == "projecte:archangel_arrow" && entity.isValid()) {
        if (entity.getDynamicProperty("minecraft:follow")) {
            let targetLocated = false
            let TargetLocked = entity.getDynamicProperty("minecraft:target_id")
            let targets = entity.dimension.getEntities({ closest: 1, excludeTypes: ["projecte:archangel_arrow", "minecraft:arrow", "minecraft:item", "minecraft:armor_stand"], excludeFamilies: ["inanimate"], location: entity.location, maxDistance: 10, minDistance: 3 })
            if (TargetLocked == -1) {
                targets.forEach(async target => {
                    if (target.id != entity.getDynamicProperty("minecraft:owner_id")) {
                        entity.setDynamicProperty("minecraft:target_id", target.id)
                    }
                })
            } else {
                let target = mc.world.getEntity(`${TargetLocked}`)
                if (targetLocated == false) {
                    targetLocated = true
                    entity.clearVelocity()
                    entity.teleport(entity.location, { keepVelocity: true, facingLocation: target.location })
                    mc.system.runTimeout(() => {
                        if (entity.isValid()) {
                            entity.applyImpulse(tools.VectorMul(tools.newVector(3, 3, 3), tools.VectorDirection(entity.location, target.location)))
                        }
                    }, 9)
                    entity.setDynamicProperty("minecraft:target_id", -1)
                }
            }
        }
        if (!entity.isOnGround) {
            let Velo = entity.getVelocity()
            if (Velo.x != 0 && Velo.y != 0 && Velo.z != 0) {
                entity.teleport(entity.location, { keepVelocity: true, facingLocation: tools.VectorAdd(entity.location, Velo) })
                entity.setProperty("projecte:rot_x", entity.getRotation().x)
                entity.setProperty("projecte:rot_y", entity.getRotation().y)
            }
        } else {
            entity.setDynamicProperty("minecraft:follow", false)
        }
    }
})