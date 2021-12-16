import {preactTransform, reactTransform, vueTransform} from "./transform/webpack.js";
import {codeSplitPartial, moduleFederationPartial} from "./partial/webpack.js";

export default function (plop) {
  plop.setWelcomeMessage('Yield toolkit.\r\n');
  moduleFederationPartial(plop)
  codeSplitPartial(plop)
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
  plop.setGenerator('README', {
    description: 'add README file',
    prompts: [{
      type: 'input',
      name: 'project',
      message: 'project name please'
    }],
    actions: [{
      type: 'add',
      path: 'README.md',
      templateFile: 'templates/git/readme.hbs'
    }]
  });
  plop.setGenerator('gitignore', {
    description: 'add .gitignore file',
    prompts: [],
    actions: [{
      type: 'add',
      path: '.gitignore',
      templateFile: 'templates/git/gitignore.hbs'
    }]
  });
  plop.setGenerator('monorepo', {
    description: 'generate a monorepo',
    prompts: [{
      type: 'input',
      name: 'project',
      message: 'project name please'
    },{
      type: 'input',
      name: 'author',
      message: 'author name please'
    },{
      type: 'checkbox',
      name: 'dir',
      choices: ['packages/*', 'apps/*', 'libs/*', 'components/*']
    }],
    actions: [{
      type: 'add',
      path: 'package.json',
      templateFile: 'templates/monorepo/package.json.hbs'
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
      message: 'select framework',
      choices: ["React", "Vue", "Preact"]
    }, {
      type: 'checkbox',
      name: 'module',
      message: 'select module function',
      choices: ["ModuleFederation", "CodeSplit"]
    }],
    actions: data => {
      let actions = [];
      if (data['framework'] === 'React') {
        actions.push({
          type: 'modify',
          path: 'package.json',
          transform: reactTransform,
        });
        actions.push({
          type: 'add',
          path: 'src/App.tsx',
          templateFile: 'templates/webpack/{{lowerCase framework}}/App.tsx.hbs'
        });
        actions.push({
          type: 'add',
          path: 'src/index.tsx',
          templateFile: 'templates/webpack/{{lowerCase framework}}/index.tsx.hbs'
        });
      }
      if (data['framework'] === 'Vue') {
        actions.push({
          type: 'modify',
          path: 'package.json',
          transform: vueTransform,
        });
        actions.push({
          type: 'add',
          path: 'src/App.vue',
          templateFile: 'templates/webpack/{{lowerCase framework}}/App.vue.hbs'
        });
        actions.push({
          type: 'add',
          path: 'src/index.js',
          templateFile: 'templates/webpack/{{lowerCase framework}}/index.js.hbs'
        });
      }
      if (data['framework'] === 'Preact') {
        actions.push({
          type: 'modify',
          path: 'package.json',
          transform: preactTransform,
        });
        actions.push({
          type: 'add',
          path: 'src/App.tsx',
          templateFile: 'templates/webpack/{{lowerCase framework}}/App.hbs'
        });
        actions.push({
          type: 'add',
          path: 'src/index.tsx',
          templateFile: 'templates/webpack/{{lowerCase framework}}/index.hbs'
        });
      }
      actions.push({
        type: 'add',
        path: 'webpack.config.js',
        templateFile: 'templates/webpack/{{lowerCase framework}}/{{lowerCase framework}}.webpack.hbs'
      });
      actions.push({
        type: 'add',
        path: '.babelrc',
        templateFile: 'templates/webpack/{{lowerCase framework}}/{{lowerCase framework}}.babelrc.hbs'
      });
      actions.push({
        type: 'add',
        path: 'tsconfig.json',
        templateFile: 'templates/webpack/{{lowerCase framework}}/{{lowerCase framework}}.tsconfig.json'
      });
      return actions;
    },
  });
  plop.setGenerator('react component', {
    description: 'generate a react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'react component name please',
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
        templateFile: 'templates/react/component.{{type}}.{{format}}.hbs'
      });
      return actions;
    }
  });
  plop.setGenerator('vue component', {
    description: 'add vue component file',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'vue component name please',
    },{
      type: 'list',
      name: 'format',
      message: 'select format please',
      choices: ['js', 'ts'],
    },],
    actions: data => {
      let actions = [];
      actions.push({
        type: 'add',
        path: '{{pascalCase name}}.vue',
        templateFile: 'templates/vue/component.{{format}}.hbs.vue'
      });
      return actions;
    }
  });
};
