/**
 * Module dependencies.
 *
 * The Route object is an Express 3.2.6 private API method;
 * so our Express version is locked down to this patch release to be safe.
 *
 * See:
 * https://github.com/visionmedia/express/blob/master/lib/utils.js#L293
 * https://github.com/visionmedia/express/blob/master/lib/router/route.js#L30
 */

var Route = require('../../node_modules/express/lib/router/route.js');

/**
 * Expose `Route` constructor.
 */
module.exports = Route;
