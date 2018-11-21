import * as CreativeWorkFactory from '../creativeWork';
import { IDistributions } from '../distributions/distribute';
import * as OfferFactory from '../offer';
import SortType from '../sortType';

/**
 * 映画作品に対するオファーインターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface IOffer extends OfferFactory.IOffer {
}

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
     * 販売情報
     */
    offers?: IOffer;
    subtitle?: string;
    /**
     * 配給
     */
    distribution: IDistributions;
}

/**
 * 映倫区分作品インターフェース
 */
export interface ICreativeWorkRating extends CreativeWorkFactory.ICreativeWork {
    contentRating: string;
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
    datePublishedThrough?: Date;
    checkScheduleEndDate?: boolean;
}
