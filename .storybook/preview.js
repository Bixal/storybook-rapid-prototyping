/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  docs: {
    toc: true, // Autogenerate table of contents.
    canvas: {
      sourceState: "shown", // Show markup.
    },
  },
  tags: ["autodocs"],
};

export default preview;
