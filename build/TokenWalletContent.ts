const TokenWalletContract = {
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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9e424a5afe21655f539fc9d0363890ac154ce54619299ca75117bc444c453afc",
};
export default TokenWalletContract;