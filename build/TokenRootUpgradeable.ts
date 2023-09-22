import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vasku'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import TokenRootUpgradeableContent from './TokenRootUpgradeableContent'
type constructorIn = {
  initialSupplyTo: string
  initialSupply: string | number | bigint
  deployWalletValue: string | number | bigint
  mintDisabled: boolean
  burnByRootDisabled: boolean
  burnPaused: boolean
  remainingGasTo: string
}
type supportsInterfaceIn = {
  answerId: string | number | bigint
  interfaceID: string | number | bigint
}
type supportsInterfaceOut = {
  value0: string
}
type walletVersionIn = {
  answerId: string | number | bigint
}
type walletVersionOut = {
  value0: string
}
type platformCodeIn = {
  answerId: string | number | bigint
}
type platformCodeOut = {
  value0: string
}
type requestUpgradeWalletIn = {
  currentVersion: string | number | bigint
  walletOwner: string
  remainingGasTo: string
}
type setWalletCodeIn = {
  code: string
}
type upgradeIn = {
  code: string
}
type disableMintIn = {
  answerId: string | number | bigint
}
type disableMintOut = {
  value0: string
}
type mintDisabledIn = {
  answerId: string | number | bigint
}
type mintDisabledOut = {
  value0: string
}
type burnTokensIn = {
  amount: string | number | bigint
  walletOwner: string
  remainingGasTo: string
  callbackTo: string
  payload: string
}
type disableBurnByRootIn = {
  answerId: string | number | bigint
}
type disableBurnByRootOut = {
  value0: string
}
type burnByRootDisabledIn = {
  answerId: string | number | bigint
}
type burnByRootDisabledOut = {
  value0: string
}
type burnPausedIn = {
  answerId: string | number | bigint
}
type burnPausedOut = {
  value0: string
}
type setBurnPausedIn = {
  answerId: string | number | bigint
  paused: boolean
}
type setBurnPausedOut = {
  value0: string
}
type transferOwnershipIn = {
  newOwner: string
  remainingGasTo: string
  callbacks: {[key: string | number]: {
    value: string | number | bigint
    payload: string
  }}
}
type nameIn = {
  answerId: string | number | bigint
}
type nameOut = {
  value0: string
}
type symbolIn = {
  answerId: string | number | bigint
}
type symbolOut = {
  value0: string
}
type decimalsIn = {
  answerId: string | number | bigint
}
type decimalsOut = {
  value0: string
}
type totalSupplyIn = {
  answerId: string | number | bigint
}
type totalSupplyOut = {
  value0: string
}
type walletCodeIn = {
  answerId: string | number | bigint
}
type walletCodeOut = {
  value0: string
}
type rootOwnerIn = {
  answerId: string | number | bigint
}
type rootOwnerOut = {
  value0: string
}
type walletOfIn = {
  answerId: string | number | bigint
  walletOwner: string
}
type walletOfOut = {
  value0: string
}
type deployWalletIn = {
  answerId: string | number | bigint
  walletOwner: string
  deployWalletValue: string | number | bigint
}
type deployWalletOut = {
  tokenWallet: string
}
type mintIn = {
  amount: string | number | bigint
  recipient: string
  deployWalletValue: string | number | bigint
  remainingGasTo: string
  notify: boolean
  payload: string
}
type acceptBurnIn = {
  amount: string | number | bigint
  walletOwner: string
  remainingGasTo: string
  callbackTo: string
  payload: string
}
type sendSurplusGasIn = {
  to: string
}

export class TokenRootUpgradeable extends Contract {
  private readonly _call: TokenRootUpgradeableCalls
  private readonly _run: TokenRootUpgradeableRuns
  private readonly _payload: TokenRootUpgradeablePayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: TokenRootUpgradeableContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: TokenRootUpgradeableContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: TokenRootUpgradeableContent.abi
      }, options)
    this._call = new TokenRootUpgradeableCalls(this)
    this._run = new TokenRootUpgradeableRuns(this)
    this._payload = new TokenRootUpgradeablePayload(this)
  }
  async deploy (
    value: string | number | bigint,
    input: constructorIn,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, input, useGiver, timeout)
  }
  get call (): TokenRootUpgradeableCalls {
    return this._call
  }
  get run (): TokenRootUpgradeableRuns {
    return this._run
  }
  get payload (): TokenRootUpgradeablePayload {
    return this._payload
  }
}
class TokenRootUpgradeableCalls {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn, keys?: KeyPair): Promise<ResultOfCall & { out: supportsInterfaceOut }> {
    return await this.contract.callMethod('supportsInterface', input, keys)
  }
  async walletVersion (input: walletVersionIn, keys?: KeyPair): Promise<ResultOfCall & { out: walletVersionOut }> {
    return await this.contract.callMethod('walletVersion', input, keys)
  }
  async platformCode (input: platformCodeIn, keys?: KeyPair): Promise<ResultOfCall & { out: platformCodeOut }> {
    return await this.contract.callMethod('platformCode', input, keys)
  }
  async requestUpgradeWallet (input: requestUpgradeWalletIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('requestUpgradeWallet', input, keys)
  }
  async setWalletCode (input: setWalletCodeIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setWalletCode', input, keys)
  }
  async upgrade (input: upgradeIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('upgrade', input, keys)
  }
  async disableMint (input: disableMintIn, keys?: KeyPair): Promise<ResultOfCall & { out: disableMintOut }> {
    return await this.contract.callMethod('disableMint', input, keys)
  }
  async mintDisabled (input: mintDisabledIn, keys?: KeyPair): Promise<ResultOfCall & { out: mintDisabledOut }> {
    return await this.contract.callMethod('mintDisabled', input, keys)
  }
  async burnTokens (input: burnTokensIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('burnTokens', input, keys)
  }
  async disableBurnByRoot (input: disableBurnByRootIn, keys?: KeyPair): Promise<ResultOfCall & { out: disableBurnByRootOut }> {
    return await this.contract.callMethod('disableBurnByRoot', input, keys)
  }
  async burnByRootDisabled (input: burnByRootDisabledIn, keys?: KeyPair): Promise<ResultOfCall & { out: burnByRootDisabledOut }> {
    return await this.contract.callMethod('burnByRootDisabled', input, keys)
  }
  async burnPaused (input: burnPausedIn, keys?: KeyPair): Promise<ResultOfCall & { out: burnPausedOut }> {
    return await this.contract.callMethod('burnPaused', input, keys)
  }
  async setBurnPaused (input: setBurnPausedIn, keys?: KeyPair): Promise<ResultOfCall & { out: setBurnPausedOut }> {
    return await this.contract.callMethod('setBurnPaused', input, keys)
  }
  async transferOwnership (input: transferOwnershipIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('transferOwnership', input, keys)
  }
  async name (input: nameIn, keys?: KeyPair): Promise<ResultOfCall & { out: nameOut }> {
    return await this.contract.callMethod('name', input, keys)
  }
  async symbol (input: symbolIn, keys?: KeyPair): Promise<ResultOfCall & { out: symbolOut }> {
    return await this.contract.callMethod('symbol', input, keys)
  }
  async decimals (input: decimalsIn, keys?: KeyPair): Promise<ResultOfCall & { out: decimalsOut }> {
    return await this.contract.callMethod('decimals', input, keys)
  }
  async totalSupply (input: totalSupplyIn, keys?: KeyPair): Promise<ResultOfCall & { out: totalSupplyOut }> {
    return await this.contract.callMethod('totalSupply', input, keys)
  }
  async walletCode (input: walletCodeIn, keys?: KeyPair): Promise<ResultOfCall & { out: walletCodeOut }> {
    return await this.contract.callMethod('walletCode', input, keys)
  }
  async rootOwner (input: rootOwnerIn, keys?: KeyPair): Promise<ResultOfCall & { out: rootOwnerOut }> {
    return await this.contract.callMethod('rootOwner', input, keys)
  }
  async walletOf (input: walletOfIn, keys?: KeyPair): Promise<ResultOfCall & { out: walletOfOut }> {
    return await this.contract.callMethod('walletOf', input, keys)
  }
  async deployWallet (input: deployWalletIn, keys?: KeyPair): Promise<ResultOfCall & { out: deployWalletOut }> {
    return await this.contract.callMethod('deployWallet', input, keys)
  }
  async mint (input: mintIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('mint', input, keys)
  }
  async acceptBurn (input: acceptBurnIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('acceptBurn', input, keys)
  }
  async sendSurplusGas (input: sendSurplusGasIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('sendSurplusGas', input, keys)
  }
}
class TokenRootUpgradeableRuns {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn): Promise<supportsInterfaceOut> {
    return (await this.contract.runMethod('supportsInterface', input)).value
  }
  async walletVersion (input: walletVersionIn): Promise<walletVersionOut> {
    return (await this.contract.runMethod('walletVersion', input)).value
  }
  async platformCode (input: platformCodeIn): Promise<platformCodeOut> {
    return (await this.contract.runMethod('platformCode', input)).value
  }
  async disableMint (input: disableMintIn): Promise<disableMintOut> {
    return (await this.contract.runMethod('disableMint', input)).value
  }
  async mintDisabled (input: mintDisabledIn): Promise<mintDisabledOut> {
    return (await this.contract.runMethod('mintDisabled', input)).value
  }
  async disableBurnByRoot (input: disableBurnByRootIn): Promise<disableBurnByRootOut> {
    return (await this.contract.runMethod('disableBurnByRoot', input)).value
  }
  async burnByRootDisabled (input: burnByRootDisabledIn): Promise<burnByRootDisabledOut> {
    return (await this.contract.runMethod('burnByRootDisabled', input)).value
  }
  async burnPaused (input: burnPausedIn): Promise<burnPausedOut> {
    return (await this.contract.runMethod('burnPaused', input)).value
  }
  async setBurnPaused (input: setBurnPausedIn): Promise<setBurnPausedOut> {
    return (await this.contract.runMethod('setBurnPaused', input)).value
  }
  async name (input: nameIn): Promise<nameOut> {
    return (await this.contract.runMethod('name', input)).value
  }
  async symbol (input: symbolIn): Promise<symbolOut> {
    return (await this.contract.runMethod('symbol', input)).value
  }
  async decimals (input: decimalsIn): Promise<decimalsOut> {
    return (await this.contract.runMethod('decimals', input)).value
  }
  async totalSupply (input: totalSupplyIn): Promise<totalSupplyOut> {
    return (await this.contract.runMethod('totalSupply', input)).value
  }
  async walletCode (input: walletCodeIn): Promise<walletCodeOut> {
    return (await this.contract.runMethod('walletCode', input)).value
  }
  async rootOwner (input: rootOwnerIn): Promise<rootOwnerOut> {
    return (await this.contract.runMethod('rootOwner', input)).value
  }
  async walletOf (input: walletOfIn): Promise<walletOfOut> {
    return (await this.contract.runMethod('walletOf', input)).value
  }
  async deployWallet (input: deployWalletIn): Promise<deployWalletOut> {
    return (await this.contract.runMethod('deployWallet', input)).value
  }
}
class TokenRootUpgradeablePayload {
  constructor (private readonly contract: Contract) {}
  async supportsInterface (input: supportsInterfaceIn): Promise<string> {
    return await this.contract.createPayload('supportsInterface', input)
  }
  async walletVersion (input: walletVersionIn): Promise<string> {
    return await this.contract.createPayload('walletVersion', input)
  }
  async platformCode (input: platformCodeIn): Promise<string> {
    return await this.contract.createPayload('platformCode', input)
  }
  async requestUpgradeWallet (input: requestUpgradeWalletIn): Promise<string> {
    return await this.contract.createPayload('requestUpgradeWallet', input)
  }
  async setWalletCode (input: setWalletCodeIn): Promise<string> {
    return await this.contract.createPayload('setWalletCode', input)
  }
  async upgrade (input: upgradeIn): Promise<string> {
    return await this.contract.createPayload('upgrade', input)
  }
  async disableMint (input: disableMintIn): Promise<string> {
    return await this.contract.createPayload('disableMint', input)
  }
  async mintDisabled (input: mintDisabledIn): Promise<string> {
    return await this.contract.createPayload('mintDisabled', input)
  }
  async burnTokens (input: burnTokensIn): Promise<string> {
    return await this.contract.createPayload('burnTokens', input)
  }
  async disableBurnByRoot (input: disableBurnByRootIn): Promise<string> {
    return await this.contract.createPayload('disableBurnByRoot', input)
  }
  async burnByRootDisabled (input: burnByRootDisabledIn): Promise<string> {
    return await this.contract.createPayload('burnByRootDisabled', input)
  }
  async burnPaused (input: burnPausedIn): Promise<string> {
    return await this.contract.createPayload('burnPaused', input)
  }
  async setBurnPaused (input: setBurnPausedIn): Promise<string> {
    return await this.contract.createPayload('setBurnPaused', input)
  }
  async transferOwnership (input: transferOwnershipIn): Promise<string> {
    return await this.contract.createPayload('transferOwnership', input)
  }
  async name (input: nameIn): Promise<string> {
    return await this.contract.createPayload('name', input)
  }
  async symbol (input: symbolIn): Promise<string> {
    return await this.contract.createPayload('symbol', input)
  }
  async decimals (input: decimalsIn): Promise<string> {
    return await this.contract.createPayload('decimals', input)
  }
  async totalSupply (input: totalSupplyIn): Promise<string> {
    return await this.contract.createPayload('totalSupply', input)
  }
  async walletCode (input: walletCodeIn): Promise<string> {
    return await this.contract.createPayload('walletCode', input)
  }
  async rootOwner (input: rootOwnerIn): Promise<string> {
    return await this.contract.createPayload('rootOwner', input)
  }
  async walletOf (input: walletOfIn): Promise<string> {
    return await this.contract.createPayload('walletOf', input)
  }
  async deployWallet (input: deployWalletIn): Promise<string> {
    return await this.contract.createPayload('deployWallet', input)
  }
  async mint (input: mintIn): Promise<string> {
    return await this.contract.createPayload('mint', input)
  }
  async acceptBurn (input: acceptBurnIn): Promise<string> {
    return await this.contract.createPayload('acceptBurn', input)
  }
  async sendSurplusGas (input: sendSurplusGasIn): Promise<string> {
    return await this.contract.createPayload('sendSurplusGas', input)
  }
}
