var path = require("path");

const { override, babelInclude } = require("customize-cra");

module.exports = function (config, env) {
  require('react-app-rewire-postcss')(config/*, options */);
  
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve("src"),
        path.resolve("../shared"),
      ])
    )(config, env)
  );
};
