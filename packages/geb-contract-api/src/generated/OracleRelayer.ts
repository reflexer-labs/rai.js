/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BytesLike } from '@ethersproject/bytes'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { BaseContractAPI } from '@reflexer-finance/geb-provider'

export class OracleRelayer<TX_OBJ> extends BaseContractAPI<TX_OBJ> {
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

    authorizedAccounts(arg0: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    collateralTypes(
        arg0: BytesLike
    ): Promise<{
        orcl: string
        safetyCRatio: BigNumber
        liquidationCRatio: BigNumber
    }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralTypes","outputs":[{"internalType":"contract OracleLike","name":"orcl","type":"address"},{"internalType":"uint256","name":"safetyCRatio","type":"uint256"},{"internalType":"uint256","name":"liquidationCRatio","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    contractEnabled(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"contractEnabled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Disable this contract (normally called by GlobalSettlement)
     */
    disableContract(): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [])
    }

    /**
     * Fetch the liquidation CRatio of a specific collateral type
     * @param collateralType The collateral price we want the liquidation CRatio for
     */
    liquidationCRatio(collateralType: BytesLike): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"liquidationCRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [collateralType])
    }

    /**
     * Modify oracle price feed addresses
     * @param addr New oracle address
     * @param collateralType Collateral who's oracle we change
     * @param parameter Name of the parameter
     */
    modifyParameters(
        collateralType: BytesLike,
        parameter: BytesLike,
        addr: string
    ): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [
            collateralType,
            parameter,
            addr,
        ])
    }

    /**
     * Fetch the oracle price feed of a specific collateral type
     * @param collateralType The collateral price we want the oracle price feed for
     */
    orcl(collateralType: BytesLike): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"orcl","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [collateralType])
    }

    /**
     * Fetch the latest redemption price by first updating it
     */
    redemptionPrice(): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"redemptionPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [])
    }

    redemptionPriceUpdateTime(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"redemptionPriceUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    redemptionRate(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"redemptionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
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
     * Fetch the safety CRatio of a specific collateral type
     * @param collateralType The collateral price we want the safety CRatio for
     */
    safetyCRatio(collateralType: BytesLike): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"safetyCRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [collateralType])
    }

    /**
     * Update the collateral price inside the system (inside SAFEEngine)
     * @param collateralType The collateral we want to update prices (safety and liquidation prices) for
     */
    updateCollateralPrice(collateralType: BytesLike): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"updateCollateralPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [collateralType])
    }
}