const TokenRootUpgradeableContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "initialSupplyTo",
                        "type": "address"
                    },
                    {
                        "name": "initialSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "deployWalletValue",
                        "type": "uint128"
                    },
                    {
                        "name": "mintDisabled",
                        "type": "bool"
                    },
                    {
                        "name": "burnByRootDisabled",
                        "type": "bool"
                    },
                    {
                        "name": "burnPaused",
                        "type": "bool"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "supportsInterface",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "interfaceID",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "walletVersion",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "platformCode",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "requestUpgradeWallet",
                "inputs": [
                    {
                        "name": "currentVersion",
                        "type": "uint32"
                    },
                    {
                        "name": "walletOwner",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setWalletCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "upgrade",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "disableMint",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "mintDisabled",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "burnTokens",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "walletOwner",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    },
                    {
                        "name": "callbackTo",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "disableBurnByRoot",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "burnByRootDisabled",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "burnPaused",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setBurnPaused",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "paused",
                        "type": "bool"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "transferOwnership",
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            }
                        ],
                        "name": "callbacks",
                        "type": "map(address,tuple)"
                    }
                ],
                "outputs": []
            },
            {
                "name": "name",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "symbol",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "decimals",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "totalSupply",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "walletCode",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "rootOwner",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "walletOf",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "walletOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "deployWallet",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "walletOwner",
                        "type": "address"
                    },
                    {
                        "name": "deployWalletValue",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "tokenWallet",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "deployWalletValue",
                        "type": "uint128"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    },
                    {
                        "name": "notify",
                        "type": "bool"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptBurn",
                "id": "0x192B51B1",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "walletOwner",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    },
                    {
                        "name": "callbackTo",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendSurplusGas",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "name_",
                "type": "string"
            },
            {
                "key": 2,
                "name": "symbol_",
                "type": "string"
            },
            {
                "key": 3,
                "name": "decimals_",
                "type": "uint8"
            },
            {
                "key": 4,
                "name": "rootOwner_",
                "type": "address"
            },
            {
                "key": 5,
                "name": "walletCode_",
                "type": "cell"
            },
            {
                "key": 6,
                "name": "randomNonce_",
                "type": "uint256"
            },
            {
                "key": 7,
                "name": "deployer_",
                "type": "address"
            },
            {
                "key": 8,
                "name": "platformCode_",
                "type": "cell"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "name_",
                "type": "string"
            },
            {
                "name": "symbol_",
                "type": "string"
            },
            {
                "name": "decimals_",
                "type": "uint8"
            },
            {
                "name": "rootOwner_",
                "type": "address"
            },
            {
                "name": "walletCode_",
                "type": "cell"
            },
            {
                "name": "totalSupply_",
                "type": "uint128"
            },
            {
                "name": "burnPaused_",
                "type": "bool"
            },
            {
                "name": "burnByRootDisabled_",
                "type": "bool"
            },
            {
                "name": "mintDisabled_",
                "type": "bool"
            },
            {
                "name": "randomNonce_",
                "type": "uint256"
            },
            {
                "name": "deployer_",
                "type": "address"
            },
            {
                "name": "platformCode_",
                "type": "cell"
            },
            {
                "name": "walletVersion_",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "11d047fd464f4199cb0b7bb93115808d1d2c702ca1f5033015501ce256becfa5",
};
export default TokenRootUpgradeableContract;