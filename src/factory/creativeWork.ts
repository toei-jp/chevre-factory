import CreativeWorkType from './creativeWorkType';

export interface ICopyrightHolder {
    name: string;
}
/**
 * 作品インターフェース
 */
export interface ICreativeWork {
    identifier: string;
    name: string;
    description?: string;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    license?: string;
    thumbnailUrl?: string;
    typeOf: CreativeWorkType;
    subtitle?: string;
    scheduleEndDate?: Date;
    /**
     * 配給
     * 0 = 自社
     * 1 = 他社
     */
    distribution: number;
}
