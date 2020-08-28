/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BytesLike } from '@ethersproject/bytes'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { BaseContractAPI } from '@reflexer-finance/geb-provider'

export class SafeEngine<TX_OBJ> extends BaseContractAPI<TX_OBJ> {
    addAuthorization(account: string): TX_OBJ {
        return this.chainProvider.ethSend('addAuthorization', {
            account,
        })
    }

    approveSAFEModification(account: string): TX_OBJ {
        return this.chainProvider.ethSend('approveSAFEModification', {
            account,
        })
    }

    authorizedAccounts(arg0: string): Promise<BigNumber> {
        return this.chainProvider.ethCall('authorizedAccounts', {
            arg0,
        })
    }

    canModifySAFE(safe: string, account: string): Promise<boolean> {
        return this.chainProvider.ethCall('canModifySAFE', {
            safe,
            account,
        })
    }

    coinBalance(arg0: string): Promise<BigNumber> {
        return this.chainProvider.ethCall('coinBalance', {
            arg0,
        })
    }

    collateralTypes(
        arg0: BytesLike
    ): Promise<{
        debtAmount: BigNumber
        accumulatedRate: BigNumber
        safetyPrice: BigNumber
        debtCeiling: BigNumber
        debtFloor: BigNumber
        liquidationPrice: BigNumber
    }> {
        return this.chainProvider.ethCall('collateralTypes', {
            arg0,
        })
    }

    confiscateSAFECollateralAndDebt(
        collateralType: BytesLike,
        safe: string,
        collateralCounterparty: string,
        debtCounterparty: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('confiscateSAFECollateralAndDebt', {
            collateralType,
            safe,
            collateralCounterparty,
            debtCounterparty,
            deltaCollateral,
            deltaDebt,
        })
    }

    contractEnabled(): Promise<BigNumber> {
        return this.chainProvider.ethCall('contractEnabled', {})
    }

    createUnbackedDebt(
        debtDestination: string,
        coinDestination: string,
        rad: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('createUnbackedDebt', {
            debtDestination,
            coinDestination,
            rad,
        })
    }

    debtBalance(arg0: string): Promise<BigNumber> {
        return this.chainProvider.ethCall('debtBalance', {
            arg0,
        })
    }

    denySAFEModification(account: string): TX_OBJ {
        return this.chainProvider.ethSend('denySAFEModification', {
            account,
        })
    }

    disableContract(): TX_OBJ {
        return this.chainProvider.ethSend('disableContract', {})
    }

    globalDebt(): Promise<BigNumber> {
        return this.chainProvider.ethCall('globalDebt', {})
    }

    globalDebtCeiling(): Promise<BigNumber> {
        return this.chainProvider.ethCall('globalDebtCeiling', {})
    }

    globalUnbackedDebt(): Promise<BigNumber> {
        return this.chainProvider.ethCall('globalUnbackedDebt', {})
    }

    initializeCollateralType(collateralType: BytesLike): TX_OBJ {
        return this.chainProvider.ethSend('initializeCollateralType', {
            collateralType,
        })
    }

    modifyCollateralBalance(
        collateralType: BytesLike,
        account: string,
        wad: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('modifyCollateralBalance', {
            collateralType,
            account,
            wad,
        })
    }

    modifyParameters(
        collateralType: BytesLike,
        parameter: BytesLike,
        data: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('modifyParameters', {
            collateralType,
            parameter,
            data,
        })
    }

    modifySAFECollateralization(
        collateralType: BytesLike,
        safe: string,
        collateralSource: string,
        debtDestination: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('modifySAFECollateralization', {
            collateralType,
            safe,
            collateralSource,
            debtDestination,
            deltaCollateral,
            deltaDebt,
        })
    }

    removeAuthorization(account: string): TX_OBJ {
        return this.chainProvider.ethSend('removeAuthorization', {
            account,
        })
    }

    safeRights(arg0: string, arg1: string): Promise<BigNumber> {
        return this.chainProvider.ethCall('safeRights', {
            arg0,
            arg1,
        })
    }

    safes(
        arg0: BytesLike,
        arg1: string
    ): Promise<{
        lockedCollateral: BigNumber
        generatedDebt: BigNumber
    }> {
        return this.chainProvider.ethCall('safes', {
            arg0,
            arg1,
        })
    }

    settleDebt(rad: BigNumberish): TX_OBJ {
        return this.chainProvider.ethSend('settleDebt', {
            rad,
        })
    }

    tokenCollateral(arg0: BytesLike, arg1: string): Promise<BigNumber> {
        return this.chainProvider.ethCall('tokenCollateral', {
            arg0,
            arg1,
        })
    }

    transferCollateral(
        collateralType: BytesLike,
        src: string,
        dst: string,
        wad: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('transferCollateral', {
            collateralType,
            src,
            dst,
            wad,
        })
    }

    transferInternalCoins(src: string, dst: string, rad: BigNumberish): TX_OBJ {
        return this.chainProvider.ethSend('transferInternalCoins', {
            src,
            dst,
            rad,
        })
    }

    transferSAFECollateralAndDebt(
        collateralType: BytesLike,
        src: string,
        dst: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('transferSAFECollateralAndDebt', {
            collateralType,
            src,
            dst,
            deltaCollateral,
            deltaDebt,
        })
    }

    updateAccumulatedRate(
        collateralType: BytesLike,
        surplusDst: string,
        rateMultiplier: BigNumberish
    ): TX_OBJ {
        return this.chainProvider.ethSend('updateAccumulatedRate', {
            collateralType,
            surplusDst,
            rateMultiplier,
        })
    }
}
