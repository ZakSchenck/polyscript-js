const webpack = require('webpack');

module.exports = {
  // ... other configurations ...
  configureWebpack: {
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'), // Add this line
      },
    },
    plugins: [
      // ... other plugins ...
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser', // Add this line
      }),
    ],
  },
};
