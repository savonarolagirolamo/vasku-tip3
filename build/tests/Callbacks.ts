import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vasku'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import CallbacksContent from './CallbacksContent'
type onAcceptTokensTransferIn = {
  tokenRoot: string
  amount: string | number | bigint
  sender: string
  senderWallet: string
  remainingGasTo: string
  payload: string
}
type onBounceTokensTransferIn = {
  tokenRoot: string
  amount: string | number | bigint
  revertedFrom: string
}
type onAcceptTokensMintIn = {
  tokenRoot: string
  amount: string | number | bigint
  remainingGasTo: string
  payload: string
}
type onAcceptTokensBurnIn = {
  amount: string | number | bigint
  walletOwner: string
  wallet: string
  remainingGasTo: string
  payload: string
}
type onBounceTokensBurnIn = {
  tokenRoot: string
  amount: string | number | bigint
}

export class Callbacks extends Contract {
  private readonly _call: CallbacksCalls
  private readonly _run: CallbacksRuns
  private readonly _payload: CallbacksPayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: CallbacksContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: CallbacksContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: CallbacksContent.abi
      }, options)
    this._call = new CallbacksCalls(this)
    this._run = new CallbacksRuns(this)
    this._payload = new CallbacksPayload(this)
  }
  async deploy (
    value: string | number | bigint,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, {}, useGiver, timeout)
  }
  get call (): CallbacksCalls {
    return this._call
  }
  get run (): CallbacksRuns {
    return this._run
  }
  get payload (): CallbacksPayload {
    return this._payload
  }
}
class CallbacksCalls {
  constructor (private readonly contract: Contract) {}
  async onAcceptTokensTransfer (input: onAcceptTokensTransferIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('onAcceptTokensTransfer', input, keys)
  }
  async onBounceTokensTransfer (input: onBounceTokensTransferIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('onBounceTokensTransfer', input, keys)
  }
  async onAcceptTokensMint (input: onAcceptTokensMintIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('onAcceptTokensMint', input, keys)
  }
  async onAcceptTokensBurn (input: onAcceptTokensBurnIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('onAcceptTokensBurn', input, keys)
  }
  async onBounceTokensBurn (input: onBounceTokensBurnIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('onBounceTokensBurn', input, keys)
  }
}
class CallbacksRuns {
  constructor (private readonly contract: Contract) {}
}
class CallbacksPayload {
  constructor (private readonly contract: Contract) {}
  async onAcceptTokensTransfer (input: onAcceptTokensTransferIn): Promise<string> {
    return await this.contract.createPayload('onAcceptTokensTransfer', input)
  }
  async onBounceTokensTransfer (input: onBounceTokensTransferIn): Promise<string> {
    return await this.contract.createPayload('onBounceTokensTransfer', input)
  }
  async onAcceptTokensMint (input: onAcceptTokensMintIn): Promise<string> {
    return await this.contract.createPayload('onAcceptTokensMint', input)
  }
  async onAcceptTokensBurn (input: onAcceptTokensBurnIn): Promise<string> {
    return await this.contract.createPayload('onAcceptTokensBurn', input)
  }
  async onBounceTokensBurn (input: onBounceTokensBurnIn): Promise<string> {
    return await this.contract.createPayload('onBounceTokensBurn', input)
  }
}
