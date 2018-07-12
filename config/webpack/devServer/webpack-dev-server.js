module.exports = ({ host, port, open, stats }) => ({
    host,
    port,
    stats,
    open,
    inline: true,
    hot: true,
    historyApiFallback: true,
    overlay: {
        errors: true,
        warnings: true
    },
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    watchOptions: {
        poll: true,
        ignored: [ /node_modules/ ]
    }
});
