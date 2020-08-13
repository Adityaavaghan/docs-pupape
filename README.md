_last updated 15/6/2020_

# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

**Before Deployment make sure to Test thoroughly and Run locally**

```
firebase use --add (add alias prod)
```

```
npm run build
```

```
firebase deploy --only hosting:pupape-303d0
```
