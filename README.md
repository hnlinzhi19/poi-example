# The idea behind this example

Some features provided by [Poi](https://github.com/egoist/poi) may cause ESLint to throw some errors, like the [`@`](https://poi.js.org/#/recipes/resolve-modules) alias which allows you to import files from `./src` directory everywhere.

The solution is to use [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) which helps ESLint properly validate imports with the `webpackConfig` Poi exposes.

See [.eslintrc.js](./.eslintrc.js) for detailed usage.

Follow this steps to run ESLint:

```bash
# clone this repo
yarn
yarn lint
```

And woot, ESLint didn't complain about anything, including our use of `@` alias at [this line](./src/index.js#L2):

![preview](https://i.loli.net/2017/12/14/5a31f782ea8a8.png)