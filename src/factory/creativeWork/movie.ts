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
 * @see https://schema.org/Movie
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    identifier: string;
    name: string;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.
     */
    duration?: string | null;
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
 * ソート条件インターフェース
 */
export interface ISortOrder {
    identifier?: SortType;
    name?: SortType;
}

export interface IOfferSearchConditions {
    availableFrom?: Date;
    availableThrough?: Date;
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
    offers: IOfferSearchConditions;
}
