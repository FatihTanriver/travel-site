//in order to execute our  path.resolve action  we need node.js "path" package
// we  do not need npm install path. this is just part of the node library
const path = require('path')

// name can be anything
const postCSSPlugins = [require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer")]

// when Webpack loads this file , What should be exported and used
 module.exports = {                      
    entry: './app/assets/scripts/App.js', //File we want from Webpack watch and process and bundle
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')   //webpack requires absolute path therefore with this syntax
    },
    mode: 'development', // to ignore mode not set warning
    watch: true, // webpack stay running and watch and detect any time we save a change

    // we can tell web pack what to do when it runs into certain files by adding a property name 'module'
    module: {    
        //* ? rules going to be array   
        rules: [
            {
                test: /\.css$/i,  //depending of file ext do sth syntax (reqular expression)
                /*use: ['style-loader','css-loader', {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}]*/
                use: ["style-loader", "css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
            }
        ]
    }
}

