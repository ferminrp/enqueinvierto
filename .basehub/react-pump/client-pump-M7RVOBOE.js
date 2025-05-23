// This file was generated by basehub. Do not edit directly. Read more: https://basehub.com/docs/api-reference/basehub-sdk

/* eslint-disable */
/* eslint-disable eslint-comments/no-restricted-disable */
/* tslint:disable */

"use client";


import "./chunk-F5PHAOMO.js";

// node_modules/basehub/src/react/pump/client-pump.tsx
import * as React from "react";
import { replaceSystemAliases } from "../runtime/_aliasing.js";
var pusherMounted = false;
var subscribers = /* @__PURE__ */ new Set();
var clientCache = /* @__PURE__ */ new Map();
var lastResponseHashCache = /* @__PURE__ */ new Map();
var DEDUPE_TIME_MS = 32;
var ClientPump = ({
  children,
  rawQueries,
  pumpEndpoint,
  pumpToken: initialPumpToken,
  initialState,
  initialResolvedChildren,
  apiVersion,
  previewRef: _previewRef
}) => {
  const pumpTokenRef = React.useRef(initialPumpToken);
  const [result, setResult] = React.useState(
    initialState
  );
  const initialStateRef = React.useRef(initialState);
  initialStateRef.current = initialState;
  const [previewRef, setPreviewRef] = React.useState(_previewRef);
  const previewRefRef = React.useRef(previewRef);
  previewRefRef.current = previewRef;
  const refetch = React.useCallback(async () => {
    let newPumpToken;
    let pusherData = void 0;
    let spaceID = void 0;
    const responses = await Promise.all(
      rawQueries.map(async (rawQueryOp, index) => {
        if (!pumpTokenRef.current) {
          console.warn("No pump token found. Skipping query.");
          return null;
        }
        const queryHash = JSON.stringify(rawQueryOp);
        const responseHashCacheKey = queryHash;
        const queryCacheKey = queryHash + previewRef;
        const lastResponseHash = lastResponseHashCache.get(responseHashCacheKey) || initialStateRef.current?.responseHashes?.[index] || "";
        if (clientCache.has(queryCacheKey)) {
          const cached = clientCache.get(queryCacheKey);
          if (performance.now() - cached.start < DEDUPE_TIME_MS) {
            const response2 = await cached.response;
            if (!response2)
              return null;
            if (response2.newPumpToken) {
              newPumpToken = response2.newPumpToken;
            }
            pusherData = response2.pusherData;
            spaceID = response2.spaceID;
            return response2;
          }
        }
        const responsePromise = fetch(pumpEndpoint, {
          cache: "no-store",
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-basehub-api-version": apiVersion,
            "x-basehub-ref": previewRef
          },
          body: JSON.stringify({
            ...rawQueryOp,
            pumpToken: pumpTokenRef.current,
            lastResponseHash
          })
        }).then(async (response2) => {
          const {
            data = null,
            errors = null,
            newPumpToken: newPumpToken2,
            spaceID: spaceID2,
            pusherData: pusherData2,
            responseHash
          } = await response2.json();
          lastResponseHashCache.set(responseHashCacheKey, responseHash);
          return {
            data: replaceSystemAliases(data),
            spaceID: spaceID2,
            pusherData: pusherData2,
            newPumpToken: newPumpToken2,
            errors,
            responseHash,
            changed: lastResponseHash !== responseHash
          };
        }).catch((err) => {
          console.error(`Error fetching data from the BaseHub Draft API:
              
${JSON.stringify(err, null, 2)}
              
Contact support@basehub.com for help.`);
        });
        clientCache.set(queryCacheKey, {
          start: performance.now(),
          response: responsePromise
        });
        const response = await responsePromise;
        if (!response)
          return null;
        if (response.newPumpToken) {
          newPumpToken = response.newPumpToken;
        }
        pusherData = response.pusherData;
        spaceID = response.spaceID;
        return response;
      })
    );
    const shouldUpdate = responses.some((r) => r?.changed);
    if (shouldUpdate) {
      if (!pusherData || !spaceID)
        return;
      setResult((p) => {
        if (!pusherData || !spaceID)
          return p;
        return {
          data: responses.map((r, i) => {
            if (!r?.changed)
              return p?.data?.[i] ?? null;
            return r?.data ?? null;
          }),
          errors: responses.map((r, i) => {
            if (!r?.changed)
              return p?.errors?.[i] ?? null;
            return r?.errors ?? null;
          }),
          responseHashes: responses.map((r) => r?.responseHash ?? ""),
          pusherData,
          spaceID
        };
      });
    }
    if (newPumpToken) {
      pumpTokenRef.current = newPumpToken;
    }
  }, [pumpEndpoint, rawQueries, apiVersion, previewRef]);
  const currentToastRef = React.useRef(null);
  React.useEffect(() => {
    if (!result?.errors)
      return;
    const mainError = result.errors[0]?.[0];
    if (!mainError)
      return;
    console.error(
      `Error fetching data from the BaseHub Draft API: ${mainError.message}${mainError.path ? ` at ${mainError.path.join(".")}` : ""}`
    );
  }, [result?.errors]);
  React.useEffect(() => {
    function boundRefetch() {
      refetch();
    }
    boundRefetch();
    subscribers.add(boundRefetch);
    return () => {
      subscribers.delete(boundRefetch);
    };
  }, [refetch]);
  const [pusher, setPusher] = React.useState(null);
  const pusherChannelKey = result?.pusherData?.channel_key;
  const pusherAppKey = result?.pusherData.app_key;
  const pusherCluster = result?.pusherData.cluster;
  React.useEffect(() => {
    if (pusherMounted)
      return;
    if (!pusherAppKey || !pusherCluster)
      return;
    pusherMounted = true;
    import("./pusher-XS7RKMQB.js").then((mod) => {
      setPusher(new mod.default(pusherAppKey, { cluster: pusherCluster }));
    }).catch((err) => {
      console.log("error importing pusher");
      console.error(err);
    });
    return () => {
      pusherMounted = false;
    };
  }, [pusherAppKey, pusherCluster]);
  React.useEffect(() => {
    if (!pusherChannelKey)
      return;
    if (!pusher)
      return;
    const channel = pusher.subscribe(pusherChannelKey);
    channel.bind(
      "poke",
      (message) => {
        if (message?.mutatedEntryTypes?.includes("block") && message.branch === previewRefRef.current) {
          subscribers.forEach((sub) => sub());
        }
      }
    );
    return () => {
      channel.unsubscribe();
    };
  }, [pusher, pusherChannelKey]);
  React.useEffect(() => {
    function handleRefChange() {
      const previewRef2 = (
        // @ts-ignore
        window.__bshb_ref
      );
      if (!previewRef2 || typeof previewRef2 !== "string")
        return;
      setPreviewRef(previewRef2);
    }
    handleRefChange();
    window.addEventListener("__bshb_ref_changed", handleRefChange);
    return () => {
      window.removeEventListener("__bshb_ref_changed", handleRefChange);
    };
  }, []);
  const resolvedData = React.useMemo(() => {
    return result?.data.map((r, i) => r ?? initialState?.data?.[i] ?? null);
  }, [initialState?.data, result?.data]);
  const [resolvedChildren, setResolvedChildren] = React.useState(
    typeof children === "function" ? (
      // if function, we'll resolve in React.useEffect below
      initialResolvedChildren
    ) : children
  );
  React.useEffect(() => {
    if (!resolvedData)
      return;
    if (typeof children === "function") {
      const res = children(resolvedData);
      if (res instanceof Promise) {
        res.then(setResolvedChildren);
      } else {
        setResolvedChildren(res);
      }
    } else {
      setResolvedChildren(children);
    }
  }, [children, resolvedData]);
  return resolvedChildren ?? initialResolvedChildren;
};
export {
  ClientPump
};
