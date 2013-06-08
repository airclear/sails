/**
 * Module dependencies.
 */

var Route = require('./route');


/**
 * Expose `Router` constructor.
 */
module.exports = Router;

/**
 * Initialize a new `Router`
 *
 * @param {Object} options
 * @api private
 */

function Router ( options ) {

}


/**
 * Bind a new route
 *
 * @param {String|RegExp} path
 * @param {Array} middleware
 * @param {String} verb
 * @api private
 */

Router.prototype.bind = function (path, middleware, verb) {
	var route = new Route(verb, path, middleware, {});
	sails.express.app.routes[verb].push(route);
};


/**
 * Unbind all routes currently attached to the router
 *
 * @param {String} verb
 * @api private
 */
Router.prototype.reset = function ( verb ) {
	if (!verb) {

		// Reset the routes for each HTTP method
		return _.each(sails.express.app.routes, function (routes, method) {
			this.reset(method);
		}, this);
	}
	app.routes[verb] = [];
};