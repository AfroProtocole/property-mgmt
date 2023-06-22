/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const {
  override,
  overrideDevServer,
  addWebpackAlias,
  addBabelPlugin,
} = require("customize-cra");
const rewiredEsbuild = require("react-app-rewired-esbuild");
const path = require("path");

// const isProd = process.env.NODE_ENV === "production";

// /**
//  * This function set the webpack output path as "kumo-ui/resource/static", where flask server picks up client resource
//  *
//  * With these, we enable hot reloading, which means whenever a change is made in the client side,
//  * both client server (webpack dev server) and flask server will automotically pick up the change without a restart or rebuild
//  */
// const addCustomize = () => (config) => {
//   if (process.env.NODE_ENV === "development") {
//     config.output.filename = "static/js/bundle.[hash].js";
//     config.output.chunkFilename = "static/js/[name].[hash].js";
//     config.output.path = path.join(__dirname, "../deadpool-ui-fe/resource");
//     config.ignoreWarnings = [{ message: /Failed to parse source map/ }];
//   }

//   return config;
// };
// module.exports = {
//   webpack: override(
//     addCustomize(),
//     addWebpackAlias({
//       components: path.resolve(__dirname, "src/components"),
//       context: path.resolve(__dirname, "src/context"),
//       hooks: path.resolve(__dirname, "src/hooks"),
//       layouts: path.resolve(__dirname, "src/layouts"),
//       apps: path.resolve(__dirname, "src/apps"),
//       utils: path.resolve(__dirname, "src/utils"),
//       data: path.resolve(__dirname, "src/data"),
//       __mocks__: path.resolve(__dirname, "src/__mocks__"),
//       images: path.resolve(__dirname, "src/images"),
//       graphql: path.resolve(__dirname, "src/graphql"),
//       lib: path.resolve(__dirname, "src/lib"),
//       styles: path.resolve(__dirname, "src/styles"),
//     }),
//     rewiredEsbuild({
//       ESBuildLoaderOptions: {
//         loader: "tsx",
//         target: "esnext",
//       },
//       ESBuildMinifyOptions: {
//         loader: "tsx",
//         css: isProd ? true : false,
//       },
//     })
//   ),
//   // eslint-disable-next-line no-unused-vars
//   paths(paths, env) {
//     paths.appBuild = path.resolve(__dirname, "dist");

//     return paths;
//   },
//   devServer: overrideDevServer((config) => ({
//     ...config,
//   })),
// };
module.exports = override(
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src",
    },
  ])
);
// export function paths(paths, env) {
//   paths.appBuild = path.resolve(__dirname, "dist");

//   return paths;
// }
// export const devServer = overrideDevServer((config) => ({
//   ...config,
// }));

// "baseUrl": "src",
// "paths": {
//   "~/*": ["*"]
// }

// "baseUrl": ".",
// "paths": {
//   "~/*": ["./src/*"]
// }

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },
