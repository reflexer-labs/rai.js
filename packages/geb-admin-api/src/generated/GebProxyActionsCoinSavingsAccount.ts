/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'

export class GebProxyActionsCoinSavingsAccount extends BaseContractAPI {
    coinJoin_join(
        apt: string,
        safeHandler: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"apt","type":"address"},{"internalType":"address","name":"safeHandler","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"coinJoin_join","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [apt, safeHandler, wad])
    }

    deposit(
        coinJoin: string,
        coinSavingsAccount: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"coinSavingsAccount","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            coinJoin,
            coinSavingsAccount,
            wad,
        ])
    }

    withdraw(
        coinJoin: string,
        coinSavingsAccount: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"coinSavingsAccount","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            coinJoin,
            coinSavingsAccount,
            wad,
        ])
    }

    withdrawAll(
        coinJoin: string,
        coinSavingsAccount: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"coinSavingsAccount","type":"address"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [coinJoin, coinSavingsAccount])
    }
}
