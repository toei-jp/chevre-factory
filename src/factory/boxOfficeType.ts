import IMultilingualString from './multilingualString';

export interface IBoxOfficeTypeAttributes {
    name: IMultilingualString;
}
/**
 * 興行区分インターフェース
 */
export type IBoxOfficeType = IBoxOfficeTypeAttributes & {
    id: string;
};
