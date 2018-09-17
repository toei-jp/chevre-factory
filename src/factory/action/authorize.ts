import * as ActionFactory from '../action';
import ActionType from '../actionType';

/**
 * 承認対象インターフェース
 */
export type IObject = any;
/**
 * 承認結果インターフェース
 */
export type IResult = any;
/**
 * 承認目的インターフェース
 */
export type IPurpose = any;
/**
 * アクション属性インターフェース
 */
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.AuthorizeAction, TObject, TResult> {
    purpose: IPurpose;
    recipient: ActionFactory.IParticipant;
}
/**
 * 承認アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
