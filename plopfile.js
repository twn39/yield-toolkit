import {reactTransform, vueTransform} from "./transform/webpack.js";

export default function (plop) {
  plop.setWelcomeMessage('Yield toolkit.');
  plop.setGenerator('license', {
    description: 'add license',
    prompts: [{
      type: 'list',
      name: 'license',
      message: 'license name please',
      choices: ['MIT', 'ISC', 'GPLv3', 'GPLv2', 'Apache', 'AGPLv3']
    },{
      type: 'input',
      name: 'year',
      message: 'year please'
    }, {
      type: 'input',
      name: 'fullname',
      message: 'full name please'
    }],
    actions: [{
      type: 'add',
      path: 'LICENSE',
      templateFile: 'templates/license/{{lowerCase license}}.hbs'
    }]
  });
  plop.setGenerator('gitignore', {
    description: 'add gitignore file',
    prompts: [],
    actions: [{
      type: 'add',
      path: '.gitignore',
      templateFile: 'templates/git/gitignore.hbs'
    }]
  });
  plop.setGenerator('editorconfig', {
    description: 'add .editorconfig file',
    prompts: [
      {
        type: 'input',
        name: 'indent',
        message: 'indent size please'
      }
    ],
    actions: [{
      type: 'add',
      path: '.editorconfig',
      templateFile: 'templates/editor/editorconfig.hbs'
    }]
  });
  plop.setGenerator('webpack', {
    description: 'add webpack configure file',
    prompts: [
      {
        type: 'list',
        name: 'framework',
        message: 'which framework for ?',
        choices: ["React", "Vue"]
      }
    ],
    actions: data => {
      let actions = [];
      if (data['framework'] === 'React') {
        actions.push({
          type: 'add',
          path: 'webpack.config.js',
          templateFile: 'templates/webpack/react.hbs.js'
        });
        actions.push({
          type: 'modify',
          path: 'package.json',
          transform: reactTransform,
        });
      }
      if (data['framework'] === 'Vue') {
        actions.push({
          type: 'add',
          path: 'webpack.config.js',
          templateFile: 'templates/webpack/vue.hbs.js'
        });
        actions.push({
          type: 'modify',
          path: 'package.json',
          transform: vueTransform,
        });
      }
      return actions;
    },
  });
};
