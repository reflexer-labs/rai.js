/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'

export class DsCompare extends BaseContractAPI {
    ge1(x: BigNumberish, y: BigNumberish): Promise<boolean>
    ge1(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    ge1(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"}],"name":"ge","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    ge2(x: BigNumberish, y: BigNumberish): Promise<boolean>
    ge2(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    ge2(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"}],"name":"ge","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    ge3(x: BigNumberish, y: BigNumberish): Promise<boolean>
    ge3(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    ge3(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"}],"name":"ge","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    gt1(x: BigNumberish, y: BigNumberish): Promise<boolean>
    gt1(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    gt1(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"gt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    gt2(x: BigNumberish, y: BigNumberish): Promise<boolean>
    gt2(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    gt2(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"gt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    gt3(x: BigNumberish, y: BigNumberish): Promise<boolean>
    gt3(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    gt3(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"gt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    le1(x: BigNumberish, y: BigNumberish): Promise<boolean>
    le1(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    le1(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"}],"name":"le","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    le2(x: BigNumberish, y: BigNumberish): Promise<boolean>
    le2(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    le2(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"}],"name":"le","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    le3(x: BigNumberish, y: BigNumberish): Promise<boolean>
    le3(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    le3(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"}],"name":"le","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    lt1(x: BigNumberish, y: BigNumberish): Promise<boolean>
    lt1(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    lt1(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"lt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    lt2(x: BigNumberish, y: BigNumberish): Promise<boolean>
    lt2(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    lt2(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"lt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    lt3(x: BigNumberish, y: BigNumberish): Promise<boolean>
    lt3(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    lt3(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"lt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }
}
