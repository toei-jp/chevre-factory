import IMultilingualString from './multilingualString';
import PlaceType from './placeType';

/**
 * 場所インターフェース
 */
export interface IPlace {
    /**
     * スキーマタイプ
     */
    typeOf: PlaceType;
    id?: string;
    name?: IMultilingualString;
    description?: IMultilingualString;
    address?: IMultilingualString;
    branchCode?: string;
    containedInPlace?: IPlace;
    containsPlace?: IPlace[];
    maximumAttendeeCapacity?: number;
    openingHoursSpecification?: any;
    smokingAllowed?: boolean;
    telephone?: string;
    url?: string;
    /**
     * 販売開始日
     */
    saleStartDate?: number;
    /**
     * 上映後販売終了時間
     */
    endSaleTimeAfterScreening?: number;
    /**
     * 座席購入上限数
     */
    seatPurchaseLimit?: number;
}
