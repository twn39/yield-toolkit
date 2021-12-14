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
    prompts: [{
      type: 'list',
      name: 'framework',
      message: 'which framework for ?',
      choices: ["React", "Vue"]
    }],
    actions: data => {
      let actions = [];
      if (data['framework'] === 'React') {
        actions.push({
          type: 'modify',
          path: 'package.json',
          transform: reactTransform,
        });
      }
      if (data['framework'] === 'Vue') {
        actions.push({
          type: 'modify',
          path: 'package.json',
          transform: vueTransform,
        });
      }
      actions.push({
        type: 'add',
        path: 'webpack.config.js',
        templateFile: 'templates/webpack/{{lowerCase framework}}.hbs.js'
      });
      actions.push({
        type: 'add',
        path: '.babelrc',
        templateFile: 'templates/webpack/{{lowerCase framework}}.babelrc.hbs'
      });
      actions.push({
        type: 'add',
        path: '.tsconfig.json',
        templateFile: 'templates/webpack/{{lowerCase framework}}.tsconfig.json'
      });
      return actions;
    },
  });
  plop.setGenerator('react', {
    description: 'add react file',
    prompts: [
      {
        type: 'list',
        name: 'module',
        message: 'select module please',
        choices: ['component', 'redux']
      },
      {
        type: 'input',
        name: 'name',
        message: 'enter file name please',
      },
      {
        type: 'list',
        name: 'type',
        message: 'select type please',
        choices: ['functional', 'class']
      },
      {
        type: 'list',
        name: 'format',
        message: 'select format please',
        choices: ['js', 'tsx']
      },
    ],
    actions: data => {
      let actions = [];
      actions.push({
        type: 'add',
        path: '{{pascalCase name}}.{{format}}',
        templateFile: 'templates/react/{{module}}.{{type}}.{{format}}.hbs'
      });
      return actions;
    }
  });
  plop.setGenerator('vue', {
    description: 'add react file',
    prompts: [{
      type: 'list',
      name: 'format',
      message: 'select format please',
      choices: ['js', 'tsx'],
    },],
    actions: [],
  });
};
