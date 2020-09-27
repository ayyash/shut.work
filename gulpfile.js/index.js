const assets = require('./assets');
const icons = require('./icons');


// exports.default = watch;

exports.rawless = assets.rawless; // create minisite src/css/bo.css 
exports.buildcss = assets.buildcss; // build minisite public/css/bo.min.css 
exports.default = assets.watch; // watch minisite to create src/css/bo.css

exports.iconset = icons.iconset;