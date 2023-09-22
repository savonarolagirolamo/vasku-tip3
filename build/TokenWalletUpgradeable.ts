import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vasku'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import TokenWalletUpgradeableContent from './TokenWalletUpgradeableContent'
type supportsInterfaceIn = {
  answerId: string | number | bigint
  interfaceID: string | number | bigint
}
type supportsInterfaceOut = {
  value0: string
}
type platformCodeIn = {
  answerId: string | number | bigint
}
type platformCodeOut = {
  value0: string
}
type onDeployRetryIn = {
  value0: string
  value1: string | number | bigint
  sender: string
  remainingGasTo: string
}
type versionIn = {
  answerId: string | number | bigint
}
type versionOut = {
  value0: string
}
type upgradeIn = {
  remainingGasTo: string
}
type acceptUpgradeIn = {
  newCode: string
  newVersion: string | number | bigint
  remainingGasTo: string
}
type burnByRootIn = {
  amount: string | number | bigint
  remainingGasTo: string
  callbackTo: string
  payload: string
}
type destroyIn = {
  remainingGasTo: string
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

export class TokenWalletUpgradeable extends Contract {
  private readonly _call: TokenWalletUpgradeableCalls
  private readonly _run: TokenWalletUpgradeableRuns
  private readonly _payload: TokenWalletUpgradeablePayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: TokenWalletUpgradeableContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: TokenWalletUpgradeableContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: TokenWalletUpgradeableContent.abi
      }, options)
    this._call = new TokenWalletUpgradeableCalls(this)
    this._run = new TokenWalletUpgradeableRuns(this)
    this._payload = new TokenWalletUpgradeablePayload(this)
  }
  async deploy (
    value: string | number | bigint,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, {}, useGiver, timeout)
  }
  get call (): TokenWalletUpgradeableCalls {
    return this._call
  }
  get run (): TokenWalletUpgradeableRuns {
    return this._run
  }
  get payload (): TokenWalletUpgradeablePayload {
    return this._payload
  }
}
class TokenWalletUpgradeableCalls {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn, keys?: KeyPair): Promise<ResultOfCall & { out: supportsInterfaceOut }> {
    return await this.contract.callMethod('supportsInterface', input, keys)
  }
  async platformCode (input: platformCodeIn, keys?: KeyPair): Promise<ResultOfCall & { out: platformCodeOut }> {
    return await this.contract.callMethod('platformCode', input, keys)
  }
  async onDeployRetry (input: onDeployRetryIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('onDeployRetry', input, keys)
  }
  async version (input: versionIn, keys?: KeyPair): Promise<ResultOfCall & { out: versionOut }> {
    return await this.contract.callMethod('version', input, keys)
  }
  async upgrade (input: upgradeIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('upgrade', input, keys)
  }
  async acceptUpgrade (input: acceptUpgradeIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('acceptUpgrade', input, keys)
  }
  async burnByRoot (input: burnByRootIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('burnByRoot', input, keys)
  }
  async destroy (input: destroyIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('destroy', input, keys)
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
class TokenWalletUpgradeableRuns {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn): Promise<supportsInterfaceOut> {
    return (await this.contract.runMethod('supportsInterface', input)).value
  }
  async platformCode (input: platformCodeIn): Promise<platformCodeOut> {
    return (await this.contract.runMethod('platformCode', input)).value
  }
  async version (input: versionIn): Promise<versionOut> {
    return (await this.contract.runMethod('version', input)).value
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
class TokenWalletUpgradeablePayload {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn): Promise<string> {
    return await this.contract.createPayload('supportsInterface', input)
  }
  async platformCode (input: platformCodeIn): Promise<string> {
    return await this.contract.createPayload('platformCode', input)
  }
  async onDeployRetry (input: onDeployRetryIn): Promise<string> {
    return await this.contract.createPayload('onDeployRetry', input)
  }
  async version (input: versionIn): Promise<string> {
    return await this.contract.createPayload('version', input)
  }
  async upgrade (input: upgradeIn): Promise<string> {
    return await this.contract.createPayload('upgrade', input)
  }
  async acceptUpgrade (input: acceptUpgradeIn): Promise<string> {
    return await this.contract.createPayload('acceptUpgrade', input)
  }
  async burnByRoot (input: burnByRootIn): Promise<string> {
    return await this.contract.createPayload('burnByRoot', input)
  }
  async destroy (input: destroyIn): Promise<string> {
    return await this.contract.createPayload('destroy', input)
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
