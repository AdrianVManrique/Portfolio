module.exports = {
    devtool: 'source-map',
    entry: "./src/app.tsx",
    mode: "development",
    output: {
        filename: "./app-bundle.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                },
            }
        ]
    }
}