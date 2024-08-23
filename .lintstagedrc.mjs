export default {
  '!(*.{mjs,mts,js,jsx,ts,tsx,png,jpeg,jpg,ico,graphqlconfig,svg,xml,txt,editorconfig,eslintignore,prettierignore}|.husky/**)':
    ['prettier --write'],
  '*.{mjs,mts,js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
};
