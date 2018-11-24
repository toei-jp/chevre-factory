/**
 * factory
 */
import * as AggregationFactory from './factory/aggregation';
import * as BoxOfficeTypeFactory from './factory/boxOfficeType';
import * as DistributionsFactory from './factory/distributions/distribute';
import * as SubjectFactory from './factory/subject';

export * from '@chevre/factory';

export import agregation = AggregationFactory;
export import boxOfficeType = BoxOfficeTypeFactory;
export namespace distributions {
    export import distribute = DistributionsFactory;
}
export import subject = SubjectFactory;
