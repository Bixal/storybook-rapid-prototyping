# Rapid prototyping starter kit

This project uses StorybookJS, Drupal twig, and US Web Design System (USWDS) for rapid prototyping.

## Tech stack

- **Node:** LTS 20+, recommend [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to manage different node versions.
- **Component library:** StorybookJS w/ Vite
- **Templates:** Drupal Twig
- **Styles:** USWDS & SASS

## Installation

```sh
npm install
```

## Running locally

Opens a window on http://localhost:4040/.

```sh
npm start
```

### Using USWDS Static assets (images & fonts)

> [!NOTE]
> When using in Drupal theme, you'll need to copy over fonts/images. This setup works specifically for StorybookJS.

Copying markup from [USWDS components](https://designsystem.digital.gov/components/) can result in broken images. To fix this, simply remove the `assets` in the path.

Below we're referencing the static assets in USWDS node package. This is set in `.storybook/main.js:8`.

```diff
<!-- identifier.html.twig -->
- src="/assets/img/circle-gray-20.svg"
+ src="/img/circle-gray-20.svg"
```

## Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.
