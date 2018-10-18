import { IBoxOfficeType } from './boxOfficeType';
import IMultilingualString from './multilingualString';

export interface ITicketTypeAttributes {
    name: IMultilingualString;
    description: IMultilingualString;
    notes: IMultilingualString;
    price: number;
    onlineOnly: boolean;
    /**
     * 券種の種別
     */
    typeOfNote: number;
    boxOnly: boolean;
    nameForManagementSite: string;
    nameForPrinting: string;
    seatReservationUnit: number;
    /**
     * 細目
     */
    subject: string;
    /**
     * 興行外細目
     */
    nonBoxOfficeSubject?: string;
    indicatorColor: string;
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
    description: IMultilingualString;
    notes: IMultilingualString;
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
