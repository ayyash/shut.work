
const config = require('./config.json');
// setup config

// or bring them all in
const gulpBin = require('sekrab-gulpbin')(config);

// expose them all
Object.keys(gulpBin).forEach(i => {
    Object.keys(gulpBin[i]).forEach( x =>  {
        exports[x] = gulpBin[i][x];

    });
});