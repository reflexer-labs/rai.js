/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-provider'
import { TransactionRequest } from '@reflexer-finance/geb-provider'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class PostSettlementSurplusAuctionHouse extends BaseContractAPI {
    AUCTION_HOUSE_TYPE(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_HOUSE_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    /**
     * Add auth to an account
     * @param account Account to add auth to
     */
    addAuthorization(account: string): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [account])
    }

    auctionsStarted(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionsStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    authorizedAccounts(address: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [address])
    }

    bidDuration(): Promise<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidDuration","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    bidIncrease(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidIncrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    bids(
        uinteger: BigNumberish
    ): Promise<{
        bidAmount: BigNumber
        amountToSell: BigNumber
        highBidder: string
        bidExpiry: number
        auctionDeadline: number
    }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"bidAmount","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"address","name":"highBidder","type":"address"},{"internalType":"uint48","name":"bidExpiry","type":"uint48"},{"internalType":"uint48","name":"auctionDeadline","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [uinteger])
    }

    /**
     * Submit a higher protocol token bid for the same amount of system coins
     * @param amountToBuy Amount of system coins to buy (wad)
     * @param bid New bid submitted (rad)
     * @param id ID of the auction you want to submit the bid for
     */
    increaseBidSize(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        bid: BigNumberish
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"increaseBidSize","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [id, amountToBuy, bid])
    }

    /**
     * Modify auction parameters
     * @param data New value for the parameter
     * @param parameter The name of the parameter modified
     */
    modifyParameters(
        parameter: BytesLike,
        data: BigNumberish
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [parameter, data])
    }

    protocolToken(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"protocolToken","outputs":[{"internalType":"contract TokenLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    /**
     * Remove auth from an account
     * @param account Account to remove auth from
     */
    removeAuthorization(account: string): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [account])
    }

    /**
     * Restart an auction if no bids were submitted for it
     * @param id ID of the auction to restart
     */
    restartAuction(id: BigNumberish): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"restartAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [id])
    }

    safeEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    /**
     * Settle/finish an auction
     * @param id ID of the auction to settle
     */
    settleAuction(id: BigNumberish): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [id])
    }

    /**
     * Start a new surplus auction
     * @param amountToSell Total amount of system coins to sell (wad)
     * @param initialBid Initial protocol token bid (rad)
     */
    startAuction(
        amountToSell: BigNumberish,
        initialBid: BigNumberish
    ): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"initialBid","type":"uint256"}],"name":"startAuction","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [amountToSell, initialBid])
    }

    totalAuctionLength(): Promise<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalAuctionLength","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }
}
