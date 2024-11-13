export default {
    //Relics
    "projecte:mind_stone": {
        "type": "inventory-use",
        "modes": ["default"],
        "texts": {},
        "sequences_change": [],
        "use_actions": {
            "default": {
                "event": "MindStoneUse",
                "params": {
                    "amount": 8,
                    "delay": 40
                }
            }
        },
        "inventory_actions": {
            "default": {
                "event": "DelayedItem",
                "params": {
                    "text": "Mind Stone"
                }
            }
        }
    },
    "projecte:soul_stone": {
        "type": "inventory-use",
        "modes": ["default"],
        "texts": {},
        "sequences_change": [],
        "use_actions": {
            "default": {
                "event": "SoulStoneUse",
                "params": {
                    "amount": 3,
                    "delay": 20 * 4
                }
            }
        },
        "inventory_actions": {
            "default": {
                "event": "DelayedItem",
                "params": {
                    "text": "Soul Stone"
                }
            }
        }
    },
    "projecte:body_stone": {
        "type": "inventory-use",
        "modes": ["default"],
        "texts": {},
        "sequences_change": [],
        "use_actions": {
            "default": {
                "event": "BodyStoneUse",
                "params": {
                    "amount": 5,
                    "delay": 20 * 10
                }
            }
        },
        "inventory_actions": {
            "default": {
                "event": "DelayedItem",
                "params": {
                    "text": "Body Stone"
                }
            }
        }
    },
    "projecte:life_stone": {
        "type": "inventory-use",
        "modes": ["default"],
        "texts": {},
        "sequences_change": [],
        "use_actions": {
            "default": {
                "event": "LifeStoneUse",
                "params": {
                    "amount": 5,
                    "delay": 20 * 10
                }
            }
        },
        "inventory_actions": {
            "default": {
                "event": "DelayedItem",
                "params": {
                    "text": "Life Stone"
                }
            }
        }
    },
    //Amulets
    "projecte:volcanite_amulet": {
        "type": "use",
        "modes": ["default"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [],
        "actions": {
            "default": {
                "event": "SetBlock",
                "params": {
                    "id": "minecraft:flowing_lava",
                    "solid": true
                }
            }
        }
    },
    "projecte:evertide_amulet": {
        "type": "use",
        "modes": ["default"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [],
        "actions": {
            "default": {
                "event": "SetBlock",
                "params": {
                    "id": "minecraft:flowing_water",
                    "solid": true
                }
            }
        }
    },
    //Archangel
    "projecte:archangel_smite": {
        "type": "use",
        "modes": ["default", "multi_shoot", "sphere_shoot"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            },
            "multi_shoot": {
                "raw": "item.mode.multi_shoot",
                "default": "Multi Shoot"
            },
            "sphere_shoot": {
                "raw": "item.mode.sphere_shoot",
                "default": "Sphere Shoot"
            }
        },
        "sequences_change": [
            {
                "type": "mode"
            },
            {
                "type": "mode"
            },
            {
                "type": "mode"
            }
        ],
        "actions": {
            "default": {
                "event": "ProjectileShoot",
                "params": {
                    "id": "projecte:archangel_arrow",
                    "repeat": 1,
                    "delay": 2,
                    "item": "minecraft:arrow"
                }
            },
            "multi_shoot": {
                "event": "ProjectileShoot",
                "params": {
                    "delay": 0,
                    "id": "projecte:archangel_arrow",
                    "repeat": 100,
                    "random_pos": true,
                    "item": "minecraft:arrow"
                }
            },
            "sphere_shoot": {
                "event": "SphereProjectileShoot",
                "params": {
                    "id": "projecte:archangel_arrow",
                    "radius": 2,
                    "amount": 50,
                    "item": "minecraft:arrow"
                }
            }
        }
    },
    //BlackHole
    "projecte:black_hole_band": {
        "type": "none",
        "modes": ["on"],
        "texts": {
            "on": {
                "raw": "item.mode.drop_mode",
                "default": "Drop Mode"
            }
        },
        "sequences_change": [
            {
                "type": "transform",
                "value": {
                    "id": "projecte:black_hole_band_on"
                }
            }
        ],
        "on_pedestal": {
            "event": "FollowUser",
            "params": {
                "types": [
                    "minecraft:item"
                ],
                "radius": 14
            }
        }
    },
    "projecte:black_hole_band_on": {
        "type": "inventory",
        "modes": ["default", "off"],
        "texts": {
            "default": {
                "raw": "item.mode.drop_mode",
                "default": "Drop Mode"
            },
            "off": {
                "raw": "item.mode.off",
                "default": "Disabled"
            }
        },
        "sequences_change": [
            {
                "type": "mode"
            },
            {
                "type": "transform",
                "value": {
                    "id": "projecte:black_hole_band"
                }
            }
        ],
        "actions": {
            "default": {
                "event": "FollowUser",
                "params": {
                    "types": [
                        "minecraft:item"
                    ],
                    "radius": 14
                }
            },
            "entity": {
                "event": "FollowUser",
                "params": {
                    "options": {
                        "excludeTypes": ["minecraft:item", "minecraft:armor_stand"]
                    },
                    "radius": 14
                }
            }
        }
    },
    //Harvest God
    "projecte:harvest_god": {
        "type": "none",
        "modes": ["on"],
        "texts": {
            "on": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [
            {
                "type": "transform",
                "value": {
                    "id": "projecte:harvest_god_on"
                }
            }
        ],
        "on_pedestal": {
            "event": "HarvestGod",
            "params": {
                "radius": 5
            }
        }
    },
    "projecte:harvest_god_on": {
        "type": "inventory",
        "modes": ["default", "off"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            },
            "off": {
                "raw": "item.mode.off",
                "default": "Disabled"
            }
        },
        "sequences_change": [
            {
                "type": "mode"
            },
            {
                "type": "transform",
                "value": {
                    "id": "projecte:harvest_god"
                }
            }
        ],
        "actions": {
            "default": {
                "event": "HarvestGod",
                "params": {
                    "radius": 5
                }
            }
        }
    },
    //Zero Ring
    "projecte:zero_ring": {
        "type": "none",
        "modes": ["on"],
        "texts": {
            "on": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [
            {
                "type": "transform",
                "value": {
                    "id": "projecte:zero_ring_on"
                }
            }
        ],
        "on_pedestal": {
            "event": "ZeroRing",
            "params": {
                "radius": 5
            }
        }
    },
    "projecte:zero_ring_on": {
        "type": "inventory",
        "modes": ["default", "off"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            },
            "off": {
                "raw": "item.mode.off",
                "default": "Disabled"
            }
        },
        "sequences_change": [
            {
                "type": "mode"
            },
            {
                "type": "transform",
                "value": {
                    "id": "projecte:zero_ring"
                }
            }
        ],
        "actions": {
            "default": {
                "event": "ZeroRing",
                "params": {
                    "radius": 5
                }
            }
        }
    },
    //Void Ring
    "projecte:void_ring": {
        "type": "use",
        "modes": ["on", "off"],
        "texts": {
            "on": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [
            {
                "type": "transform",
                "value": {
                    "id": "projecte:void_ring_on"
                }
            }
        ],
        "on_pedestal": {
            "event": "VoidRingDrop",
            "params": {
                "radius": 30
            }
        },
        "actions": {
            "on": {
                "event": "VoidRing"
            },
            "off": {
                "event": "VoidRing"
            }
        }
    },
    "projecte:void_ring_on": {
        "type": "inventory-use",
        "modes": ["default", "off"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            },
            "off": {
                "raw": "item.mode.off",
                "default": "Disabled"
            }
        },
        "sequences_change": [
            {
                "type": "mode"
            },
            {
                "type": "transform",
                "value": {
                    "id": "projecte:void_ring"
                }
            }
        ],
        "inventory_actions": {
            "default": {
                "event": "VoidRingDrop",
                "params": {
                    "radius": 30
                }
            }
        },
        "use_actions": {
            "default": {
                "event": "VoidRing"
            }
        }
    },
    //SWRG
    "projecte:swrg": {
        "type": "none",
        "modes": ["on"],
        "texts": {
            "on": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [
            {
                "type": "transform",
                "value": {
                    "id": "projecte:swrg_on"
                }
            }
        ],
        "on_pedestal": {
            "event": "SwrgThunder",
            "params": {
                "radius": 30
            }
        }
    },
    "projecte:swrg_on": {
        "type": "inventory",
        "modes": ["default", "off"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            },
            "off": {
                "raw": "item.mode.off",
                "default": "Disabled"
            }
        },
        "sequences_change": [
            {
                "type": "mode"
            },
            {
                "type": "transform",
                "value": {
                    "id": "projecte:swrg"
                }
            }
        ],
        "actions": {
            "default": {
                "event": "SwrgFly",
                "params": {}
            }
        }
    },
    //Armor
    "projecte:hurricane_boots": {
        "type": "equipment",
        "modes": ["default"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [],
        "actions": {
            "default": {
                "event": "HurricaneBoots",
                "params": {}
            }
        }
    },
    "projecte:gravity_leggings": {
        "type": "equipment",
        "modes": ["default"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [],
        "actions": {
            "default": {
                "event": "GravityGreaves",
                "params": {}
            }
        }
    },
    "projecte:abyss_helmet": {
        "type": "equipment",
        "modes": ["default"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [],
        "actions": {
            "default": {
                "event": "AbyssHelmet",
                "params": {}
            }
        }
    },
    "projecte:infernal_chestplate": {
        "type": "equipment",
        "modes": ["default"],
        "texts": {
            "default": {
                "raw": "item.mode.default",
                "default": "Default"
            }
        },
        "sequences_change": [],
        "actions": {
            "default": {
                "event": "InfernalArmor",
                "params": {}
            }
        }
    }
}