import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vasku'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import SelectorContent from './SelectorContent'
type calculateAcceptTransferSelectorOut = {
  value0: string
}
type calculateAcceptMintSelectorOut = {
  value0: string
}
type calculateAcceptBurnSelectorOut = {
  value0: string
}
type calculateTIP3TokenRootInterfaceIDOut = {
  value0: string
}
type calculateTIP3TokenWalletInterfaceIDOut = {
  value0: string
}
type calculateSIDInterfaceIDOut = {
  value0: string
}
type calculateVersionedInterfaceIDOut = {
  value0: string
}
type calculateTokenRootInterfaceIDOut = {
  value0: string
}
type calculateTokenWalletInterfaceIDOut = {
  value0: string
}
type calculateBurnableTokenWalletInterfaceIDOut = {
  value0: string
}
type calculateBurnableByRootTokenRootInterfaceIDOut = {
  value0: string
}
type calculateBurnableByRootTokenWalletInterfaceIDOut = {
  value0: string
}
type calculateDestroyableInterfaceIDOut = {
  value0: string
}
type calculateDisableableMintTokenRootInterfaceIDOut = {
  value0: string
}
type calculateTransferableOwnershipInterfaceIDOut = {
  value0: string
}
type calculateBurnPausableTokenRootInterfaceIDOut = {
  value0: string
}
type calculateTokenWalletUpgradeableInterfaceIDOut = {
  value0: string
}
type calculateTokenRootUpgradeableInterfaceIDOut = {
  value0: string
}

export class Selector extends Contract {
  private readonly _call: SelectorCalls
  private readonly _run: SelectorRuns
  private readonly _payload: SelectorPayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: SelectorContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: SelectorContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: SelectorContent.abi
      }, options)
    this._call = new SelectorCalls(this)
    this._run = new SelectorRuns(this)
    this._payload = new SelectorPayload(this)
  }
  async deploy (
    value: string | number | bigint,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, {}, useGiver, timeout)
  }
  get call (): SelectorCalls {
    return this._call
  }
  get run (): SelectorRuns {
    return this._run
  }
  get payload (): SelectorPayload {
    return this._payload
  }
}
class SelectorCalls {
  constructor (private readonly contract: Contract) {}
  async calculateAcceptTransferSelector (keys?: KeyPair): Promise<ResultOfCall & { out: calculateAcceptTransferSelectorOut }> {
    return await this.contract.callMethod('calculateAcceptTransferSelector', {}, keys)
  }
  async calculateAcceptMintSelector (keys?: KeyPair): Promise<ResultOfCall & { out: calculateAcceptMintSelectorOut }> {
    return await this.contract.callMethod('calculateAcceptMintSelector', {}, keys)
  }
  async calculateAcceptBurnSelector (keys?: KeyPair): Promise<ResultOfCall & { out: calculateAcceptBurnSelectorOut }> {
    return await this.contract.callMethod('calculateAcceptBurnSelector', {}, keys)
  }
  async calculateTIP3TokenRootInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateTIP3TokenRootInterfaceIDOut }> {
    return await this.contract.callMethod('calculateTIP3TokenRootInterfaceID', {}, keys)
  }
  async calculateTIP3TokenWalletInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateTIP3TokenWalletInterfaceIDOut }> {
    return await this.contract.callMethod('calculateTIP3TokenWalletInterfaceID', {}, keys)
  }
  async calculateSIDInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateSIDInterfaceIDOut }> {
    return await this.contract.callMethod('calculateSIDInterfaceID', {}, keys)
  }
  async calculateVersionedInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateVersionedInterfaceIDOut }> {
    return await this.contract.callMethod('calculateVersionedInterfaceID', {}, keys)
  }
  async calculateTokenRootInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateTokenRootInterfaceIDOut }> {
    return await this.contract.callMethod('calculateTokenRootInterfaceID', {}, keys)
  }
  async calculateTokenWalletInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateTokenWalletInterfaceIDOut }> {
    return await this.contract.callMethod('calculateTokenWalletInterfaceID', {}, keys)
  }
  async calculateBurnableTokenWalletInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateBurnableTokenWalletInterfaceIDOut }> {
    return await this.contract.callMethod('calculateBurnableTokenWalletInterfaceID', {}, keys)
  }
  async calculateBurnableByRootTokenRootInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateBurnableByRootTokenRootInterfaceIDOut }> {
    return await this.contract.callMethod('calculateBurnableByRootTokenRootInterfaceID', {}, keys)
  }
  async calculateBurnableByRootTokenWalletInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateBurnableByRootTokenWalletInterfaceIDOut }> {
    return await this.contract.callMethod('calculateBurnableByRootTokenWalletInterfaceID', {}, keys)
  }
  async calculateDestroyableInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateDestroyableInterfaceIDOut }> {
    return await this.contract.callMethod('calculateDestroyableInterfaceID', {}, keys)
  }
  async calculateDisableableMintTokenRootInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateDisableableMintTokenRootInterfaceIDOut }> {
    return await this.contract.callMethod('calculateDisableableMintTokenRootInterfaceID', {}, keys)
  }
  async calculateTransferableOwnershipInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateTransferableOwnershipInterfaceIDOut }> {
    return await this.contract.callMethod('calculateTransferableOwnershipInterfaceID', {}, keys)
  }
  async calculateBurnPausableTokenRootInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateBurnPausableTokenRootInterfaceIDOut }> {
    return await this.contract.callMethod('calculateBurnPausableTokenRootInterfaceID', {}, keys)
  }
  async calculateTokenWalletUpgradeableInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateTokenWalletUpgradeableInterfaceIDOut }> {
    return await this.contract.callMethod('calculateTokenWalletUpgradeableInterfaceID', {}, keys)
  }
  async calculateTokenRootUpgradeableInterfaceID (keys?: KeyPair): Promise<ResultOfCall & { out: calculateTokenRootUpgradeableInterfaceIDOut }> {
    return await this.contract.callMethod('calculateTokenRootUpgradeableInterfaceID', {}, keys)
  }
}
class SelectorRuns {
  constructor (private readonly contract: Contract) {}
  async calculateAcceptTransferSelector (): Promise<calculateAcceptTransferSelectorOut> {
    return (await this.contract.runMethod('calculateAcceptTransferSelector')).value
  }
  async calculateAcceptMintSelector (): Promise<calculateAcceptMintSelectorOut> {
    return (await this.contract.runMethod('calculateAcceptMintSelector')).value
  }
  async calculateAcceptBurnSelector (): Promise<calculateAcceptBurnSelectorOut> {
    return (await this.contract.runMethod('calculateAcceptBurnSelector')).value
  }
  async calculateTIP3TokenRootInterfaceID (): Promise<calculateTIP3TokenRootInterfaceIDOut> {
    return (await this.contract.runMethod('calculateTIP3TokenRootInterfaceID')).value
  }
  async calculateTIP3TokenWalletInterfaceID (): Promise<calculateTIP3TokenWalletInterfaceIDOut> {
    return (await this.contract.runMethod('calculateTIP3TokenWalletInterfaceID')).value
  }
  async calculateSIDInterfaceID (): Promise<calculateSIDInterfaceIDOut> {
    return (await this.contract.runMethod('calculateSIDInterfaceID')).value
  }
  async calculateVersionedInterfaceID (): Promise<calculateVersionedInterfaceIDOut> {
    return (await this.contract.runMethod('calculateVersionedInterfaceID')).value
  }
  async calculateTokenRootInterfaceID (): Promise<calculateTokenRootInterfaceIDOut> {
    return (await this.contract.runMethod('calculateTokenRootInterfaceID')).value
  }
  async calculateTokenWalletInterfaceID (): Promise<calculateTokenWalletInterfaceIDOut> {
    return (await this.contract.runMethod('calculateTokenWalletInterfaceID')).value
  }
  async calculateBurnableTokenWalletInterfaceID (): Promise<calculateBurnableTokenWalletInterfaceIDOut> {
    return (await this.contract.runMethod('calculateBurnableTokenWalletInterfaceID')).value
  }
  async calculateBurnableByRootTokenRootInterfaceID (): Promise<calculateBurnableByRootTokenRootInterfaceIDOut> {
    return (await this.contract.runMethod('calculateBurnableByRootTokenRootInterfaceID')).value
  }
  async calculateBurnableByRootTokenWalletInterfaceID (): Promise<calculateBurnableByRootTokenWalletInterfaceIDOut> {
    return (await this.contract.runMethod('calculateBurnableByRootTokenWalletInterfaceID')).value
  }
  async calculateDestroyableInterfaceID (): Promise<calculateDestroyableInterfaceIDOut> {
    return (await this.contract.runMethod('calculateDestroyableInterfaceID')).value
  }
  async calculateDisableableMintTokenRootInterfaceID (): Promise<calculateDisableableMintTokenRootInterfaceIDOut> {
    return (await this.contract.runMethod('calculateDisableableMintTokenRootInterfaceID')).value
  }
  async calculateTransferableOwnershipInterfaceID (): Promise<calculateTransferableOwnershipInterfaceIDOut> {
    return (await this.contract.runMethod('calculateTransferableOwnershipInterfaceID')).value
  }
  async calculateBurnPausableTokenRootInterfaceID (): Promise<calculateBurnPausableTokenRootInterfaceIDOut> {
    return (await this.contract.runMethod('calculateBurnPausableTokenRootInterfaceID')).value
  }
  async calculateTokenWalletUpgradeableInterfaceID (): Promise<calculateTokenWalletUpgradeableInterfaceIDOut> {
    return (await this.contract.runMethod('calculateTokenWalletUpgradeableInterfaceID')).value
  }
  async calculateTokenRootUpgradeableInterfaceID (): Promise<calculateTokenRootUpgradeableInterfaceIDOut> {
    return (await this.contract.runMethod('calculateTokenRootUpgradeableInterfaceID')).value
  }
}
class SelectorPayload {
  constructor (private readonly contract: Contract) {}
  async calculateAcceptTransferSelector (): Promise<string> {
    return await this.contract.createPayload('calculateAcceptTransferSelector')
  }
  async calculateAcceptMintSelector (): Promise<string> {
    return await this.contract.createPayload('calculateAcceptMintSelector')
  }
  async calculateAcceptBurnSelector (): Promise<string> {
    return await this.contract.createPayload('calculateAcceptBurnSelector')
  }
  async calculateTIP3TokenRootInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateTIP3TokenRootInterfaceID')
  }
  async calculateTIP3TokenWalletInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateTIP3TokenWalletInterfaceID')
  }
  async calculateSIDInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateSIDInterfaceID')
  }
  async calculateVersionedInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateVersionedInterfaceID')
  }
  async calculateTokenRootInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateTokenRootInterfaceID')
  }
  async calculateTokenWalletInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateTokenWalletInterfaceID')
  }
  async calculateBurnableTokenWalletInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateBurnableTokenWalletInterfaceID')
  }
  async calculateBurnableByRootTokenRootInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateBurnableByRootTokenRootInterfaceID')
  }
  async calculateBurnableByRootTokenWalletInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateBurnableByRootTokenWalletInterfaceID')
  }
  async calculateDestroyableInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateDestroyableInterfaceID')
  }
  async calculateDisableableMintTokenRootInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateDisableableMintTokenRootInterfaceID')
  }
  async calculateTransferableOwnershipInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateTransferableOwnershipInterfaceID')
  }
  async calculateBurnPausableTokenRootInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateBurnPausableTokenRootInterfaceID')
  }
  async calculateTokenWalletUpgradeableInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateTokenWalletUpgradeableInterfaceID')
  }
  async calculateTokenRootUpgradeableInterfaceID (): Promise<string> {
    return await this.contract.createPayload('calculateTokenRootUpgradeableInterfaceID')
  }
}
