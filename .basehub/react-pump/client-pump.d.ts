// This file was generated by basehub. Do not edit directly. Read more: https://basehub.com/docs/api-reference/basehub-sdk

/* eslint-disable */
/* eslint-disable eslint-comments/no-restricted-disable */
/* tslint:disable */
// @ts-nocheck

import * as React from "react";
import { PumpProps } from "./server-pump";
import { type QueryGenqlSelection as PumpQuery } from "./index";
import type { PumpState } from "./types";
export declare const ClientPump: <Queries extends PumpQuery[], Bind extends unknown | undefined = undefined>({ children, rawQueries, pumpEndpoint, pumpToken: initialPumpToken, initialState, initialResolvedChildren, apiVersion, previewRef: _previewRef, }: {
    children: PumpProps<Queries, Bind>["children"];
    rawQueries: Array<{
        query: string;
        variables?: any;
    }>;
    pumpEndpoint: string;
    pumpToken: string | undefined;
    initialState: PumpState | undefined;
    initialResolvedChildren?: React.ReactNode;
    apiVersion: string;
    previewRef: string;
}) => React.ReactNode;
