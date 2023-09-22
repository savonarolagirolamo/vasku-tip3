const SelectorContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "calculateAcceptTransferSelector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateAcceptMintSelector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateAcceptBurnSelector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateTIP3TokenRootInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateTIP3TokenWalletInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateSIDInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateVersionedInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateTokenRootInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateTokenWalletInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateBurnableTokenWalletInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateBurnableByRootTokenRootInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateBurnableByRootTokenWalletInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateDestroyableInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateDisableableMintTokenRootInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateTransferableOwnershipInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateBurnPausableTokenRootInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateTokenWalletUpgradeableInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calculateTokenRootUpgradeableInterfaceID",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_randomNonce",
                "type": "uint256"
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
                "name": "_randomNonce",
                "type": "uint256"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "42cebf5c0c23fc20258e12b43e7944a9c2c90a83b352fccef5c0bce60f45ab18",
};
export default SelectorContract;