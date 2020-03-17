const path = require('path')
const Dotenv = require('dotenv-webpack')
const WebpackNodeExternals = require('webpack-node-externals')

module.exports = (env, argv) => {
    const Development = argv.mode === 'development';

    return {
        entry: {
            index: path.resolve(__dirname, 'src', 'index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        target: 'node',
        externals: [WebpackNodeExternals()],
        devtool: Development ? 'source-map' : 'none',
        resolve: {
            extensions: ['*', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        module: {
            rules: rules
        },
        plugins: [
            new Dotenv()
        ],
    }
}

const rules = [
    {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    }
]