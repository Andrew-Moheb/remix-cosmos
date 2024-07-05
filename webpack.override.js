export default (webpackConfig, env) => {
  return {
    ...webpackConfig,
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["css-loader", "postcss-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
      ],
    },
  };
};
