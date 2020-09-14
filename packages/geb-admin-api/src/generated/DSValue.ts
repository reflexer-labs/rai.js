/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class DsValue extends BaseContractAPI {
    authority(): Promise<string>
    authority(multicall: true): MulticallRequest<string>
    authority(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"authority","outputs":[{"internalType":"contract DSAuthority","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getResultWithValidity(): Promise<{}>
    getResultWithValidity(multicall: true): MulticallRequest<{}>
    getResultWithValidity(
        multicall?: true
    ): Promise<{}> | MulticallRequest<{}> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getResultWithValidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    owner(): Promise<string>
    owner(multicall: true): MulticallRequest<string>
    owner(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    read(): Promise<BigNumber>
    read(multicall: true): MulticallRequest<BigNumber>
    read(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"read","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    restartValue(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"restartValue","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    setAuthority(authority_: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"contract DSAuthority","name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [authority_])
    }

    setOwner(owner_: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [owner_])
    }

    updateResult(newMedian: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"newMedian","type":"uint256"}],"name":"updateResult","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [newMedian])
    }
}
