const webpack = require('webpack');
const config = require('../webpack.config');

const ENV = Object.freeze({ PRODUCTION: 'production' });

const compiler = webpack(config(ENV.PRODUCTION));
compiler.run((error, stats) => {
    
    if (error) {
        console.error(error)
    }

    if(stats.hasErrors()) {
        console.error(stats.toString())
    }   
    
    if(stats.hasWarnings()) {
        console.warn(stats.toString())
    }
})