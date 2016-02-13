'use strict';

let microAjax = require('./microajax.minified');

microAjax("https://api.github.com/repositories", function (res) {
    console.log(res);
});