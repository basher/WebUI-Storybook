# Storybook for Web UI components

## QUICK START

> 1. Clone the [WebUI Storybook repo](https://github.com/basher/WebUI-Storybook).
> 2. From the repo's root directory, install all the project dependencies:
> ```
> npm install
> ```
> 3. Now follow the **QUICK START** instructions in the [WebUI repo](https://github.com/basher/WebUI-Parcel) if you haven't already done so, to ensure the Storybook UI can load with the correct UI theme.
>> The preceding steps are a **one time only** operation.

## Start Web UI Parcel theme server
- From your local [WebUI repo](https://github.com/basher/WebUI-Parcel) terminal or command prompt, start the WebUI Parcel server, with appropriate UI theme:
```
npm run start:theme --web-ui-parcel:theme=[theme-name]
```

## Start Storybook
- From a terminal in this Storybook repo:
```
npm run storybook
```

## Build/deploy Storybook
- Use [Chromatic](https://www.chromatic.com/) to host Storybooks for each theme. For example,
```
npm run chromatic:whitelabel
```
- For full instructions, please see the `Publishing Storybook Live` story in Storybook itself.

## How are the static UI assets from theme server accessed within Storybook?
- This Storybook repo contains `.storybook\preview-head.html` fragment, which links to the **external CSS/JS files and SVG sprites** bundled by the external Parcel UI repo.
- The `index.js` has to be programatically added to the Storybook iframe DOM, so that the stories can instantiate the modules.
- Additionally, this repo's `.public` folder contains other required static assets.

### Storybook `process.env` environment variables
- Within Storybook, all UI static assets need to use correct paths/URLs depending on whether we're running in DEV or PRODUCTION mode.
- These variables are stored in `.env.development` and `.env.production` files.

## HTML authoring guidelines for story components

> These rules apply to all the HTML stories in this Storybook.
- Always use semantic HTML5 elements.
- [Validate rendered source HTML](https://validator.w3.org/#validate_by_input) to check for errors.
- Progressively enhance markup with `WAI-ARIA` attributes and JavaScript where appropriate.

### Accessibility and WAI-ARIA

- Start with semantic HTML5, and progressively enhance.
- See [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/).
- See [inclusive components](https://inclusive-components.design/).

### CSS namespacing with BEM and `ui-` prefix

- CSS scope and encapsulation is facilitated by a strict adherence to BEM naming convention for class names in the HTML - i.e. `block__element--modifier`.
- Additionally, all classnames will be prefixed with `ui-`.
- For example, a `ui-widget` component might have a `ui-widget__title` element, and a `ui-widget--small` modifier

```html
<article class="ui-widget ui-widget--small">
    <h2 class="ui-widget__title">Title...</h2>
    ...
</article>
```
