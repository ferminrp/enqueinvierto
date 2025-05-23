// This file was generated by basehub. Do not edit directly. Read more: https://basehub.com/docs/api-reference/basehub-sdk

/* eslint-disable */
/* eslint-disable eslint-comments/no-restricted-disable */
/* tslint:disable */
// @ts-nocheck

import * as React from "react";
import type { JSX } from "react";
import { basehub, type QueryGenqlSelection as PumpQuery, type QueryResult } from "../index";
export { PumpQuery };
export type PumpProps<Queries extends Array<PumpQuery>, Bind extends unknown | undefined = undefined> = {
    children: Bind extends undefined ? (data: QueryResults<Queries>) => React.ReactNode | Promise<React.ReactNode> : (boundProps: Bind, data: QueryResults<Queries>) => React.ReactNode | Promise<React.ReactNode>;
    queries: [...Queries];
    bind?: Bind;
} & Parameters<typeof basehub>[0];
export type QueryResults<Queries extends Array<PumpQuery>> = {
    [K in keyof Queries]: QueryResult<Queries[K]>;
};
export declare const Pump: <Queries extends Array<PumpQuery>, Bind extends unknown | undefined = undefined>({ children, queries, bind, ...basehubProps }: PumpProps<Queries, Bind>) => Promise<JSX.Element>;
/**
 * Create a Pump with a bound query. Accepts either a query object or a function that returns a query object.
 * Useful for reusing the same query across multiple components.
 */
export declare const createPump: <Query extends PumpQuery[], Params extends Record<string, unknown> | void, Bind extends unknown = undefined>(queries: Query | ((params: Params) => Query)) => (props: Omit<PumpProps<Query, Bind>, "queries"> & (Params extends void ? unknown : {
    params: Params;
})) => JSX.Element;
