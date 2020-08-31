/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BytesLike } from '@ethersproject/bytes'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { BaseContractAPI } from '@reflexer-finance/geb-provider'

export class FixedDiscountCollateralAuctionHouse<
    TX_OBJ
> extends BaseContractAPI<TX_OBJ> {
    AUCTION_HOUSE_TYPE(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_HOUSE_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    AUCTION_TYPE(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Add auth to an account
     * @param account Account to add auth to
     */
    addAuthorization(account: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [account])
    }

    amountToRaise(id: BigNumberish): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"amountToRaise","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [id])
    }

    auctionsStarted(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionsStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    authorizedAccounts(arg0: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    bidAmount(id: BigNumberish): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"bidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [id])
    }

    bids(
        arg0: BigNumberish
    ): Promise<{
        raisedAmount: BigNumber
        soldAmount: BigNumber
        amountToSell: BigNumber
        amountToRaise: BigNumber
        auctionDeadline: number
        forgoneCollateralReceiver: string
        auctionIncomeRecipient: string
    }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"raisedAmount","type":"uint256"},{"internalType":"uint256","name":"soldAmount","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"},{"internalType":"uint48","name":"auctionDeadline","type":"uint48"},{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    /**
     * Buy collateral from an auction at a fixed discount
     * @param id ID of the auction to buy collateral from
     * @param wad New bid submitted
     */
    buyCollateral(id: BigNumberish, wad: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"buyCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [id, wad])
    }

    collateralMedian(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralMedian","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    collateralOSM(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralOSM","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    collateralType(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    discount(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"discount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    forgoneCollateralReceiver(id: BigNumberish): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"forgoneCollateralReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [id])
    }

    /**
     * Calculate how much collateral someone would buy from an auction
     * @param id ID of the auction to buy collateral from
     * @param wad New bid submitted
     */
    getCollateralBought(id: BigNumberish, wad: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"getCollateralBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [id, wad])
    }

    getDiscountedCollateralPrice(
        collateralOSMPriceFeedValue: BigNumberish,
        collateralMedianPriceFeedValue: BigNumberish,
        systemCoinPriceFeedValue: BigNumberish,
        customDiscount: BigNumberish
    ): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"collateralOSMPriceFeedValue","type":"uint256"},{"internalType":"uint256","name":"collateralMedianPriceFeedValue","type":"uint256"},{"internalType":"uint256","name":"systemCoinPriceFeedValue","type":"uint256"},{"internalType":"uint256","name":"customDiscount","type":"uint256"}],"name":"getDiscountedCollateralPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [
            collateralOSMPriceFeedValue,
            collateralMedianPriceFeedValue,
            systemCoinPriceFeedValue,
            customDiscount,
        ])
    }

    liquidationEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"liquidationEngine","outputs":[{"internalType":"contract LiquidationEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    lowerCollateralMedianDeviation(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lowerCollateralMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    lowerSystemCoinMedianDeviation(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lowerSystemCoinMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    minSystemCoinMedianDeviation(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"minSystemCoinMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    minimumBid(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"minimumBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Modify oracle related integrations
     * @param data New address for the oracle contract
     * @param parameter The name of the contract address being updated
     */
    modifyParameters(parameter: BytesLike, data: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [parameter, data])
    }

    oracleRelayer(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"oracleRelayer","outputs":[{"internalType":"contract OracleRelayerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    remainingAmountToSell(id: BigNumberish): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"remainingAmountToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [id])
    }

    /**
     * Remove auth from an account
     * @param account Account to remove auth from
     */
    removeAuthorization(account: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [account])
    }

    safeEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Settle/finish an auction
     * @param id ID of the auction to settle
     */
    settleAuction(id: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [id])
    }

    /**
     * Start a new collateral auction
     * @param amountToRaise Total amount of coins to raise (rad)
     * @param amountToSell Total amount of collateral available to sell (wad)
     * @param auctionIncomeRecipient Who receives the amount raised in the auction
     * @param forgoneCollateralReceiver Who receives leftover collateral that is not auctioned
     * @param initialBid Unused
     */
    startAuction(
        forgoneCollateralReceiver: string,
        auctionIncomeRecipient: string,
        amountToRaise: BigNumberish,
        amountToSell: BigNumberish,
        initialBid: BigNumberish
    ): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"initialBid","type":"uint256"}],"name":"startAuction","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [
            forgoneCollateralReceiver,
            auctionIncomeRecipient,
            amountToRaise,
            amountToSell,
            initialBid,
        ])
    }

    systemCoinOracle(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"systemCoinOracle","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Terminate an auction prematurely. Usually called by Global Settlement.
     * @param id ID of the auction to settle
     */
    terminateAuctionPrematurely(id: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"terminateAuctionPrematurely","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [id])
    }

    totalAuctionLength(): Promise<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalAuctionLength","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    upperCollateralMedianDeviation(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"upperCollateralMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    upperSystemCoinMedianDeviation(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"upperSystemCoinMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }
}