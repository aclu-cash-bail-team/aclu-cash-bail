# ACLU Cash Bail Visualization Repository

This repository hosts the visualization code for the ACLU PA Cash Bail Report.

## Dev Environment Setup

We're using [Parcel](https://parceljs.org) to bundle resources. For development, run `npm run dev` to build and watch the CSS and JS. Then run `parcel index.html` in another terminal tab, and it will serve the app at `localhost:1234`. (You may need to run `npx parcel index.html` if the first command doesn't work. Alternatively, run `npm install -g parcel-bundler`, and the first command should work.)

Before push your changes, make sure to lint your code. You can do this by running `npm run lint` to see any linter errors, or by running `npm run fix` to have the linter fix them for you.

## Building and Deploying

To deploy an example to our [GitHub pages site](https://aclu-cash-bail-team.github.io/aclu-cash-bail/), first run `npm run build`, which will build the necessary `dist` files. The run `npm run deploy` to push those files to the `gh-pages` branch, off of which the site is built.

## Webflow Integration
Though the visualization code is hosted here, it will actually be deployed on the ACLU site.
The code will be served using the [JSDelivr CDN](https://www.jsdelivr.com/) directly from this Github repo

// TODO: Instructions for updating the code
