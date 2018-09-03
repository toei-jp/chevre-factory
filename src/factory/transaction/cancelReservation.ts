import { IAttributes as ICancelReservationActionAttributes } from '../action/cancel/reservation';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import * as TransactionFactory from '../transaction';
import { ITransaction as IReserveTransaction } from '../transaction/reserve';
import TransactionType from '../transactionType';

export type IStartParamsWithoutDetail =
    TransactionFactory.IStartParams<TransactionType.CancelReservation, IAgent, undefined, IObjectWithoutDetail>;
/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.CancelReservation, IAgent, undefined, IObject>;
export interface IAgent {
    typeOf: string;
    id?: string;
    name: string;
    url?: string;
}
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
/**
 * エラーインターフェース
 */
export type IError = any;
export interface IObjectWithoutDetail {
    clientUser?: IClientUser;
    transaction: {
        typeOf: TransactionType;
        id: string;
    };
}
/**
 * 取引対象物インターフェース
 */
export interface IObject {
    clientUser?: IClientUser;
    transaction: IReserveTransaction;
}
export interface IPotentialActions {
    cancelReservation: ICancelReservationActionAttributes[];
}
export type ITransaction = IExtendId<IAttributes>;
/**
 * 取引属性インターフェース
 */
export interface IAttributes
    extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
