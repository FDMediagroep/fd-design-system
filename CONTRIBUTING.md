# Contributing

How nice of you to swing by!
This must mean that you're serious about thinking to contribute to our little OSS project.
Let's get acquainted by allowing us to show you how we contribute to this project ourselves.
By following these tips and guidelines you'll find that you can contribute more easily.

## Adding components

1. Add your component under `/src/components/<your component>/<component>.tsx`.
1. Add your component page `/src/pages/<page name>.tsx`.
1. Add a link to your component page in the Menu component `/src/components/Menu.tsx`.
   E.g.: `<Link href="/input/radio"><a>Input Radio</a></Link>`
1. Import and export your component in `/src/components/main.tsx`.
   E.g.: `export { Radio } from './input/Radio';`
1. Add any synonyms applicable for your component in `/rewrites.js`.
    - Matching URL's will be directed to your component page
      E.g.: `{source: '/(input/gaga|input/googoo)', destination: '/input/radio'}`
1. Add entry to your component in `/webpack.config.js`.
    - This will ensure that your component will be exported as an atomic component. Users can choose to only import your component and styles without the bloat of other components.
      E.g.: `'/input/Radio': ['./src/components/input/Radio.tsx']`
1. Add unit test for your component under `/__tests__/components/<component>.test.tsx`.
1. Update README.md under heading `Components` with an example of how to use your component.

## Release tagging

Tagging the repository on GitHub with a release will automatically start the GitHub Actions. It currently consists of 2 workflows:

-   build
-   release

After the build has completed the release will be run which does the actual packaging of the Component Library and publishes it to both NPMJS and GitHub Packages.

Versioning convention:

`v{major}.{minor}.{patch}[-canary.{patch}]`

Examples:

-   v0.3.5
-   v1.2.2
-   v1.2.3
-   v1.2.3-canary.1

Canary releases are pre-releases. So version `v1.2.3-canary.1` is considered as an older release than `v1.2.3`. Canary releases are useful if you want to test it in your own application without risking other users installing it by mistake.

With NPM a developer typically installs node modules like so:

`npm i @fdmg/design-system`

or

`npm i @fdmg/design-system@latest`

Let's say we haven't released `v1.2.3` yet then both these commands would automatically install `v1.2.2` and not `v1.2.3-canary.1`. Even though the latter has been packaged and released later than `v1.2.2`.

In order to install `v1.2.3-canary.1` the developer could use the following commands:

`npm i @fdmg/design-system@v1.2.3-canary.1`

or

`npm i @fdmg/design-system@next`
