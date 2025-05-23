globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_B6iqf75q.mjs';
import './chunks/astro/server_BYckSFmU.mjs';
import { s as sequence } from './chunks/index_CzziVU8t.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
