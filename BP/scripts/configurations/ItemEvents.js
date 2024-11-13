export default {
    "projecte:dm_pickaxe": {
        "level_max": 3,
        "destroy_modes": ["vein", "destroy_range"],
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "minecraft:deepslate_lapis_ore",
                    "minecraft:nether_gold_ore",
                    "minecraft:ancient_debris",
                    "minecraft:quartz_ore"
                ],
                "lvl:1": {
                    "limit": 32
                },
                "lvl:2": {
                    "limit": 64
                },
                "lvl:3": {
                    "limit": 96
                }
            },
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "tag:stone",
                    "minecraft:deepslate_lapis_ore",
                    "minecraft:nether_gold_ore",
                    "minecraft:ancient_debris",
                    "minecraft:quartz_ore"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: -2, z: 0 },
                            "rot": true
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 2, z: 0 },
                            "rot": true
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        },
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: -2 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 2, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: -2, y: 1, z: 1 }
                        },
                        "Up": {
                            "from": { x: -1, y: -2, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 2, z: 1 }
                        }
                    }
                }
            }
        }
    },
    "projecte:dm_shovel": {
        "level_max": 3,
        "destroy_modes": ["destroy_range"],
        "use_modes": ["default_use"],
        "destroys": {
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:dirt",
                    "tag:grass",
                    "tag:sand",
                    "minecraft:gravel"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: -4, y: 0, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: -6, y: 0, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: 6, y: 0, z: 5 }
                        }
                    }
                }
            }
        },
        "uses": {
            "default_use": {
                "transform_blocks": [
                    {
                        "BlockA": {
                            "id": "minecraft:grass_block",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:grass_path",
                            "states": {}
                        }
                    }
                ],
                "lvl:1": {
                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: -4, y: 0, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: -6, y: 0, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: 6, y: 0, z: 5 }
                        }
                    }
                }
            }
        }
    },
    "projecte:dm_hoe": {
        "level_max": 2,
        "use_modes": ["default_use"],
        "uses": {
            "default_use": {
                "transform_blocks": [
                    {
                        "BlockA": {
                            "id": "minecraft:grass_block",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:dirt",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:grass_path",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    }
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: -4, y: 0, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        }
                    }
                }
            }
        }
    },
    "projecte:dm_axe": {
        "level_max": 3,
        "destroy_modes": ["vein", "destroy_range"],
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "minecraft:oak_log",
                    "minecraft:acacia_log",
                    "minecraft:spruce_log",
                    "minecraft:birch_log",
                    "minecraft:jungle_log",
                    "minecraft:dark_oak_log",
                    "minecraft:cherry_log",
                    "minecraft:mangrove_log",
                    "minecraft:warped_stem",
                    "minecraft:crimson_stem",
                    "minecraft:stripped_oak_log",
                    "minecraft:stripped_acacia_log",
                    "minecraft:stripped_spruce_log",
                    "minecraft:stripped_birch_log",
                    "minecraft:stripped_jungle_log",
                    "minecraft:stripped_dark_oak_log",
                    "minecraft:stripped_cherry_log",
                    "minecraft:stripped_mangrove_log",
                    "minecraft:stripped_warped_stem",
                    "minecraft:stripped_crimson_stem"
                ],
                "lvl:1": {
                    "limit": 32
                },
                "lvl:2": {
                    "limit": 64
                },
                "lvl:3": {
                    "limit": 96
                }
            },
            "destroy_range": {
                "destroy_blocks": [
                    "minecraft:oak_log",
                    "minecraft:acacia_log",
                    "minecraft:spruce_log",
                    "minecraft:birch_log",
                    "minecraft:jungle_log",
                    "minecraft:dark_oak_log",
                    "minecraft:cherry_log",
                    "minecraft:mangrove_log",
                    "minecraft:warped_stem",
                    "minecraft:crimson_stem",
                    "minecraft:stripped_oak_log",
                    "minecraft:stripped_acacia_log",
                    "minecraft:stripped_spruce_log",
                    "minecraft:stripped_birch_log",
                    "minecraft:stripped_jungle_log",
                    "minecraft:stripped_dark_oak_log",
                    "minecraft:stripped_cherry_log",
                    "minecraft:stripped_mangrove_log",
                    "minecraft:stripped_warped_stem",
                    "minecraft:stripped_crimson_stem"
                ],
                "teleport_drop": true,
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: -2, z: 0 },
                            "rot": true
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 2, z: 0 },
                            "rot": true
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        },
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: -2 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 2, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: -2, y: 1, z: 1 }
                        },
                        "Up": {
                            "from": { x: -1, y: -2, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 2, z: 1 }
                        }
                    }
                }
            }
        }
    },
    "projecte:dm_hammer": {
        "level_max": 2,
        "destroy_modes": ["destroy_range"],
        "destroys": {
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "tag:stone",
                    "minecraft:deepslate",
                    "minecraft:netherrack",
                    "minecraft:deepslate_lapis_ore"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: -1, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 1, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 1 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: -1 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "East": {
                            "from": { x: -1, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 1, y: 1, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: -2, z: -2 },
                            "to": { x: 3, y: 0, z: 2 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -2 },
                            "to": { x: 3, y: 2, z: 2 }
                        },
                        "North": {
                            "from": { x: -2, y: -3, z: 0 },
                            "to": { x: 2, y: 3, z: 2 }
                        },
                        "South": {
                            "from": { x: -2, y: -3, z: -2 },
                            "to": { x: 2, y: 3, z: 0 }
                        },
                        "East": {
                            "from": { x: -2, y: -2, z: -3 },
                            "to": { x: 0, y: 2, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: -2, z: -3 },
                            "to": { x: 2, y: 2, z: 3 }
                        }
                    }
                }
            }
        }
    },
    "projecte:dm_shears": {
        "level_max": 3,
        "destroy_modes": ["vein"],
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "minecraft:acacia_leaves",
                    "minecraft:oak_leaves",
                    "minecraft:spruce_leaves",
                    "minecraft:dark_oak_leaves",
                    "minecraft:birch_leaves",
                    "minecraft:jungle_leaves",
                    "minecraft:cherry_leaves",
                    "minecraft:azalea_leaves",
                    "minecraft:azalea_leaves_flowered"
                ],
                "lvl:1": {
                    "limit": 32
                },
                "lvl:2": {
                    "limit": 64
                },
                "lvl:3": {
                    "limit": 96
                }
            }
        }
    },
    "projecte:dm_sword": {
        "level_max": 3,
        "attack_modes": ["default_attack", "black_hole"],
        "additional_damage": 2,
        "attacks": {
            "default_attack": {
                "attack": {
                    "damage_multiplier": 0.5
                },
            },
            "black_hole": {
                "range": 10,
                "attack": {
                    "damage_multiplier": 0.5
                },
                "target_effects": [
                    {
                        "time": 20,
                        "amplifier": 1,
                        "type": "slowness"
                    }
                ]
            }
        }
    },
    "projecte:rm_pickaxe": {
        "level_max": 3,
        "destroy_modes": ["vein", "destroy_range"],
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "minecraft:deepslate_lapis_ore"
                ],
                "lvl:1": {

                    "limit": 96
                },
                "lvl:2": {
                    "limit": 112
                },
                "lvl:3": {
                    "limit": 128
                }
            },
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "tag:stone",
                    "minecraft:deepslate",
                    "minecraft:netherrack",
                    "minecraft:deepslate_lapis_ore"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: -2, z: 0 },
                            "rot": true
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 2, z: 0 },
                            "rot": true
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        },
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: -2 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 2, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: -2, y: 1, z: 1 }
                        },
                        "Up": {
                            "from": { x: -1, y: -2, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 2, z: 1 }
                        }
                    }
                }
            }
        }
    },
    "projecte:rm_shovel": {
        "level_max": 4,
        "destroy_modes": ["destroy_range"],
        "use_modes": ["default_use"],
        "destroys": {
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:dirt",
                    "tag:grass",
                    "tag:sand",
                    "minecraft:gravel"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: -2, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 2, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: -2, y: -1, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 2, y: -1, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: -4, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 4, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: -3, z: 0 },
                            "to": { x: 3, y: 3, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: -3, z: 0 },
                            "to": { x: 3, y: 3, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: -3, z: -3 },
                            "to": { x: -4, y: -3, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: -3, z: -3 },
                            "to": { x: 4, y: -3, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: -6, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 6, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: -5, z: 0 },
                            "to": { x: 5, y: 5, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: -5, z: 0 },
                            "to": { x: 5, y: 5, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: -5, z: -5 },
                            "to": { x: -6, y: -5, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: -5, z: -5 },
                            "to": { x: 6, y: -5, z: 5 }
                        }
                    }
                },
                "lvl:4": {
                    "directions": {
                        "Up": {
                            "from": { x: -8, y: 0, z: -8 },
                            "to": { x: 8, y: -9, z: 8 }
                        },
                        "Down": {
                            "from": { x: -8, y: 0, z: -8 },
                            "to": { x: 8, y: 9, z: 8 }
                        },
                        "North": {
                            "from": { x: -8, y: -8, z: 0 },
                            "to": { x: 8, y: 8, z: 9 }
                        },
                        "South": {
                            "from": { x: -8, y: -8, z: 0 },
                            "to": { x: 8, y: 8, z: -9 }
                        },
                        "East": {
                            "from": { x: 0, y: -8, z: -8 },
                            "to": { x: -9, y: -8, z: 8 }
                        },
                        "West": {
                            "from": { x: 0, y: -8, z: -8 },
                            "to": { x: 9, y: -8, z: 8 }
                        }
                    }
                }
            }
        },
        "uses": {
            "default_use": {
                "transform_blocks": [
                    {
                        "BlockA": {
                            "id": "minecraft:grass_block",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:grass_path",
                            "states": {}
                        }
                    }
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: -4, y: 0, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: -6, y: 0, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: 6, y: 0, z: 5 }
                        }
                    }
                },
                "lvl:4": {
                    "directions": {
                        "Up": {
                            "from": { x: -8, y: 0, z: -8 },
                            "to": { x: 8, y: 0, z: 8 }
                        },
                        "Down": {
                            "from": { x: -8, y: 0, z: -8 },
                            "to": { x: 8, y: 0, z: 8 }
                        },
                        "North": {
                            "from": { x: -8, y: 0, z: 0 },
                            "to": { x: 8, y: 0, z: 9 }
                        },
                        "South": {
                            "from": { x: -8, y: 0, z: 0 },
                            "to": { x: 8, y: 0, z: -9 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -8 },
                            "to": { x: -9, y: 0, z: 8 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -8 },
                            "to": { x: 9, y: 0, z: 8 }
                        }
                    }
                }
            }
        }
    },
    "projecte:rm_hoe": {
        "level_max": 3,
        "use_modes": ["default_use"],
        "uses": {
            "default_use": {
                "transform_blocks": [
                    {
                        "BlockA": {
                            "id": "minecraft:grass_block",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:dirt",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:grass_path",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    }
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: -4, y: 0, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: -6, y: 0, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: 6, y: 0, z: 5 }
                        }
                    }
                }
            }
        }
    },
    "projecte:rm_axe": {
        "level_max": 3,
        "destroy_modes": ["vein", "destroy_range"],
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "minecraft:oak_log",
                    "minecraft:acacia_log",
                    "minecraft:spruce_log",
                    "minecraft:birch_log",
                    "minecraft:jungle_log",
                    "minecraft:dark_oak_log",
                    "minecraft:cherry_log",
                    "minecraft:mangrove_log",
                    "minecraft:warped_stem",
                    "minecraft:crimson_stem",
                    "minecraft:stripped_oak_log",
                    "minecraft:stripped_acacia_log",
                    "minecraft:stripped_spruce_log",
                    "minecraft:stripped_birch_log",
                    "minecraft:stripped_jungle_log",
                    "minecraft:stripped_dark_oak_log",
                    "minecraft:stripped_cherry_log",
                    "minecraft:stripped_mangrove_log",
                    "minecraft:stripped_warped_stem",
                    "minecraft:stripped_crimson_stem"
                ],
                "lvl:1": {

                    "limit": 96
                },
                "lvl:2": {
                    "limit": 112
                },
                "lvl:3": {
                    "limit": 128
                }
            },
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "minecraft:oak_log",
                    "minecraft:acacia_log",
                    "minecraft:spruce_log",
                    "minecraft:birch_log",
                    "minecraft:jungle_log",
                    "minecraft:dark_oak_log",
                    "minecraft:cherry_log",
                    "minecraft:mangrove_log",
                    "minecraft:warped_stem",
                    "minecraft:crimson_stem",
                    "minecraft:stripped_oak_log",
                    "minecraft:stripped_acacia_log",
                    "minecraft:stripped_spruce_log",
                    "minecraft:stripped_birch_log",
                    "minecraft:stripped_jungle_log",
                    "minecraft:stripped_dark_oak_log",
                    "minecraft:stripped_cherry_log",
                    "minecraft:stripped_mangrove_log",
                    "minecraft:stripped_warped_stem",
                    "minecraft:stripped_crimson_stem"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: -2, z: 0 },
                            "rot": true
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 2, z: 0 },
                            "rot": true
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        },
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: -2 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 2, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: -2, y: 1, z: 1 }
                        },
                        "Up": {
                            "from": { x: -1, y: -2, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 2, z: 1 }
                        }
                    }
                }
            }
        }
    },
    "projecte:rm_hammer": {
        "level_max": 3,
        "destroy_modes": ["destroy_range"],
        "destroys": {
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "minecraft:nether_gold_ore",
                    "minecraft:ancient_debris",
                    "minecraft:quartz_ore",
                    "tag:stone",
                    "minecraft:deepslate",
                    "minecraft:netherrack",
                    "minecraft:deepslate_lapis_ore"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: -1, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 1, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 1 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: -1 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "East": {
                            "from": { x: -1, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 1, y: 1, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: -2, z: -2 },
                            "to": { x: 3, y: 0, z: 2 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -2 },
                            "to": { x: 3, y: 2, z: 2 }
                        },
                        "North": {
                            "from": { x: -2, y: -3, z: 0 },
                            "to": { x: 2, y: 3, z: 2 }
                        },
                        "South": {
                            "from": { x: -2, y: -3, z: -2 },
                            "to": { x: 2, y: 3, z: 0 }
                        },
                        "East": {
                            "from": { x: -2, y: -2, z: -3 },
                            "to": { x: 0, y: 2, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: -2, z: -3 },
                            "to": { x: 2, y: 2, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -4, y: -3, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -4, y: 0, z: -3 },
                            "to": { x: 4, y: 3, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: -4, z: 0 },
                            "to": { x: 3, y: 4, z: 3 }
                        },
                        "South": {
                            "from": { x: -3, y: -4, z: -3 },
                            "to": { x: 3, y: 4, z: 0 }
                        },
                        "East": {
                            "from": { x: -3, y: -3, z: -4 },
                            "to": { x: 0, y: 3, z: 4 }
                        },
                        "West": {
                            "from": { x: 0, y: -3, z: -4 },
                            "to": { x: 3, y: 3, z: 4 }
                        }
                    }
                }
            }
        }
    },
    "projecte:red_morning_star": {
        "level_max": 3,
        "destroy_modes": ["vein", "destroy_range"],
        "use_modes": ["default_use"],
        "attack_modes": ["default_attack", "solar_burn"],
        "additional_damage": 6,
        "attacks": {
            "solar_burn": {
                "range": 20,
                "attack": {
                    "damage_multiplier": 0.8,
                    "flame": 4
                }
            },
            "default_attack": {
                "attack": {
                    "damage_multiplier": 0.3,
                    "flame": 4
                }
            }
        },
        "uses": {
            "default_use": {
                "transform_blocks": [
                    {
                        "BlockA": {
                            "id": "minecraft:grass_block",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:grass_path",
                            "states": {}
                        }
                    }
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: -4, y: 0, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: -6, y: 0, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: 6, y: 0, z: 5 }
                        }
                    }
                }
            }
        },
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "minecraft:deepslate_lapis_ore",
                    "minecraft:nether_gold_ore",
                    "minecraft:ancient_debris",
                    "minecraft:quartz_ore"
                ],
                "lvl:1": {

                    "limit": 96
                },
                "lvl:2": {
                    "limit": 112
                },
                "lvl:3": {
                    "limit": 128
                }
            },
            "destroy_range": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "tag:dirt",
                    "tag:grass",
                    "tag:sand",
                    "minecraft:gravel",
                    "tag:diamond_pick_diggable",
                    "tag:stone_pick_diggable",
                    "tag:iron_pick_diggable",
                    "tag:stone",
                    "minecraft:deepslate_lapis_ore",
                    "minecraft:nether_gold_ore",
                    "minecraft:ancient_debris",
                    "minecraft:quartz_ore"
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: -2, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 2, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: -2, y: -1, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 2, y: -1, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: -4, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 4, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: -3, z: 0 },
                            "to": { x: 3, y: 3, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: -3, z: 0 },
                            "to": { x: 3, y: 3, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: -3, z: -3 },
                            "to": { x: -4, y: -3, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: -3, z: -3 },
                            "to": { x: 4, y: -3, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: -6, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 6, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: -5, z: 0 },
                            "to": { x: 5, y: 5, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: -5, z: 0 },
                            "to": { x: 5, y: 5, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: -5, z: -5 },
                            "to": { x: -6, y: -5, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: -5, z: -5 },
                            "to": { x: 6, y: -5, z: 5 }
                        }
                    }
                }
            }
        }
    },
    "projecte:rm_shears": {
        "level_max": 3,
        "destroy_modes": ["vein"],
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "minecraft:acacia_leaves",
                    "minecraft:oak_leaves",
                    "minecraft:spruce_leaves",
                    "minecraft:dark_oak_leaves",
                    "minecraft:birch_leaves",
                    "minecraft:jungle_leaves",
                    "minecraft:cherry_leaves",
                    "minecraft:azalea_leaves",
                    "minecraft:azalea_leaves_flowered"
                ],
                "lvl:1": {

                    "limit": 96
                },
                "lvl:2": {
                    "limit": 112
                },
                "lvl:3": {
                    "limit": 128
                }
            }
        }
    },
    "projecte:rm_sword": {
        "level_max": 3,
        "attack_modes": ["default_attack", "black_hole"],
        "additional_damage": 4,
        "attacks": {
            "default_attack": {
                "attack": {
                    "damage_multiplier": 0.5,
                    "flame": 3
                },
            },
            "black_hole": {
                "range": 10,
                "attack": {
                    "damage_multiplier": 0.5,
                    "flame": 3
                },
                "target_effects": [
                    {
                        "time": 20,
                        "amplifier": 1,
                        "type": "slowness"
                    }
                ],
                "user_effects": [
                    {
                        "time": 20,
                        "amplifier": 1,
                        "type": "resistance"
                    }
                ]
            }
        }
    },
    "projecte:red_katar": {
        "level_max": 3,
        "destroy_modes": ["vein", "destroy_range"],
        "use_modes": ["default_use"],
        "attack_modes": ["default_attack", "black_hole", "range_attack"],
        "additional_damage": 6,
        "attacks": {
            "default_attack": {
                "attack": {
                    "damage_multiplier": 0.5,
                    "flame": 3
                },
            },
            "range_attack": {
                "range": 7,
                "attack": {
                    "damage_multiplier": 0.3,
                    "flame": 4
                },
                "target_effects": [
                    {
                        "time": 20,
                        "amplifier": 1,
                        "type": "slowness"
                    }
                ]
            },
            "black_hole": {
                "range": 10,
                "attack": {
                    "damage_multiplier": 0.5,
                    "flame": 3
                },
                "target_effects": [
                    {
                        "time": 20,
                        "amplifier": 1,
                        "type": "slowness"
                    }
                ],
                "user_effects": [
                    {
                        "time": 20,
                        "amplifier": 1,
                        "type": "resistance"
                    }
                ]
            }
        },
        "destroys": {
            "vein": {
                "teleport_drop": true,
                "destroy_blocks": [
                    "minecraft:oak_log",
                    "minecraft:acacia_log",
                    "minecraft:spruce_log",
                    "minecraft:birch_log",
                    "minecraft:jungle_log",
                    "minecraft:dark_oak_log",
                    "minecraft:cherry_log",
                    "minecraft:mangrove_log",
                    "minecraft:warped_stem",
                    "minecraft:crimson_stem",
                    "minecraft:stripped_oak_log",
                    "minecraft:stripped_acacia_log",
                    "minecraft:stripped_spruce_log",
                    "minecraft:stripped_birch_log",
                    "minecraft:stripped_jungle_log",
                    "minecraft:stripped_dark_oak_log",
                    "minecraft:stripped_cherry_log",
                    "minecraft:stripped_mangrove_log",
                    "minecraft:stripped_warped_stem",
                    "minecraft:stripped_crimson_stem",
                    "minecraft:acacia_leaves",
                    "minecraft:oak_leaves",
                    "minecraft:spruce_leaves",
                    "minecraft:dark_oak_leaves",
                    "minecraft:birch_leaves",
                    "minecraft:jungle_leaves",
                    "minecraft:cherry_leaves",
                    "minecraft:azalea_leaves",
                    "minecraft:azalea_leaves_flowered"
                ],
                "lvl:1": {

                    "limit": 96
                },
                "lvl:2": {
                    "limit": 112
                },
                "lvl:3": {
                    "limit": 128
                }
            },
            "destroy_range": {
                "destroy_blocks": [
                    "minecraft:oak_log",
                    "minecraft:acacia_log",
                    "minecraft:spruce_log",
                    "minecraft:birch_log",
                    "minecraft:jungle_log",
                    "minecraft:dark_oak_log",
                    "minecraft:cherry_log",
                    "minecraft:mangrove_log",
                    "minecraft:warped_stem",
                    "minecraft:crimson_stem",
                    "minecraft:stripped_oak_log",
                    "minecraft:stripped_acacia_log",
                    "minecraft:stripped_spruce_log",
                    "minecraft:stripped_birch_log",
                    "minecraft:stripped_jungle_log",
                    "minecraft:stripped_dark_oak_log",
                    "minecraft:stripped_cherry_log",
                    "minecraft:stripped_mangrove_log",
                    "minecraft:stripped_warped_stem",
                    "minecraft:stripped_crimson_stem",
                    "minecraft:acacia_leaves",
                    "minecraft:oak_leaves",
                    "minecraft:spruce_leaves",
                    "minecraft:dark_oak_leaves",
                    "minecraft:birch_leaves",
                    "minecraft:jungle_leaves",
                    "minecraft:cherry_leaves",
                    "minecraft:azalea_leaves",
                    "minecraft:azalea_leaves_flowered"
                ],
                "teleport_drop": true,
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: -2, z: 0 },
                            "rot": true
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 2, z: 0 },
                            "rot": true
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        },
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 0, y: 1, z: 1 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "North": {
                            "from": { x: -1, y: -1, z: 0 },
                            "to": { x: 1, y: 1, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: -1, z: -2 },
                            "to": { x: 1, y: 1, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: 2, y: 1, z: 1 }
                        },
                        "East": {
                            "from": { x: 0, y: -1, z: -1 },
                            "to": { x: -2, y: 1, z: 1 }
                        },
                        "Up": {
                            "from": { x: -1, y: -2, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 2, z: 1 }
                        }
                    }
                }
            }
        },
        "uses": {
            "default_use": {
                "transform_blocks": [
                    {
                        "BlockA": {
                            "id": "minecraft:grass_block",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:dirt",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:grass_path",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:farmland",
                            "states": {}
                        }
                    }
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "Down": {
                            "from": { x: -3, y: 0, z: -3 },
                            "to": { x: 3, y: 0, z: 3 }
                        },
                        "North": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -3, y: 0, z: 0 },
                            "to": { x: 3, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: -4, y: 0, z: 3 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -3 },
                            "to": { x: 4, y: 0, z: 3 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "Down": {
                            "from": { x: -5, y: 0, z: -5 },
                            "to": { x: 5, y: 0, z: 5 }
                        },
                        "North": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: 6 }
                        },
                        "South": {
                            "from": { x: -5, y: 0, z: 0 },
                            "to": { x: 5, y: 0, z: -6 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: -6, y: 0, z: 5 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -5 },
                            "to": { x: 6, y: 0, z: 5 }
                        }
                    }
                }
            }
        }
    },
    "projecte:philosophers_stone": {
        "level_max": 3,
        "use_modes": ["default_use"],
        "uses": {
            "default_use": {
                "transform_blocks": [
                    {
                        "BlockA": {
                            "id": "minecraft:grass_block",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:sand",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:dirt",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:sand",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:sand",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:dirt",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:stone",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:granite",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:granite",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:diorite",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:diorite",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:andesite",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:andesite",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:stone",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:cobblestone",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:stone",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:cobbled_deepslate",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:deepslate",
                            "states": {}
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:oak_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:birch_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:birch_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:spruce_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:spruce_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:jungle_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:jungle_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:acacia_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:acacia_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:dark_oak_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:dark_oak_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:mangrove_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:mangrove_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:cherry_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    },
                    {
                        "BlockA": {
                            "id": "minecraft:cherry_log",
                            "states": {}
                        },
                        "BlockB": {
                            "id": "minecraft:oak_log",
                            "shared_states": {
                                "pillar_axis": "pillar_axis"
                            }
                        }
                    }
                ],
                "lvl:1": {

                    "directions": {
                        "Up": {
                            "from": { x: 0, y: 0, z: 0 },
                            "to": { x: 0, y: 0, z: 0 }
                        },
                        "Down": {
                            "from": { x: 0, y: 0, z: 0 },
                            "to": { x: 0, y: 0, z: 0 }
                        },
                        "North": {
                            "from": { x: 0, y: 0, z: 0 },
                            "to": { x: 0, y: 0, z: 0 }
                        },
                        "South": {
                            "from": { x: 0, y: 0, z: 0 },
                            "to": { x: 0, y: 0, z: 0 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: 0 },
                            "to": { x: 0, y: 0, z: 0 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: 0 },
                            "to": { x: 0, y: 0, z: 0 }
                        },
                    }
                },
                "lvl:2": {
                    "directions": {
                        "Up": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "Down": {
                            "from": { x: -1, y: 0, z: -1 },
                            "to": { x: 1, y: 0, z: 1 }
                        },
                        "North": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: 2 }
                        },
                        "South": {
                            "from": { x: -1, y: 0, z: 0 },
                            "to": { x: 1, y: 0, z: -2 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: -2, y: 0, z: 1 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -1 },
                            "to": { x: 2, y: 0, z: 1 }
                        }
                    }
                },
                "lvl:3": {
                    "directions": {
                        "Up": {
                            "from": { x: -2, y: 0, z: -2 },
                            "to": { x: 2, y: 0, z: 2 }
                        },
                        "Down": {
                            "from": { x: -2, y: 0, z: -2 },
                            "to": { x: 2, y: 0, z: 2 }
                        },
                        "North": {
                            "from": { x: -2, y: 0, z: 0 },
                            "to": { x: 2, y: 0, z: 4 }
                        },
                        "South": {
                            "from": { x: -2, y: 0, z: 0 },
                            "to": { x: 2, y: 0, z: -4 }
                        },
                        "East": {
                            "from": { x: 0, y: 0, z: -2 },
                            "to": { x: -4, y: 0, z: 2 }
                        },
                        "West": {
                            "from": { x: 0, y: 0, z: -2 },
                            "to": { x: 4, y: 0, z: 2 }
                        }
                    }
                }
            }
        }
    },

}