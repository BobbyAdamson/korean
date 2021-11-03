# Korean lanuage learning tool

I have been taking Korean language lessons since around March of 2020. This is a small web application to help me keep track of notes, study vocab, and anything else.

It is built in [Preact](https://preactjs.com) (smaller alternative to React) and setup with the CLI. Being a personal project that I mostly maintain and use myself (my small class also can use it) it is fairly basic and rudimentary.

All data lives in markdown and JSON. There is no back end to this application. This is handy for me beacuse I can read those files directly if I dont want to setup the server/if I dont have internet access.

## Continuous deployment
I have written a Github Action to automatically deploy master to `hangeul.bobbyadamson.com` whenever a PR is merged into it.

## Next steps
- Convert all components to Typescript
- Add tests for all components and utilities
- Add a random time generator
- Improve Lesson Note presentation (currently just lists all the notes in the component, would be nice to have a file structure that can be navigated)
- Connect a DB

## CLI Commands
Project initialized with the Preact CLI.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
