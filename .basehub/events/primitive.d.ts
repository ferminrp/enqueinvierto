// This file was generated by basehub. Do not edit directly. Read more: https://basehub.com/docs/api-reference/basehub-sdk

/* eslint-disable */
/* eslint-disable eslint-comments/no-restricted-disable */
/* tslint:disable */
// @ts-nocheck

import type { Scalars } from "../schema";
import type { Field } from "../react/form/primitive";
type KeysStartingWith<Obj, Prefix extends string> = {
    [K in keyof Obj]: K extends `${Prefix}${string}` ? K : never;
}[keyof Obj];
type ExtractEventKey<T extends string> = T extends `${infer Base}:${string}` ? Base : T;
export type EventKeys = KeysStartingWith<Scalars, "bshb_event">;
export type EventSchema<Key extends `${EventKeys}:${string}`> = EventSchemaMap[ExtractEventKey<Key>];
type EventSchemaMap = {
    [K in EventKeys]: Scalars[`schema_${K}`];
};
type NullableEventSchemaMap = {
    [K in EventKeys]: Scalars[`schema_${K}`] | null;
};
export type EventArgs<Key extends string> = EventSchemaMap[ExtractEventKey<Key>] extends never ? [Key] : [Key, EventSchemaMap[ExtractEventKey<Key>]];
export declare const sendEvent: <Key extends `${EventKeys}:${string}`>(...args: EventArgs<Key>) => Promise<{
    success: true;
    eventId: string;
} | {
    success: false;
    error: string;
}>;
type UnionToIntersection<U> = (NonNullable<U> extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type MapScalarTypeToFilters<T extends Record<string, any>> = Partial<{
    [K in keyof T]: NonNullable<T[K]> extends UnionToIntersection<T[K]> ? NonNullable<T[K]> extends string ? {
        eq: string;
    } | {
        notEq: string;
    } | {
        regex: string;
    } | {
        contains: string;
    } | {
        exists: boolean;
    } | {
        startsWith: string;
    } | {
        endsWith: string;
    } : NonNullable<T[K]> extends number ? {
        gt: number;
        lt?: number;
    } | {
        lt: number;
        gt?: number;
    } | {
        eq: number;
    } | {
        exists: boolean;
    } : NonNullable<T[K]> extends boolean ? {
        exists: boolean;
    } | {
        eq: boolean;
    } : NonNullable<T[K]> extends Array<string> ? {
        includes: NonNullable<T[K]>[number];
    } | {
        exists: boolean;
    } : {
        eq: NonNullable<T[K]>;
    } | {
        notEq: NonNullable<T[K]>;
    } | {
        exists: boolean;
    } : {
        eq: NonNullable<T[K]>;
    } | {
        notEq: NonNullable<T[K]>;
    } | {
        exists: boolean;
    };
}>;
type MapScalarTypeToOrder<T extends Record<string, any>> = {
    [K in keyof T & string]: `${K}__ASC` | `${K}__DESC`;
}[keyof T & string];
type GetOptions<K extends string, Select extends Partial<Record<keyof Scalars[`schema_${K}`], boolean>> | undefined = undefined> = {
    type: "table";
    first?: number;
    skip?: number;
    filter?: MapScalarTypeToFilters<Scalars[`schema_${K}`]>;
    orderBy?: MapScalarTypeToOrder<Scalars[`schema_${K}`]>;
    select?: Select;
} | {
    type: "time-series";
    range?: "day" | "week" | "month" | "year" | "all-time";
};
type TableResponse<K extends string, T extends Record<keyof Scalars[`schema_${K}`], unknown>, Select extends Partial<Record<keyof Scalars[`schema_${K}`], boolean>>> = {
    success: true;
    data: Array<{
        date: string;
        id: string;
    } & Pick<T, keyof Select>>;
} | {
    success: false;
    error: string;
};
type TimeSeriesResponse = {
    success: true;
    data: number;
} | {
    success: false;
    error: string;
};
export declare function getEvents<Key extends `${EventKeys}:${string}`, Select extends Partial<Record<keyof Scalars[`schema_${ExtractEventKey<Key>}`], boolean>>>(key: Key, options: Extract<GetOptions<ExtractEventKey<Key>, Select>, {
    type: "table";
}>): Promise<TableResponse<Key, EventSchemaMap[ExtractEventKey<Key>], Select>>;
export declare function getEvents<Key extends `${EventKeys}:${string}`>(key: Key, options: Extract<GetOptions<ExtractEventKey<Key>>, {
    type: "time-series";
}>): Promise<TimeSeriesResponse>;
export declare function updateEvent<Key extends `${EventKeys}:${string}`>(key: Key, id: string, data: Partial<NullableEventSchemaMap[ExtractEventKey<Key>]>): Promise<{
    success: true;
    eventId: string;
} | {
    success: false;
    error: string;
}>;
export declare function deleteEvent<Key extends `${EventKeys}:${string}`>(key: Key, ids: [string, ...string[]]): Promise<{
    success: true;
} | {
    success: false;
    error: string;
}>;
type SafeReturn<T> = {
    success: true;
    data: T;
} | {
    success: false;
    errors: Record<string, string>;
};
export declare function parseFormData<Key extends `${EventKeys}:${string}`, Schema extends Field[]>(key: Key, schema: Schema, formData: FormData): SafeReturn<EventSchemaMap[ExtractEventKey<Key>]>;
export {};
