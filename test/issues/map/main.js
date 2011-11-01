
seajs.config({
  base: './libs',
  map: [
      [/(\/\w\.js)/, '/_xx$1']
  ]
});


define(function(require) {

  var test = require('../../test');

  var a = require('./a');
  var b = require('b');
  var c = require('./c');

  test.assert(a && a.name === 'a', 'relative id in sub/a.js');
  test.assert(b && b.name === 'b', 'toplevel id in sub/b.js');
  test.assert(c && b.name === 'c', 'no id in sub/c.js');

  test.done();

});
