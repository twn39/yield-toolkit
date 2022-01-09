export function moduleFederationPartial(plop) {
  plop.setPartial('moduleFederation', `new ModuleFederationPlugin({
  name: 'homepage',
  filename: "remoteEntry.js",
  exposes: {
    './App': './src/App',
  },
}),\n`);
}

export function codeSplitPartial(plop) {
  plop.setPartial('codeSplit', `optimization: {
  minimize: prod,
  minimizer: [
    new TerserPlugin(),
    new CssMinimizerPlugin(),
  ],
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\\\/]node_modules[\\\\/]/,
        name: 'vendors',
        chunks: 'all'
      }
    }
  }
},\n`);
}
