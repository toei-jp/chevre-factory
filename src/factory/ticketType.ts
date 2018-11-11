import { IBoxOfficeType } from './boxOfficeType';
import ItemAvailability from './itemAvailability';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { IQuantitativeValue } from './quantitativeValue';
import { UnitCode } from './unitCode';

/**
 * 勘定インターフェース
 */
export interface IAccounting {
    typeOf: 'Accounting';
    /**
     * 細目
     */
    operatingRevenue: string;
    /**
     * 興行外細目
     */
    nonOperatingRevenue?: string;
    /**
     * 売掛金
     */
    accountsReceivable: number;
}

/**
 * 券種属性インターフェース
 */
export interface ITicketTypeAttributes extends IOffer {
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    description: IMultilingualString;
    price: number;
    /**
     * 在庫状況(オンラインor店頭のコントロールが可能)
     */
    availability: ItemAvailability;
    /**
     * 適用量(価格単位や量制限のコントロールが可能)
     */
    eligibleQuantity: IQuantitativeValue<UnitCode.C62>;
    /**
     * 有効なムビチケ券種区分
     * この値が存在すれば、値の券種区分のムビチケが必須
     */
    eligibleMovieTicketType?: string;
    /**
     * 券種の種別
     */
    typeOfNote: number;
    nameForManagementSite: string;
    nameForPrinting: string;
    indicatorColor: string;
    /**
     * 勘定内容
     */
    accounting: IAccounting;
}

/**
 * 券種インターフェース
 */
export type ITicketType = ITicketTypeAttributes & {
    id: string;
};

/**
 * 検索条件インターフェース
 */
export interface ITicketTypeSearchConditions {
    limit?: number;
    page?: number;
    id?: string | string[];
    name?: string;
    price?: number;
    idHasChoose?: string;
}

export interface ITicketTypeGroupAttributes {
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    description: IMultilingualString;
    ticketTypes: string[];
    /**
     * 興行区分
     */
    boxOfficeType: IBoxOfficeType;
}

/**
 * 券種グループインターフェース
 */
export type ITicketTypeGroup = ITicketTypeGroupAttributes & {
    id: string;
};

/**
 * 検索条件インターフェース
 */
export interface ITicketTypeGroupSearchConditions {
    limit?: number;
    page?: number;
    id?: string;
    name?: string;
}
