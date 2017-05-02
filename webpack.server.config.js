var fs = require('fs');


// Making a list of node_modules ot exclude from webpack transforms
// Excluding all binaries and transforming rest
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
})
    .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});




module.exports = {
    entry       : './server_app/App.js',
    target      : "node",
    externals   : nodeModules,
    output: {
        path        : __dirname + "/server",
        filename    : "server.js"
    },
    module: {
        loaders:
        [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                loader  : 'babel-loader',
                query   : {
                    presets  : ["es2015"]
                }
            },
            {
                test    : /\.json$/,
                loader  : 'json'
            }
        ]
    },
    // important so webpack does not stub these values and
    // they could be used in code, otherwise they will be "/"
    // and "/filename"
    node: {
        __dirname   : false,
        __filename  : false
    }
};
