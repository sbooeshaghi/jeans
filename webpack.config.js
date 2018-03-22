const path = require('path');

// Based on template from:
// https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
module.exports = {
    entry : './src/index.js',
    output : { 
        path : path.resolve(__dirname, 'public/js'), 
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                loader : 'babel-loader',
                exclude : path.resolve(__dirname, 'node_modules'),
                options : {
                    presets : ['env', 'react']
                }
            },
        ]
    }
};