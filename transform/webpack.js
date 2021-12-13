export function reactTransform(data, params) {
  data = JSON.parse(data);
  data['scripts'] = {
    ...data['scripts'],
    "clean": "rm dist/bundle.js",
    "build:dev": "webpack --mode development",
    "build:prod": "webpack --mode production",
    "start": "webpack serve --hot --mode development"
  };
  data['dependencies'] = {
    ...data['dependencies'],
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-hot-loader": "^4.13.0"
  };
  data['devDependencies'] = {
    ...data['devDependencies'],
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1",
    "@types/react": "^17.0.37",
    "@types/react-dom": "^17.0.11",
    "@babel/preset-react": "^7.16.0",
    "babel-loader": "^8.2.3",
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.4",
    "@hot-loader/react-dom": "^17.0.1+4.13.0",
    "webpack-dev-server": "^4.6.0",
    "css-loader": "^6.5.1",
    "style-loader": "^3.3.1",
    "html-webpack-plugin": "^5.5.0",
    "typescript": "^4.5.2",
    "ts-loader": "^9.2.6",
    "stylus-loader": "^6.2.0",
    "stylus": "^0.55.0",
    "sass-loader": "^12.3.0",
    "node-sass": "^6.0.1",
    "file-loader": "^6.2.0",
    "url-loader": "^4.1.1",
    "mini-css-extract-plugin": "^2.4.5"
  }
  return JSON.stringify(data, null, 2);
}

export function vueTransform(data) {
  data = JSON.parse(data);
  data['scripts'] = {
    ...data['scripts'],
    "clean": "rm dist/bundle.js",
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
    "mini-css-extract-plugin": "^2.4.5",
    "node-sass": "^6.0.1",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "stylus": "^0.55.0",
    "stylus-loader": "^6.2.0",
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


