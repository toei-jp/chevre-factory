import * as EventFactory from '../event';
import EventType from '../eventType';
import * as ReservationFactory from '../reservation';
import ReservationStatusType from '../reservationStatusType';
import SortType from '../sortType';

export type IReservationFor = EventFactory.IEvent<EventFactory.IAttributes<EventType>>;
/**
 * イベント予約インターフェース
 * どんなタイプのイベントに対する予約か
 */
export interface IReservation<T extends IReservationFor> extends ReservationFactory.IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    modifiedTime?: SortType;
    bookingTime?: SortType;
    reservationNumber?: SortType;
    price?: SortType;
}

export interface IReservationForSearchConditions {
    typeOf?: EventType;
    id?: string;
    ids?: string[];
    superEvent?: {
        id?: string;
        ids?: string[];
    };
    startFrom?: Date;
    startThrough?: Date;
}

/**
 * 検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 予約IDリスト
     */
    ids?: string[];
    /**
     * 予約ステータスリスト
     */
    reservationStatuses?: ReservationStatusType[];
    /**
     * 予約対象
     */
    reservationFor?: IReservationForSearchConditions;
    /**
     * 更新日時
     */
    modifiedFrom?: Date;
    /**
     * 更新日時
     */
    modifiedThrough?: Date;
}
