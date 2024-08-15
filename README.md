# Rapid prototyping starter kit

Rapid prototyping using StorybookJS, US Web Design System (USWDS), and Drupal Twig. No prior knowledge necessary.

## Tech stack

> [!CAUTION]
> There are some compatibility issues with StorybookJS Vite on Windows. Please use **W**indows **S**ubsystem for **L**inux. We're looking into ways to fix this #27.

- **Node:** LTS 20+, recommend [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to manage different node versions.
- **Component library:** StorybookJS w/ Vite
- **Templates:** [Drupal Twig](https://github.com/larowlan/vite-plugin-twig-drupal)
  - [Drupal twig coding standards](https://www.drupal.org/docs/develop/coding-standards/twig-coding-standards)
- **Styles:** [SASS](https://sass-lang.com/documentation) & [USWDS](https://designsystem.digital.gov)

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
> When using in Drupal theme, you'll need to copy over USWDS fonts/images. This setup works specifically for StorybookJS.

Copying markup from [USWDS components](https://designsystem.digital.gov/components/) can result in broken images. To fix this, simply remove the `assets` in the path.

You can reference static assets in USWDS node package. This is set in `.storybook/main.js:8`. Example below.

```diff
<!-- identifier.html.twig -->
<!-- Updating image paths from copied USWDS markup. -->
- src="/assets/img/circle-gray-20.svg"
+ src="/img/circle-gray-20.svg"
```

## Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.
