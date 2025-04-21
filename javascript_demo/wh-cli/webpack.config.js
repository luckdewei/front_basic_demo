const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        filename: '[name].[hash:4].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}