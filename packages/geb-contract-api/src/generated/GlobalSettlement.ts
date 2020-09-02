/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-provider'
import { TransactionRequest } from '@reflexer-finance/geb-provider'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class GlobalSettlement extends BaseContractAPI {
    accountingEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"accountingEngine","outputs":[{"internalType":"contract AccountingEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    addAuthorization(account: string): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [account])
    }

    authorizedAccounts(address: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [address])
    }

    calculateCashPrice(collateralType: BytesLike): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"calculateCashPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [collateralType])
    }

    coinBag(address: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"coinBag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [address])
    }

    coinSavingsAccount(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coinSavingsAccount","outputs":[{"internalType":"contract CoinSavingsAccountLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    coinsUsedToRedeem(bytes: BytesLike, address: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"coinsUsedToRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [bytes, address])
    }

    collateralCashPrice(bytes: BytesLike): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralCashPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [bytes])
    }

    collateralShortfall(bytes: BytesLike): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralShortfall","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [bytes])
    }

    collateralTotalDebt(bytes: BytesLike): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralTotalDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [bytes])
    }

    contractEnabled(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"contractEnabled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    fastTrackAuction(
        collateralType: BytesLike,
        auctionId: BigNumberish
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"fastTrackAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [collateralType, auctionId])
    }

    finalCoinPerCollateralPrice(bytes: BytesLike): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"finalCoinPerCollateralPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [bytes])
    }

    freeCollateral(collateralType: BytesLike): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"freeCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [collateralType])
    }

    freezeCollateralType(
        collateralType: BytesLike
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"freezeCollateralType","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [collateralType])
    }

    liquidationEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"liquidationEngine","outputs":[{"internalType":"contract LiquidationEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    modifyParameters(
        parameter: BytesLike,
        data: string
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [parameter, data])
    }

    oracleRelayer(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"oracleRelayer","outputs":[{"internalType":"contract OracleRelayerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    outstandingCoinSupply(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"outstandingCoinSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    prepareCoinsForRedeeming(
        coinAmount: BigNumberish
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"coinAmount","type":"uint256"}],"name":"prepareCoinsForRedeeming","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [coinAmount])
    }

    processSAFE(
        collateralType: BytesLike,
        safe: string
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"}],"name":"processSAFE","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [collateralType, safe])
    }

    redeemCollateral(
        collateralType: BytesLike,
        coinsAmount: BigNumberish
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"coinsAmount","type":"uint256"}],"name":"redeemCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [collateralType, coinsAmount])
    }

    removeAuthorization(account: string): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [account])
    }

    safeEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    setOutstandingCoinSupply(): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"setOutstandingCoinSupply","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [])
    }

    shutdownCooldown(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"shutdownCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    shutdownSystem(): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"shutdownSystem","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [])
    }

    shutdownTime(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"shutdownTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    stabilityFeeTreasury(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"stabilityFeeTreasury","outputs":[{"internalType":"contract StabilityFeeTreasuryLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }
}
