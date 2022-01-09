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
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  };
  data['devDependencies'] = {
    ...data['devDependencies'],
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.4",
    "@babel/preset-react": "^7.16.0",
    "@types/react": "^17.0.37",
    "@types/react-dom": "^17.0.11",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "css-minimizer-webpack-plugin": "^3.3.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.5",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.56.0",
    "stylus-loader": "^6.2.0",
    "terser-webpack-plugin": "^5.3.0",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.2",
    "url-loader": "^4.1.1",
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.6.0"
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
    "css-minimizer-webpack-plugin": "^3.3.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.5",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.56.0",
    "stylus-loader": "^6.2.0",
    "terser-webpack-plugin": "^5.3.0",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.2",
    "url-loader": "^4.1.1",
    "vue-loader": "^16.8.3",
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
    "@babel/plugin-transform-react-jsx": "^7.16.5",
    "@babel/preset-react": "^7.16.5",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.5",
    "css-minimizer-webpack-plugin": "^3.3.1",
    "terser-webpack-plugin": "^5.3.0",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.56.0",
    "stylus-loader": "^6.2.0",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.4",
    "url-loader": "^4.1.1",
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
    "solid-app-router": "^0.2.0",
    "solid-js": "^1.2.6"
  };
  data['devDependencies'] = {
    ...data['devDependencies'],
    "@babel/core": "^7.16.5",
    "@babel/plugin-proposal-class-properties": "^7.16.5",
    "@babel/plugin-proposal-object-rest-spread": "^7.16.5",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/preset-env": "^7.16.5",
    "@babel/preset-typescript": "^7.16.5",
    "babel-loader": "^8.2.3",
    "babel-preset-solid": "^1.2.6",
    "css-loader": "^6.5.1",
    "css-minimizer-webpack-plugin": "^3.3.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.5",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.56.0",
    "stylus-loader": "^6.2.0",
    "terser-webpack-plugin": "^5.3.0",
    "typescript": "^4.5.4",
    "url-loader": "^4.1.1",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.1"
  }
  return JSON.stringify(data, null, 2);
}

