export default (config, { env }) => {
  // Add a rule to handle postcss.config.js for Tailwind
  config.module.rules.push({
    test: /postcss\.config\.js$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
  });

  // Return the modified configuration
  return config;
};
