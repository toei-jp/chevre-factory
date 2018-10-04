import * as CreativeWorkFactory from '../creativeWork';
import { IDistributions } from '../distributions/distribute';
import SortType from '../sortType';

/**
 * 映画作品インターフェース
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    identifier: string;
    name: string;
    /**
     * 上映時間
     */
    duration: string;
    /**
     * 映倫区分(PG12,R15,R18)
     */
    contentRating: string;
	datePublished?: Date;
	subtitle?: string;
    scheduleEndDate?: Date;
    /**
     * 配給
     */
    distribution: IDistributions;
}
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    identifier?: SortType;
    name?: SortType;
}
/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    identifier?: string;
    name?: string;
    datePublishedFrom?: Date;
    datePublishedTo?: Date;
}
