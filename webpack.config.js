const path = require("path");

module.exports = {
	// watch: true,
	entry: "./index.ts",
	//Important - we ar building for node server
	mode: "development",
	target: "node",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
            {
                test: /\.d\.ts$/,
                use: 'null-loader',
            },
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		library: { name: "buyers", type: "umd" },
		// library: 'dgraph_orm',
		// libraryTarget:'umd',
		// umdNamedDefine: true
	},
	optimization: {
		minimize: false,
	},
};
