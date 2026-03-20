// craco.config.js — PostCSS/Tailwind integration for CRACO v7
module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: (postcssLoaderOptions) => {
        postcssLoaderOptions.postcssOptions.plugins = [
          require('tailwindcss'),
          require('autoprefixer'),
        ];
        return postcssLoaderOptions;
      },
    },
  },
};
