import { defineConfig } from "vite";
import { join } from "node:path";
import twig from "vite-plugin-twig-drupal";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["./node_modules/@uswds/uswds/packages"]
      }
    }
  },
  plugins: [
    twig({
      // Allows namespaces in templates, like `@components/COMPONENT_NAME.
      namespaces: {
        components: join(__dirname, "./stories/components"),
        pages: join(__dirname, "./stories/pages"),
        partials: join(__dirname, "./stories/partials"),
      }
    }),
  ],
  framework: "html"
});
