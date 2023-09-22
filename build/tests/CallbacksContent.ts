const CallbacksContract = {
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
                "name": "onAcceptTokensTransfer",
                "inputs": [
                    {
                        "name": "tokenRoot",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "name": "senderWallet",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
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
                "name": "onBounceTokensTransfer",
                "inputs": [
                    {
                        "name": "tokenRoot",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "revertedFrom",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onAcceptTokensMint",
                "inputs": [
                    {
                        "name": "tokenRoot",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "remainingGasTo",
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
                "name": "onAcceptTokensBurn",
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
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
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
                "name": "onBounceTokensBurn",
                "inputs": [
                    {
                        "name": "tokenRoot",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_nonce",
                "type": "uint32"
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
                "name": "_nonce",
                "type": "uint32"
            }
        ]
    },
    tvc: "te6ccgECGwEAApwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBQQaArbtRNDXScMB+GYh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8DgYDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwXFwYCKCCCEGi1Xz+74wIgghB6nt4ru+MCDAcCKCCCEHDYn8m64wIgghB6nt4ruuMCCggDRjD4RvLgTPhCbuMAIZPU0dDe+kDTf9TR0PpA1NHbPDDbPPIAFgkUAARfBANaMPhG8uBM+EJu4wAhk9TR0N76QNN/1NHQ+kDU0dD6QNTR0PpA1NHbPDDbPPIAFgsUAARfBgRQIIIQHDKgrbrjAiCCECfQjem64wIgghBoCI2buuMCIIIQaLVfP7rjAhMRDw0CIjD4Qm7jAPhG8nPR+ADbPPIADhQBXO1E0NdJwgGOI3DtRND0BXEhgED0Dm+Rk9cLH974aoBA9A7yvdcL//hicPhj4w0WA1Aw+Eby4Ez4Qm7jACGT1NHQ3tN/+kDU0dD6QNTR0PpA1NHbPDDbPPIAFhAUAARfBQNEMPhG8uBM+EJu4wAhk9TR0N76QNN/1NHQ+kDR2zww2zzyABYSFAAEXwMDOjD4RvLgTPhCbuMAIZPU0dDe+kDTf9HbPDDbPPIAFhUUACT4SvhD+ELIy//LP8+Dyx/J7VQAAlsAJu1E0NP/0z/TADHTH9H4avhj+GIACvhG8uBMAgr0pCD0oRoZABRzb2wgMC42Mi4wAAA=",
    code: "te6ccgECGAEAAm8ABCSK7VMg4wMgwP/jAiDA/uMC8gsVAgEXArbtRNDXScMB+GYh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8CwMDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwUFAMCKCCCEGi1Xz+74wIgghB6nt4ru+MCCQQCKCCCEHDYn8m64wIgghB6nt4ruuMCBwUDRjD4RvLgTPhCbuMAIZPU0dDe+kDTf9TR0PpA1NHbPDDbPPIAEwYRAARfBANaMPhG8uBM+EJu4wAhk9TR0N76QNN/1NHQ+kDU0dD6QNTR0PpA1NHbPDDbPPIAEwgRAARfBgRQIIIQHDKgrbrjAiCCECfQjem64wIgghBoCI2buuMCIIIQaLVfP7rjAhAODAoCIjD4Qm7jAPhG8nPR+ADbPPIACxEBXO1E0NdJwgGOI3DtRND0BXEhgED0Dm+Rk9cLH974aoBA9A7yvdcL//hicPhj4w0TA1Aw+Eby4Ez4Qm7jACGT1NHQ3tN/+kDU0dD6QNTR0PpA1NHbPDDbPPIAEw0RAARfBQNEMPhG8uBM+EJu4wAhk9TR0N76QNN/1NHQ+kDR2zww2zzyABMPEQAEXwMDOjD4RvLgTPhCbuMAIZPU0dDe+kDTf9HbPDDbPPIAExIRACT4SvhD+ELIy//LP8+Dyx/J7VQAAlsAJu1E0NP/0z/TADHTH9H4avhj+GIACvhG8uBMAgr0pCD0oRcWABRzb2wgMC42Mi4wAAA=",
    codeHash: "4a3250e90ea8c61e91df2fe61e8a13e8ee8d6f1d52aad5c2d176c66f4dd4b232",
};
export default CallbacksContract;