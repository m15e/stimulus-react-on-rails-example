// The source code including full typescript support is available at: 
// https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/blob/master/babel.config.js

const defaultConfigFunc = require('@rails/webpacker/package/babel/preset.js');

module.exports = function (api) {
  const resultConfig = defaultConfigFunc(api);

  const changesOnDefault = {
    plugins: [process.env.WEBPACK_SERVE && 'react-refresh/babel'].filter(Boolean),
  };

  resultConfig.plugins = [...resultConfig.plugins, ...changesOnDefault.plugins];

  return resultConfig;
};
