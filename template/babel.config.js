module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts'],
        alias: {
          components: './src/components',
          features: './src/features',
        },
      },
    ],
    '@babel/plugin-proposal-numeric-separator',
  ],
};
