const TokenWalletUpgradeableContract = {
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
                "inputs": [],
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
                "name": "onDeployRetry",
                "id": "0x15A038FB",
                "inputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    },
                    {
                        "name": "value1",
                        "type": "uint32"
                    },
                    {
                        "name": "sender",
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
                "name": "version",
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
                "name": "upgrade",
                "inputs": [
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptUpgrade",
                "inputs": [
                    {
                        "name": "newCode",
                        "type": "cell"
                    },
                    {
                        "name": "newVersion",
                        "type": "uint32"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "burnByRoot",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
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
                "name": "destroy",
                "inputs": [
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "burn",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
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
                "name": "balance",
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
                "name": "owner",
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
                "name": "root",
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
                "name": "transfer",
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
                "name": "transferToWallet",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "recipientTokenWallet",
                        "type": "address"
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
                "name": "acceptTransfer",
                "id": "0x67A0B95F",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "sender",
                        "type": "address"
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
                "name": "acceptMint",
                "id": "0x4384F298",
                "inputs": [
                    {
                        "name": "amount",
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
                "name": "root_",
                "type": "address"
            },
            {
                "key": 2,
                "name": "owner_",
                "type": "address"
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
                "name": "root_",
                "type": "address"
            },
            {
                "name": "owner_",
                "type": "address"
            },
            {
                "name": "balance_",
                "type": "uint128"
            },
            {
                "name": "version_",
                "type": "uint32"
            },
            {
                "name": "platformCode_",
                "type": "cell"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "dfccce22310885358a53e9ac7e2cdcbf442389bf8920a8b53e0ceac450a7357c",
};
export default TokenWalletUpgradeableContract;