import IMultilingualString from './multilingualString';

export interface IEntertainmentTypeAttributes {
    name: IMultilingualString;
}
/**
 * 興行区分インターフェース
 */
export type IEntertainmentType = IEntertainmentTypeAttributes & {
    id: string;
};
