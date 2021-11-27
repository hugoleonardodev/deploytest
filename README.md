# 🖥 Coodesh Front-End Challenge - 2021

This is my solution to [Coodesh Front-End Challenge 2021](https://lab.coodesh.com/public-challenges/front-end-challenge-2021).
A TypeScript/React application. Built with Babel and Webpack. From a template wich is from my athoring.
With a lot of configurations for development and production environments.

---

-   Recommended IDE [VS Code](https://code.visualstudio.com/)

    -   How to [install](https://code.visualstudio.com/docs/setup/linux) VS Code on Linux
    -   How to [install](https://code.visualstudio.com/docs/setup/mac) VS Code on Mac OS
    -   How to [install](https://code.visualstudio.com/docs/setup/windows) VS Code on Windows

---

# 📜 Summary

-   [How to run this app](#-how-to-run-this-app)
    -   Node Package Manager
    -   Node Version Manager
    -   Install packages
    -   Run on Development
    -   Build Production
    -   Run Tests
    -   Linting
-   [Built with](#-built-with)
    -   Node Package Manager
    -   Node Version Manager
    -   Node
    -   React
    -   Typescript
    -   Webpack
    -   Babel
    -   SASS
    -   React Router DOM -router-dom
    -   Axios
    -   ES Lint
    -   Jest
    -   Husky
-   [Folder structure](#-folder-structure)
    -   Atomic Design
    -   Adapting from Atomic Design
    -   Suggested folder structure
    -   Root and src folders
    -   Tests folder
-   [Questions and answers](#%EF%B8%8F-questions-and-answers)
    -   Why TypeScript
    -   What is Webpack
    -   What is Babel
    -   What is ES Lint
    -   What is Prettier
    -   What is Stylelint
    -   What is .editorconfig
    -   Why SASS
    -   Why index.ejs
    -   Why `__tests__` folder
    -   Why Husky
-   [Troubleshooting](#%EF%B8%8F-troubleshooting)
-   [To do](#-to-do)
-   [Recommended IDE extensions](#-recommended-ide-extensions)
-   [Recommended VS CODE settings.json](#-recommended-vs-code-settingsjson)

---

## 👨🏽‍💻 How to run this app

### 📦 Node Package Manager

In order to install packages and run this application, you will need [Node Package Manager](https://docs.npmjs.com/) v6.14.15 or higher

### 🔍 Node Version Manager

This application is running on [Node](https://nodejs.org/en/) version 14.18.0 LTS

1. To change the Node version on IDE, open a new terminal and:

```
nvm use
```

2. If you don't have the LTS version, install it with Node Version Manager:

```
nvm install --lts
```

3. To set the LTS version as default on your terminal:

```
nvm alias default v14.18.0
```

4. To check if the Node versions is the correct:

```
node --version
```

And you should see `v14.18.0`

### 📥 Install packages

To install all the node_modules packages:

```
npm install
```

### ♻️ Run on Development

To run on Development mode:

```
npm start
```

### 🌐 Build Production

Build production mode:

```
npm run build
```

Build and Run within a 🐋 Docker Container:

```
sudo docker build --tag react . && sudo docker run --publish 5010:5010 react
```

### 🧪 Run Tests

To run tests:

```
npm test
```

Tests coverage:

```
npm run test:coverage
```

To run tests on watch mode:

```
npm test --watchAll <fileName>
```

### 🦄 Linting

SCSS files:

```
npx stylelint **/*.scss
```

styles.ts files:

```
npx stylelint **/*.styles.ts
```

TypeScript files:

```
npm run eslint --ext .tsx,.ts src
```

All files:

```
npm run lint
```

### 🐺 Husky hooks

Husky is already configured and commited. All you have to do is commit your changes.

Check the docs for more details [Husky](https://typicode.github.io/husky/#/?id=install) if you need to install it locally.

package.json

```json
"husky": {
    "hooks": {
        "pre-commit": "npm lint",
        "pre-push": "npm test"
    }
},

```

---

## 🏗 Built with

-   [Node Package Manager](https://docs.npmjs.com/)

    -   How to [install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

    -   How to [install](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/) on Linux

-   [Node Version Manager](https://github.com/nvm-sh/nvm)

    -   How to [install](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

-   [Node](https://nodejs.org/dist/latest-v14.x/docs/api/)

    -   How to [install](https://nodejs.org/en/download/package-manager/) with Node Version Manager

    -   How to [install](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-pt) on Linux

-   [React](https://reactjs.org/)

    -   How to [install](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9) with Webpack

    -   Useful sources:

        -   [create-react-app](https://create-react-app.dev/)
        -   [react-typescript-cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
        -   [learn](https://github.com/dabbott/react-express)

-   [Typescript](https://www.typescriptlang.org/)

    -   How to [install](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#installing-typescript)

    -   How to init [tesconfig](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#enhanced---init-output)

    -   Useful sources:

        -   [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) for new programmers
        -   [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) for Javascript programmers
        -   [Typescript](https://www.typescriptlang.org/docs/handbook/intro.html) handbook
        -   [Typescript](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) declaration files
        -   [Typescript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) projects configurations
        -   [Typescript](https://github.com/glaucia86/curso-typescript-zero-to-hero) from zero to hero - PT-BR 🇧🇷

    -   @Types and Plugins:

        -   [@tsconfig/recommended](https://www.npmjs.com/package/@tsconfig/recommended)
        -   [@types/node](https://www.npmjs.com/package/@types/node)
        -   [@types/react](https://www.npmjs.com/package/@types/react)
        -   [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
        -   [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom)
        -   [@types/webpack](https://www.npmjs.com/package/@types/webpack)
        -   [@types/webpack-dev-server](https://www.npmjs.com/package/@types/webpack-dev-server)
        -   [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
        -   [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

-   [Webpack](https://webpack.js.org/)

    -   How to [install](https://webpack.js.org/guides/installation/)

    -   [Webpack](https://webpack.js.org/guides/getting-started/) getting started
    -   [Webpack](https://webpack.js.org/guides/asset-management/) asset management
    -   [Webpack](https://webpack.js.org/guides/output-management/) output management
    -   [Webpack](https://webpack.js.org/loaders/) loaders
    -   [Webpack](https://webpack.js.org/guides/typescript/) Typescript
    -   [Webpack](https://webpack.js.org/concepts/) concepts

    -   Modules:

        -   [webpack](https://github.com/webpack/webpack)
        -   [webpack-cli](https://github.com/webpack/webpack-cli) command line interface
        -   [webpack-dev-server](https://github.com/webpack/webpack-dev-server) see also [devServer](https://webpack.js.org/configuration/dev-server/#devserver)
        -   [webpack-merge](https://github.com/survivejs/webpack-merge)

    -   Plugins:

        -   Officials:

            -   [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin) basic for HTML files
            -   [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin) extracts CSS into separate files
            -   [compression-webpack-plugin](https://webpack.js.org/plugins/compression-webpack-plugin) compressed version of assets
            -   [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin) minify Javascript

        -   Third Parties:

            -   [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin) configs favicons
            -   [fork-ts-checker-notifier-webpack-plugin](https://github.com/johnnyreilly/fork-ts-checker-notifier-webpack-plugin)
            -   [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)

    -   Loaders:

        -   Transpiling:

            -   [babel-loader](https://webpack.js.org/loaders/babel-loader)
            -   [url-loader](https://v4.webpack.js.org/loaders/url-loader/)
            -   [ts-loader](https://github.com/TypeStrong/ts-loader)
            -   [file-loader](https://v4.webpack.js.org/loaders/file-loader/)
            -   [extract-loader](https://github.com/peerigon/extract-loader)

        -   Styling:

            -   [autoprefixer](https://webpack.js.org/loaders/postcss-loader/#autoprefixer)
            -   [postcss-loader](https://webpack.js.org/loaders/postcss-loader/)
            -   [css-loader](https://webpack.js.org/loaders/css-loader)
            -   [sass-loader](https://webpack.js.org/loaders/sass-loader)
            -   [style-loader](https://webpack.js.org/loaders/style-loader)

-   [Babel](https://babeljs.io/)

    -   Officials:

        -   [@babel/core](https://babeljs.io/docs/en/babel-core)
        -   [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
        -   [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
        -   [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
        -   [@babel/runtime](https://babeljs.io/docs/en/babel-runtime)
        -   [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

    -   Third Parties:

        -   [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)
        -   [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
        -   [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)

-   [ES Lint](https://eslint.org/)

    -   How to [install](https://eslint.org/docs/user-guide/getting-started)

        -   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
        -   [eslint-config-standard](https://github.com/standard/eslint-config-standard)
        -   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
        -   [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
        -   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
        -   [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
        -   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
        -   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
        -   [eslint-plugin-react-perf](https://www.npmjs.com/package/eslint-plugin-react-perf)
        -   [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

-   [SASS](https://sass-lang.com/)

    -   Required for Webpack:

        -   [file-loader](https://v4.webpack.js.org/loaders/file-loader/)
        -   [extract-loader](https://github.com/peerigon/extract-loader)
        -   [autoprefixer](https://webpack.js.org/loaders/postcss-loader/#autoprefixer)
        -   [postcss-loader](https://webpack.js.org/loaders/postcss-loader/)
        -   [css-loader](https://webpack.js.org/loaders/css-loader)
        -   [sass-loader](https://webpack.js.org/loaders/sass-loader)

-   To import Bootstrap SCSS and normalize CSS

/App.scss

```scss
@import '~bootstrap/scss/bootstrap';

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    width: 100vw;
}

...
```

-   [React Router DOM](https://reactrouter.com/web/guides/quick-start)

/Routes.tsx

```tsx
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('@pages/HomePage'))

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <HomePage />
                </React.Suspense>
            </Route>
        </Switch>
    )
}

export default Routes

```

-   /App.tsx

```jsx
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import goodContrastTheme from '@common/themes/goodContrastTheme'

import Routes from './Routes'
import store, { history } from './store'

import './App.scss'

const App: React.FC = () => {
    return (
        <ReduxStoreProvider store={store}>
            <AppProviders>
                <Routes />
            </AppProviders>
        </ReduxStoreProvider>
    )
}

export default App

export const RootThemeWrapper = styled.div`
    background: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.text.light};
`

export const AppProviders: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={goodContrastTheme}>
            <ConnectedRouter history={history}>
                <RootThemeWrapper>{children}</RootThemeWrapper>
            </ConnectedRouter>
        </ThemeProvider>
    )
}

```

-   [Axios](https://axios-http.com/docs/intro)

/src/services/api/getQuote.ts

```ts
import axios, { AxiosResponse } from 'axios'

export const getQuote = async (): Promise<AxiosResponse<never>> => {
    const url = 'https://type.fit/api/quotes'

    const result = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    return result
}
```

-   [Jest](https://jestjs.io/)

    -   Required for Jest with TypeScript and Webpack:

        -   [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
        -   [@testing-library/dom](https://testing-library.com/docs/dom-testing-library/intro/)
        -   [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
        -   [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/)
        -   [react-test-renderer](https://pt-br.reactjs.org/docs/test-renderer.html)
        -   [testing-library-selector](https://testing-library.com/docs/ecosystem-testing-library-selector/)
        -   [babel-jest](https://jestjs.io/pt-BR/docs/next/code-transformation)
        -   [ts-jest](https://kulshekhar.github.io/ts-jest/)
        -   [@types/jest](https://www.npmjs.com/package/@types/jest)
        -   [eslint-plugin-jest-dom](https://testing-library.com/docs/ecosystem-eslint-plugin-jest-dom/)
        -   [eslint-plugin-testing-library](https://testing-library.com/docs/ecosystem-eslint-plugin-testing-library/)

    -   Useful sources:

        -   [Tutorial](https://jestjs.io/docs/tutorial-react) Jest for React
        -   [Jest Webpack](https://jestjs.io/docs/webpack) Guide

-   [Husky](https://typicode.github.io/husky/#/)

    -   How to [install](https://typicode.github.io/husky/#/?id=install)
    -   How to [create](https://typicode.github.io/husky/#/?id=create-a-hook) a hook
    -   To delete a hook go to `.husky` folder in your project and delete the pre-commit or pre-push script
    -   To create another hook just repeate How to create step

-   [Redux](https://redux.js.org/tutorials/typescript-quick-start)

    -   Required for Redux with TypeScript and React Router DOM:

        -   [react-redux](https://react-redux.js.org/tutorials/typescript-quick-start)
        -   [@types/react-redux](https://www.npmjs.com/package/@types/react-redux)
        -   [redux-thunk](https://github.com/reduxjs/redux-thunk)
        -   [connected-react-router](https://github.com/supasate/connected-react-router)
        -   [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

    -   Useful sources:

        -   [React Router](https://reactrouter.com/web/guides/deep-redux-integration) integration with Redux
        -   [Redux Thunk](https://github.com/daryanka/typescript-with-redux) typing actions, store, reducers, and thunk
        -   [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR) Chrome Extension

---

## 📂 Folder structure

### [Atomic Design](https://github.com/danilowoz/react-atomic-design) ☢️

```
    ├── atoms/
    │
    ├── molecules/
    │
    ├── organisms/
    │
    ├── templates/
    │
    ├── pages/
```

### Adapting from Atomic Design

```
   src/
    ├── components/
    │       ├── atoms/
    │       ├── molecules/
    │       └── organisms/
    │
    ├── layouts|templates/
    │
    ├── pages/
```

### Suggested files structure:

For components, layouts, and pages

```
    ├── HeaderComponent/
    │       ├── HeaderComponent.tsx
    │       ├── index.(scss|styles.ts)
    │       └── index.ts
   ...
    ├── HomeLayout/
    │       ├── HomeLayout.tsx
    │       ├── index.(scss|styles.ts)
    │       └── index.ts
   ...
    ├── HomePage/
    │       ├── HomePage.tsx
    │       ├── index.(scss|styles.ts)
    │       └── index.ts
```

### Root and src folders

```
    /
    ├── .husky/                 <!-- generated afer run `npx husky install` -->
    ├── build/                  <!-- generated afer run `npm start` -->
    ├── dist/                   <!-- generated afer run `npm build` -->
    ├── node_modules/           <!-- generated afer run `npm install` -->
    ├── public/
    ├── src/
    │    ├── __tests__/
    │    ├── common/
    │    ├── components/
    │    ├── layouts/
    │    ├── pages/
    │    ├── services/
    │    ├── App.scss
    │    ├── App.tsx
    │    ├── index.ejs
    │    ├── index.tsx
    │    └── Routes.tsx
    ├── .editorconfig
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .node-version
    ├── .nvmrc
    ├── .prettierignore
    ├── .prettierrc
    ├── .stylelintignore
    ├── .stylelintrc.json
    ├── babel.config.js
    ├── docker-compose.yml
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tsconfig.json
    ├── webpack.config.js
    ├── webpack.development.js
    └── webpack.production.js
```

### Suggested files structure:

For components, layouts, and pages

```
  pages/
    ├── HomePage/
    │       ├── HomePage.tsx
    │       ├── index.(scss|styles.ts)
    │       └── index.ts
   ...
```

### Tests Folder

```
    __tests__/
        ├── app/
        ├── coverage/                   <!-- generated afer run `npm test` -->
        ├── helpers/
        └── mocks/


    __tests__/app/
                ├── components/
                ├── layouts/
                └── pages/

    __tests__/app/components/
                        ├── atoms/
                        ├── molecules/
                        └── organisms/

    __tests__/app/components/atoms/InnerLink.(test|spec).tsx
    __tests__/app/components/atoms/ListItem.(test|spec).tsx
    __tests__/app/components/atoms/OuterLink.(test|spec).tsx

    __tests__/app/components/molecules/TechList.(test|spec).tsx

    __tests__/app/components/organisms/HomeNav.(test|spec).tsx

    __tests__/app/layouts/HomeMain.(test|spec).tsx

    __tests__/app/pages/HomePage.(test|spec).tsx
```

---

## ⁉️ Questions and answers

### Why TypesScript ???

-   Improves a lot the development experience. Has a lot of features that JavaScript does not have. Having a strong sinergy with Webpack, Babel, and
    ES Lint. Types makes the code basis easier to read and mantain. And it also boosts your knowledge about React and JavaScript. Since we have to care
    about every type of JSX Elements, DOM Events, functions, objects, and so on.
-   Customize our projects configurations connecting plugins with Webpack, Babel, and ES Lint. Imports management, folder and file paths alias, and
    others environments options. Are all available on `tsconfig.json` file.

### What is Webpack ???

-   Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency
    graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve
    your content from. [Concepts](https://webpack.js.org/concepts/)

### What is Babel ???

-   Babel is a JavaScript compiler
-   See also [don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate](https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0)

### What is ES Lint ???

-   ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
-   Ensures that every person that is working on this code basis is writing on the same pattern. Following the same linting rules and avoiding anti-patterns from being commited and pushed. Combined with Husky.
-   See also [eslint-plugin](https://reactjs.org/docs/hooks-rules.html#eslint-plugin)

### What is Prettier ???

-   An opinionated code formatter. You press save and code is formatted.
-   Need to install Prettier extension for yor IDE in order to automate foarmat on save and/or format on paste options.

### What is Stylelint ???

-   Same as ES Lint but for styles files like .scss, .css, .less, etc.

### Why we have node-version and nvmrc ???

-   To ensure all environments that are running this application are also running the same Node version.

### What is editorconfig ???

-   EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

### Why SASS ???

-   CSS is hard to maintain. SASS is more porwerfull 💥. And there are plenty of UI libraries that supports SASS.
-   UI libraries that supports SASS:
    -   [Bootstrap](https://getbootstrap.com/docs/5.1/customize/sass/)
    -   [Material Design](https://material.io/develop/web/getting-started)
    -   [Materialize](https://materializecss.com/sass.html)

### Why we have index ejs instead of index html ???

-   Webpack relative or absolute path to the template. By default it will use src/index.ejs if it exists. Please see the docs for details.
-   EJS is just a way to warite some JS on HTML. Since we need to capture values from HtmlWebpackPlugin.
-   See [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options)
-   See also [template-option](https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md)

### Why we have this ugly `__tests__` folder ???

-   The main idea here is to keep all files related to tests separated from others `src` folder files. By doing this, we prevent Webpack
    to load files with .test and .spec extensions. And other files that are only useful on test environment. Like mocks, Provider and jest-setup
    from utils.
-   `coverage` is a special folder that comes in when any test is runned. This is an automatic configuration placed on `jest.config.js` on key `coverageDirectory`
-   Unit tests will be applied to components, layouts, and pages.
-   End-to-End tests will be runned with Cypress further.

### What is Husky ???

-   Husky improves your commits and more 🐶 woof!
-   To avoid having unlinted code in our repository, what we can do is add ESLint at one point of our process using Git Hooks. Like Husky!

### Why Redux not Context API ???

-   Supposing this application will scale and grow larger, Redux is more recommended.
-   Even though we have to write more code, Redux is easier to understand. Because it organises better the state management.
-   A lot of people know how to use Redux. Specially if this person cames from another language/framework. Context is only for React.
-   Context is a very rencent API. Only full available from React 16.8 to above.

-   Useful resourcers:
    - [Redux-vs-Context](https://academind.com/tutorials/reactjs-redux-vs-context-api)
    - [Context-Redux-differences](https://blog.isquaredsoftware.com/2021/01/context-redux-differences)
    - [Useing-hooks-and-context-not-react-and-redux](https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux)
    - [Redux-vs-Context-why-and-where](https://dev.to/m0rfes/redux-vs-context-why-and-where-3l2j)
    - [Starting-a-new-app-with-redux-consider-context-api-first](https://auth0.com/blog/starting-a-new-app-with-redux-consider-context-api-first)
    - [Redux-vs-Context-why-and-where](https://dev.to/m0rfes/redux-vs-context-why-and-where-3l2j)
    - [Redux-vs-react-context-PT-BE](https://medium.com/@hnordt/redux-vs-react-context-87a7053c12df)

### What is the folder `common/` for ???

-   Common is a place for `assets`, `functions`, `hooks`, `themes`, `types`, and wahtever you may need to share with the rest of the application.
-   Is also useful to place third party libraries configurations and setups. Keeping it on a place where you know where to find.
-   Good place for reusable code. In order to keep the application simple and dry. And reducing responsabilities from components.

---

# ⚠️ Troubleshooting

-   On deploy, you must set build production folder to `dist/` instead of `/`.

---

# 📑 To do

-   To Do

---

# 👉 Recommended IDE extensions

<img src="/public/assets/vs-code-extensions-1.png" alt="vs-code-extensions-1" />

<img src="/public/assets/vs-code-extensions-2.png" alt="vs-code-extensions-2" />

<img src="/public/assets/vs-code-extensions-3.png" alt="vs-code-extensions-3" />

<img src="/public/assets/vs-code-extensions-4.png" alt="vs-code-extensions-4" />

---

# 👉 Recommended VS Code settings.json

settings.json

```json
{
  "auto-close-tag.activationOnLanguage": ["*"],
  "code-runner.clearPreviousOutput": true,
  "code-runner.runInTerminal": true,
  "editor.autoClosingBrackets": "always",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.suggestSelection": "first",
  "editor.tabCompletion": "on",
  "editor.tabSize": 4,
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "ejs": "html"
  },
  "eslint.useESLintClass": true,
  "eslint.workingDirectories": ["./"],
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "files.associations": {
    "**/*.html": "html",
    "*.md": "mdx"
  },
  "git.autoRepositoryDetection": "openEditors",
  "gitlens.gitCommands.search.showResultsInSideBar": true,
  "gitlens.hovers.annotations.over": "annotation",
  "gitlens.hovers.annotations.changes": false,
  "gitlens.hovers.annotations.details": false,
  "gitlens.hovers.autolinks.enabled": false,
  "gitlens.hovers.autolinks.enhanced": false,
  "gitlens.hovers.avatars": false,
  "gitlens.hovers.currentLine.changes": false,
  "gitlens.hovers.currentLine.enabled": false,
  "gitlens.hovers.currentLine.details": false,
  "gitlens.hovers.pullRequests.enabled": false,
  "importCost.smallPackageSize": 10,
  "importCost.mediumPackageSize": 20,
  "importCost.mediumPackageColor": "#CCBC00",
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "liveServer.settings.donotVerifyTags": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "material-icon-theme.folders.associations": {
    "widgets": "components",
    "front-angular": "font",
    "front-react": "React-Components",
    "front-vue": "vue",
    "store": "Redux-store",
    "actions": "redux-actions",
    "reducers": "redux-reducer",
    "atoms": "React-components",
    "molecules": "Node",
    "organisms": "Other",
    "favicons": "Admin",
    "modules": "Home",
    "http": "Global",
    "typeorm": "Database",
    "migrations": "Expo",
    "entities": "Class",
    "repositories": "Log",
    "requirements": "Rules"
  },
  "material-icon-theme.files.associations": {
    "ormconfig.json": "Database"
  },
  "stylelint.validate": ["css", "scss"],
  "typescript.updateImportsOnFileMove.enabled": "always",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.colorTheme": "Dracula",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.tree.indent": 20,
  "window.zoomLevel": 0,
}

```
