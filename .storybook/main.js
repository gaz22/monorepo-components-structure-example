module.exports = {
  stories: ['../components/**/src/stories/*.stories.tsx'],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  babel: async (options) => {
    options.plugins.push("@babel/plugin-syntax-flow");
    options.presets.push("@babel/preset-typescript");
    return options;
  },
  addons: ['@storybook/preset-scss', '@storybook/addon-a11y'],
};
