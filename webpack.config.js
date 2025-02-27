module.exports = {
    // ...existing configuration...
    devtool: 'source-map',
    module: {
      rules: [
        // ...existing rules...
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    ignoreWarnings: [
      {
        module: /xp\.css/,
        message: /Failed to parse source map/,
      },
    ],
  };