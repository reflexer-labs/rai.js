/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumber } from '@ethersproject/bignumber'

export class ChainlinkMedianFlxusd extends BaseContractAPI {
    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    authorizedAccounts(address: string): Promise<BigNumber>
    authorizedAccounts(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    authorizedAccounts(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    baseUpdateCallerReward(): Promise<BigNumber>
    baseUpdateCallerReward(multicall: true): MulticallRequest<BigNumber>
    baseUpdateCallerReward(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"baseUpdateCallerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    chainlinkAggregator(): Promise<string>
    chainlinkAggregator(multicall: true): MulticallRequest<string>
    chainlinkAggregator(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"chainlinkAggregator","outputs":[{"internalType":"contract AggregatorInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getCallerReward(): Promise<BigNumber>
    getCallerReward(multicall: true): MulticallRequest<BigNumber>
    getCallerReward(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getCallerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

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

    lastUpdateTime(): Promise<BigNumber>
    lastUpdateTime(multicall: true): MulticallRequest<BigNumber>
    lastUpdateTime(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    linkAggregatorTimestamp(): Promise<BigNumber>
    linkAggregatorTimestamp(multicall: true): MulticallRequest<BigNumber>
    linkAggregatorTimestamp(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"linkAggregatorTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    maxRewardIncreaseDelay(): Promise<BigNumber>
    maxRewardIncreaseDelay(multicall: true): MulticallRequest<BigNumber>
    maxRewardIncreaseDelay(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"maxRewardIncreaseDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    maxUpdateCallerReward(): Promise<BigNumber>
    maxUpdateCallerReward(multicall: true): MulticallRequest<BigNumber>
    maxUpdateCallerReward(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"maxUpdateCallerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    modifyParameters(parameter: BytesLike, addr: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, addr])
    }

    multiplier(): Promise<number>
    multiplier(multicall: true): MulticallRequest<number>
    multiplier(multicall?: true): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"multiplier","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    perSecondCallerRewardIncrease(): Promise<BigNumber>
    perSecondCallerRewardIncrease(multicall: true): MulticallRequest<BigNumber>
    perSecondCallerRewardIncrease(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"perSecondCallerRewardIncrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    periodSize(): Promise<BigNumber>
    periodSize(multicall: true): MulticallRequest<BigNumber>
    periodSize(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"periodSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

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

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    symbol(): Promise<string>
    symbol(multicall: true): MulticallRequest<string>
    symbol(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"symbol","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    treasury(): Promise<string>
    treasury(multicall: true): MulticallRequest<string>
    treasury(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"treasury","outputs":[{"internalType":"contract StabilityFeeTreasuryLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    treasuryAllowance(): Promise<BigNumber>
    treasuryAllowance(multicall: true): MulticallRequest<BigNumber>
    treasuryAllowance(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"treasuryAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    updateResult(feeReceiver: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"feeReceiver","type":"address"}],"name":"updateResult","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [feeReceiver])
    }
}
