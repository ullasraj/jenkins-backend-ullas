const path = require('path');

module.exports = {
  entry: './index.ts',  // Entry point of your TypeScript application
  output: {
    filename: 'bundle.js',  // The bundled JavaScript file output
    path: path.resolve(__dirname, 'dist'),  // Output directory for bundled files
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Resolve both TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,             // Process files with .ts extension
        use: 'ts-loader',          // Use ts-loader to compile TypeScript files
        exclude: /node_modules/,   // Don't process files in node_modules
      },
    ],
  },
  mode: 'production',            // Set Webpack mode to 'production' for optimization
};
