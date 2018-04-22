module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            },
            { test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "file?name=img/[name].[ext]" },
            { test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "file?name=fonts/[name].[ext]" },
            { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file?name=fonts/[name].[ext]" },
            { test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" }
        ]
    }
}