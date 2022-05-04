export function reactTransform(data, params) {
  data = JSON.parse(data);
  data['scripts'] = {
    ...data['scripts'],
    "build:dev": "webpack --mode development",
    "build:prod": "webpack --mode production",
    "start": "webpack serve --hot --mode development"
  };
  data['dependencies'] = {
    ...data['dependencies'],
    "react": "^18.1.0",
    "react-dom": "^18.1.0"
  };
  data['devDependencies'] = {
    ...data['devDependencies'],
    "@babel/core": "^7.17.10",
    "@babel/plugin-transform-runtime": "^7.17.10",
    "@babel/preset-env": "^7.17.10",
    "@babel/preset-react": "^7.16.7",
    "@babel/preset-typescript": "^7.16.7",
    "@babel/runtime": "^7.17.9",
    "@pmmmwh/react-refresh-webpack-plugin": "^0.5.5",
    "@svgr/webpack": "^6.2.1",
    "@types/react": "^18.0.8",
    "@types/react-dom": "^18.0.3",
    "babel-loader": "^8.2.5",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.6.0",
    "node-sass": "^7.0.1",
    "postcss": "^8.4.13",
    "postcss-loader": "^6.2.1",
    "postcss-preset-env": "^7.5.0",
    "react-refresh": "^0.13.0",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.57.0",
    "stylus-loader": "^6.2.0",
    "typescript": "^4.6.4",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.8.1"
  }
  return JSON.stringify(data, null, 2);
}

export function vueTransform(data) {
  data = JSON.parse(data);
  data['scripts'] = {
    ...data['scripts'],
    "build:dev": "webpack --mode development",
    "build:prod": "webpack --mode production",
    "start": "webpack serve --hot --mode development"
  };
  data['dependencies'] = {
    ...data['dependencies'],
    "vue": "^3.2.23",
    "vue-router": "^4.0.0",
    "vuex": "^4.0.0"
  };
  data['devDependencies'] = {
    ...data['devDependencies'],
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.4",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.5.3",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.56.0",
    "stylus-loader": "^6.2.0",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.2",
    "url-loader": "^4.1.1",
    "vue-loader": "^17.0.0",
    "vue-style-loader": "^4.1.3",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.6.0"
  }
  return JSON.stringify(data, null, 2);
}

export function preactTransform(data) {
  data = JSON.parse(data);
  data['scripts'] = {
    ...data['scripts'],
    "build:dev": "webpack --mode development",
    "build:prod": "webpack --mode production",
    "start": "webpack serve --hot --mode development"
  };
  data['dependencies'] = {
    ...data['dependencies'],
    "preact": "^10.3.1",
    "preact-router": "^4.0.0"
  };
  data['devDependencies'] = {
    ...data['devDependencies'],
    "@babel/core": "^7.16.5",
    "@babel/runtime": "^7.16.7",
    "@babel/plugin-transform-runtime": "^7.16.10",
    "@babel/plugin-transform-react-jsx": "^7.16.5",
    "@babel/preset-react": "^7.16.5",
    "@babel/preset-typescript": "^7.16.7",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "html-webpack-plugin": "^5.5.0",
    "postcss": "^8.4.5",
    "postcss-loader": "^6.2.1",
    "postcss-preset-env": "^7.2.0",
    "mini-css-extract-plugin": "^2.5.3",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.56.0",
    "stylus-loader": "^6.2.0",
    "typescript": "^4.5.4",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.6.0"
  }
  return JSON.stringify(data, null, 2);
}

export function solidTransform(data) {
  data = JSON.parse(data);
  data['scripts'] = {
    ...data['scripts'],
    "build:dev": "webpack --mode development",
    "build:prod": "webpack --mode production",
    "start": "webpack serve --mode development --hot"
  };
  data['dependencies'] = {
    ...data['dependencies'],
    "solid-app-router": "^0.3.0",
    "solid-js": "^1.2.6"
  };
  data['devDependencies'] = {
    ...data['devDependencies'],
    "@babel/core": "^7.16.5",
    "@babel/runtime": "^7.16.7",
    "@babel/plugin-transform-runtime": "^7.16.10",
    "@babel/plugin-proposal-class-properties": "^7.16.5",
    "@babel/plugin-proposal-object-rest-spread": "^7.16.5",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/preset-env": "^7.16.5",
    "@babel/preset-typescript": "^7.16.5",
    "babel-loader": "^8.2.3",
    "babel-preset-solid": "^1.2.6",
    "css-loader": "^6.5.1",
    "postcss": "^8.4.5",
    "postcss-loader": "^6.2.1",
    "postcss-preset-env": "^7.2.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.5.3",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.56.0",
    "stylus-loader": "^6.2.0",
    "typescript": "^4.5.4",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.1"
  }
  return JSON.stringify(data, null, 2);
}

