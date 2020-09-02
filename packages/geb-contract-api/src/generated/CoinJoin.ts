/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-provider'
import { TransactionRequest } from '@reflexer-finance/geb-provider'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class CoinJoin extends BaseContractAPI {
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

    authorizedAccounts(address: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [address])
    }

    contractEnabled(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"contractEnabled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    decimals(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    /**
     * Disable this contract
     */
    disableContract(): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [])
    }

    /**
     * Inside the system, coins have 45 (rad) decimals but outside they have 18 decimals (wad). When we exit, we specify a wad amount of coins and then the contract automatically multiplies wad by 10**27 to move the correct 45 decimal coin amount to this adapter
     * Exit reflex-bonds/pegged-coins from the system and inside 'Coin.sol'
     * @param account Account that will receive the exited coins
     * @param wad Amount of internal coins to join (18 decimal number that will be multiplied by ray)*
     */
    exit(account: string, wad: BigNumberish): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [account, wad])
    }

    /**
     * Exited coins have 18 decimals but inside the system they have 45 (rad) decimals. When we join, the amount (wad) is multiplied by 10**27 (ray)
     * Join reflex-bonds/pegged-coins in the system
     * @param account Account that will receive the joined coins
     * @param wad Amount of external coins to join (18 decimal number)*
     */
    join(account: string, wad: BigNumberish): Promise<TransactionRequest> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"join","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.ethSend(abi, [account, wad])
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

    safeEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }

    systemCoin(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"systemCoin","outputs":[{"internalType":"contract DSTokenLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCall(abi, [])
    }
}
