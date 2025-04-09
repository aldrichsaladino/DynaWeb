//this is the webpack config file
const path = require('path');

module.exports = {
    mode: 'development',
    entry:"./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before each build   
    }


}