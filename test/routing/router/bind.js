var _ = require('lodash'),
    Router = require('../../../lib/router/index.js'),
    assert = require('assert');


describe('Router', function() {
 
  var r0;

  before(function(cb) {
    // Mock up a Sails global
    sails = {
      express: {
        app: {
          routes: {
            get: [],
            post: [],
            put: [],
            head: [],
            'delete': [],
            options: [],
            trace: [],
            copy: [],
            lock: [],
            mkcol: [],
            move: [],
            propfind: [],
            proppatch: [],
            unlock: [],
            report: [],
            mkactivity: [],
            checkout: [],
            merge: [],
            'm-search': [],
            notify: [],
            subscribe: [],
            unsubscribe: [],
            patch: []
          }
        }
      }
    };

    // Create an instance of the router
    r0 = new Router();
    cb();
  });

  describe('.bind()', function() {

    before(function (cb) {
      r0.bind('/foo', [function (req,res) {}], 'get');
      r0.bind('/bar', [function (req,res) {}], 'post');
      cb();
    });

    it('should create a new route', function() {
      assert(sails.express.app.routes.get.length === 1);
      assert(sails.express.app.routes.get[0].path === '/foo');
    });

    it('should leave other routes alone', function () {
      assert(sails.express.app.routes.post.length === 1);
      assert(sails.express.app.routes.post[0].path === '/bar');
    });

  });
});