import * as DistributionsFactory from '../distributions';

/**
 * 配給インターフェース
 */
export interface IDistributions extends DistributionsFactory.IDistributions {
    id: string;
    name: string;
}
