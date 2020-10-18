# Sapper / Svelte multi installation example
See feature request https://github.com/sveltejs/sapper/issues/1609

## Running this example
The postinstall script should delete some files but this is only tested with ubuntu. Therefore is the deletion part disabled and can be enabled manually with removing the comment tokens from the lines 17 to 21 in the file `src-build/after-build.js`
```
npm run export
npx serve __sapper__/export
```