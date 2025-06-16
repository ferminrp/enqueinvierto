globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_CzNCO9R-.mjs';
import './chunks/astro/server_T4Zx1oY7.mjs';
import { s as sequence } from './chunks/index_O-lCq7LV.mjs';

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
