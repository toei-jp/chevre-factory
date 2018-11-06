import IMultilingualString from './multilingualString';
import PlaceType from './placeType';

/**
 * 場所インターフェース
 */
export interface IPlace {
    typeOf: PlaceType;
    id?: string;
    name?: IMultilingualString;
    alternateName?: IMultilingualString;
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
}
