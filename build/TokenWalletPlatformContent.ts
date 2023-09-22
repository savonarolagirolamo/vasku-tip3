const TokenWalletPlatformContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "id": "0x15A038FB",
                "inputs": [
                    {
                        "name": "walletCode",
                        "type": "cell"
                    },
                    {
                        "name": "walletVersion",
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
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "root",
                "type": "address"
            },
            {
                "key": 2,
                "name": "owner",
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
                "name": "root",
                "type": "address"
            },
            {
                "name": "owner",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECGQEAAm8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsVBgUEAAADiO1E0NdJwwH4Zon4aSHbPNMAAZ6DCNcYIPkBWPhC+RDyqN7TPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwHbPPI8Ew8HA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPBQUBwEUIIIQFaA4+7rjAggEjjD4Qm7jAPhG8nMhltTTH9TR0JPU0x/i+kDU0dD6QNH4SfhKxwUgjoDfjoCOEyDIz4UIzoBvz0DJgwamILUH+wDiXwTbPPIADwwJGAEIXSLbPAoBYvhKyM74S88WgQCgz0ASyx/O+CoBzCH7BAHQIIs4rbNYxwWT103Q3tdM0O0e7VPJ2zwLAATwAgEeMCH6Qm8T1wv/wwAgjoDeDQEQMCHbPPhJxwUOAGpwyMv/cG2AQPRD+EpxWIBA9BYBcliAQPQWyPQAyfgqyM+EgPQA9ADPgcn5AMjPigBAy//J0AIW7UTQ10nCAY6A4w0REAA07UTQ0//TP9MAMfpA1NHQ+kDR+Gv4avhj+GICVHDtRND0BXEhgED0Do6A33IigED0Do6A3/hr+GqAQPQO8r3XC//4YnD4YxISAQKJEwBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAK+Eby4EwCCvSkIPShFxYAFHNvbCAwLjYyLjABGKAAAAACMNs8+A/yABgALPhK+EP4QsjL/8s/z4PO+EvIzs3J7VQ=",
    code: "te6ccgECFgEAAkIABCSK7VMg4wMgwP/jAiDA/uMC8gsSAwIBAAADiO1E0NdJwwH4Zon4aSHbPNMAAZ6DCNcYIPkBWPhC+RDyqN7TPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwHbPPI8EAwEA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPBERBAEUIIIQFaA4+7rjAgUEjjD4Qm7jAPhG8nMhltTTH9TR0JPU0x/i+kDU0dD6QNH4SfhKxwUgjoDfjoCOEyDIz4UIzoBvz0DJgwamILUH+wDiXwTbPPIADAkGFQEIXSLbPAcBYvhKyM74S88WgQCgz0ASyx/O+CoBzCH7BAHQIIs4rbNYxwWT103Q3tdM0O0e7VPJ2zwIAATwAgEeMCH6Qm8T1wv/wwAgjoDeCgEQMCHbPPhJxwULAGpwyMv/cG2AQPRD+EpxWIBA9BYBcliAQPQWyPQAyfgqyM+EgPQA9ADPgcn5AMjPigBAy//J0AIW7UTQ10nCAY6A4w0ODQA07UTQ0//TP9MAMfpA1NHQ+kDR+Gv4avhj+GICVHDtRND0BXEhgED0Do6A33IigED0Do6A3/hr+GqAQPQO8r3XC//4YnD4Yw8PAQKJEABDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAK+Eby4EwCCvSkIPShFBMAFHNvbCAwLjYyLjABGKAAAAACMNs8+A/yABUALPhK+EP4QsjL/8s/z4PO+EvIzs3J7VQ=",
    codeHash: "afe845cab79cde58d4bb554bff4296dad68e4d45998aab8d27a6ab060178c80a",
};
export default TokenWalletPlatformContract;