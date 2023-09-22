import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vasku'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import TokenWalletPlatformContent from './TokenWalletPlatformContent'
type constructorIn = {
  walletCode: string
  walletVersion: string | number | bigint
  sender: string
  remainingGasTo: string
}

export class TokenWalletPlatform extends Contract {
  private readonly _call: TokenWalletPlatformCalls
  private readonly _run: TokenWalletPlatformRuns
  private readonly _payload: TokenWalletPlatformPayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: TokenWalletPlatformContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: TokenWalletPlatformContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: TokenWalletPlatformContent.abi
      }, options)
    this._call = new TokenWalletPlatformCalls(this)
    this._run = new TokenWalletPlatformRuns(this)
    this._payload = new TokenWalletPlatformPayload(this)
  }
  async deploy (
    value: string | number | bigint,
    input: constructorIn,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, input, useGiver, timeout)
  }
  get call (): TokenWalletPlatformCalls {
    return this._call
  }
  get run (): TokenWalletPlatformRuns {
    return this._run
  }
  get payload (): TokenWalletPlatformPayload {
    return this._payload
  }
}
class TokenWalletPlatformCalls {
  constructor (private readonly contract: Contract) {}
}
class TokenWalletPlatformRuns {
  constructor (private readonly contract: Contract) {}
}
class TokenWalletPlatformPayload {
  constructor (private readonly contract: Contract) {}
}
