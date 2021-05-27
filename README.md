# ACLU Cash Bail Visualization Repository

This repository hosts the visualization code for the ACLU PA Cash Bail Report.

## Dev Environment Setup

We're using [Parcel](https://parceljs.org) to bundle resources. For development, run `npm run dev` to build and watch the CSS and JS. This will open the index page automatically in your default browser.

Before push your changes, make sure to lint your code. You can do this by running `npm run lint` to see any linter errors, or by running `npm run fix` to have the linter fix them for you.

## Building and Deploying for Test

To deploy an example to our [GitHub pages site](https://aclu-cash-bail-team.github.io/aclu-cash-bail/), first run `npm run test`, which will build the necessary `dist` files with the needed. Push those changes to master. Then run `npm run deploy` to push those files to the `gh-pages` branch, off of which the site is built.

## Webflow Integration

Though the visualization code is hosted here, it will actually be deployed on the ACLU site. The code will be served using the [JSDelivr CDN](https://www.jsdelivr.com/) directly from this GitHub repo [here](https://cdn.jsdelivr.net/gh/aclu-cash-bail-team/aclu-cash-bail@deploy/dist/).

### Deploying to JSDelivr

Once all changes are on `master`, switch to the `deploy` branch and merge in all the changes from `master`. Run `npm run build` to create the new dist files and push to `deploy`.

For each page in Webflow, open the settings (accessible from the gear icon next to the page name) and paste the stylesheets from the corresponding dist file in the `Inside <head> tag` section. Then add all script imports and blocks in the `Before </body> tag` section. Make sure to hit the blue save button in the top right of the pane before exiting it.

Once all pages are done, hit the publish button in the top right and then `publish to selected domains`.
