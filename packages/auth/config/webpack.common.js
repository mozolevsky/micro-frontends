module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime', 
              ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]
            ],
          },
        },
      },
    ],
  },
};
