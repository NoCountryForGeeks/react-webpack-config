const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const getPort = require('get-port');

const { networkReport } = require('../utils/network');

const webpackConfig = require('../webpack.config');
const { devServer } = require('../config/webpack');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const PROTOCOL = process.env.HTTPS === 'true'
    ? 'https'
    : 'http';

const ENV = Object.freeze({ DEVELOPMENT: 'development' });
const compiler = webpack(webpackConfig(ENV.DEVELOPMENT));

compiler.hooks.done.tap('done', () => {});

getPort({ port: PORT, host: HOST })
    .then(port => {
        const server = new WebpackDevServer(compiler, 
            devServer({
                host: HOST, 
                port: port, 
                open: false, 
                stats: 'errors-only'
            }));
        server.listen(port, HOST, () => networkReport({ PROTOCOL, HOST, PORT }));
});
