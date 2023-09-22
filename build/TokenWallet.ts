import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vasku'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import TokenWalletContent from './TokenWalletContent'
type supportsInterfaceIn = {
  answerId: string | number | bigint
  interfaceID: string | number | bigint
}
type supportsInterfaceOut = {
  value0: string
}
type destroyIn = {
  remainingGasTo: string
}
type burnByRootIn = {
  amount: string | number | bigint
  remainingGasTo: string
  callbackTo: string
  payload: string
}
type burnIn = {
  amount: string | number | bigint
  remainingGasTo: string
  callbackTo: string
  payload: string
}
type balanceIn = {
  answerId: string | number | bigint
}
type balanceOut = {
  value0: string
}
type ownerIn = {
  answerId: string | number | bigint
}
type ownerOut = {
  value0: string
}
type rootIn = {
  answerId: string | number | bigint
}
type rootOut = {
  value0: string
}
type walletCodeIn = {
  answerId: string | number | bigint
}
type walletCodeOut = {
  value0: string
}
type transferIn = {
  amount: string | number | bigint
  recipient: string
  deployWalletValue: string | number | bigint
  remainingGasTo: string
  notify: boolean
  payload: string
}
type transferToWalletIn = {
  amount: string | number | bigint
  recipientTokenWallet: string
  remainingGasTo: string
  notify: boolean
  payload: string
}
type acceptTransferIn = {
  amount: string | number | bigint
  sender: string
  remainingGasTo: string
  notify: boolean
  payload: string
}
type acceptMintIn = {
  amount: string | number | bigint
  remainingGasTo: string
  notify: boolean
  payload: string
}
type sendSurplusGasIn = {
  to: string
}

export class TokenWallet extends Contract {
  private readonly _call: TokenWalletCalls
  private readonly _run: TokenWalletRuns
  private readonly _payload: TokenWalletPayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: TokenWalletContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: TokenWalletContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: TokenWalletContent.abi
      }, options)
    this._call = new TokenWalletCalls(this)
    this._run = new TokenWalletRuns(this)
    this._payload = new TokenWalletPayload(this)
  }
  async deploy (
    value: string | number | bigint,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, {}, useGiver, timeout)
  }
  get call (): TokenWalletCalls {
    return this._call
  }
  get run (): TokenWalletRuns {
    return this._run
  }
  get payload (): TokenWalletPayload {
    return this._payload
  }
}
class TokenWalletCalls {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn, keys?: KeyPair): Promise<ResultOfCall & { out: supportsInterfaceOut }> {
    return await this.contract.callMethod('supportsInterface', input, keys)
  }
  async destroy (input: destroyIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('destroy', input, keys)
  }
  async burnByRoot (input: burnByRootIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('burnByRoot', input, keys)
  }
  async burn (input: burnIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('burn', input, keys)
  }
  async balance (input: balanceIn, keys?: KeyPair): Promise<ResultOfCall & { out: balanceOut }> {
    return await this.contract.callMethod('balance', input, keys)
  }
  async owner (input: ownerIn, keys?: KeyPair): Promise<ResultOfCall & { out: ownerOut }> {
    return await this.contract.callMethod('owner', input, keys)
  }
  async root (input: rootIn, keys?: KeyPair): Promise<ResultOfCall & { out: rootOut }> {
    return await this.contract.callMethod('root', input, keys)
  }
  async walletCode (input: walletCodeIn, keys?: KeyPair): Promise<ResultOfCall & { out: walletCodeOut }> {
    return await this.contract.callMethod('walletCode', input, keys)
  }
  async transfer (input: transferIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('transfer', input, keys)
  }
  async transferToWallet (input: transferToWalletIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('transferToWallet', input, keys)
  }
  async acceptTransfer (input: acceptTransferIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('acceptTransfer', input, keys)
  }
  async acceptMint (input: acceptMintIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('acceptMint', input, keys)
  }
  async sendSurplusGas (input: sendSurplusGasIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('sendSurplusGas', input, keys)
  }
}
class TokenWalletRuns {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn): Promise<supportsInterfaceOut> {
    return (await this.contract.runMethod('supportsInterface', input)).value
  }
  async balance (input: balanceIn): Promise<balanceOut> {
    return (await this.contract.runMethod('balance', input)).value
  }
  async owner (input: ownerIn): Promise<ownerOut> {
    return (await this.contract.runMethod('owner', input)).value
  }
  async root (input: rootIn): Promise<rootOut> {
    return (await this.contract.runMethod('root', input)).value
  }
  async walletCode (input: walletCodeIn): Promise<walletCodeOut> {
    return (await this.contract.runMethod('walletCode', input)).value
  }
}
class TokenWalletPayload {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn): Promise<string> {
    return await this.contract.createPayload('supportsInterface', input)
  }
  async destroy (input: destroyIn): Promise<string> {
    return await this.contract.createPayload('destroy', input)
  }
  async burnByRoot (input: burnByRootIn): Promise<string> {
    return await this.contract.createPayload('burnByRoot', input)
  }
  async burn (input: burnIn): Promise<string> {
    return await this.contract.createPayload('burn', input)
  }
  async balance (input: balanceIn): Promise<string> {
    return await this.contract.createPayload('balance', input)
  }
  async owner (input: ownerIn): Promise<string> {
    return await this.contract.createPayload('owner', input)
  }
  async root (input: rootIn): Promise<string> {
    return await this.contract.createPayload('root', input)
  }
  async walletCode (input: walletCodeIn): Promise<string> {
    return await this.contract.createPayload('walletCode', input)
  }
  async transfer (input: transferIn): Promise<string> {
    return await this.contract.createPayload('transfer', input)
  }
  async transferToWallet (input: transferToWalletIn): Promise<string> {
    return await this.contract.createPayload('transferToWallet', input)
  }
  async acceptTransfer (input: acceptTransferIn): Promise<string> {
    return await this.contract.createPayload('acceptTransfer', input)
  }
  async acceptMint (input: acceptMintIn): Promise<string> {
    return await this.contract.createPayload('acceptMint', input)
  }
  async sendSurplusGas (input: sendSurplusGasIn): Promise<string> {
    return await this.contract.createPayload('sendSurplusGas', input)
  }
}
