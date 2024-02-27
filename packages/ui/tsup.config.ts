import { defineConfig } from "tsup";

export default defineConfig({
  treeshake: true,
  // splitting: true,
  // The file we created above that will be the entrypoint to the library.
  entry: ["src/index.tsx"],
  // Enable TypeScript type definitions to be generated in the output.
  // This provides type-definitions to consumers.
  dts: true,
  // Clean the `dist` directory before building.
  // This is useful to ensure the output is only the latest.
  // minify: true,
  // clean: true,
  external: [ "react"],
  format: ["cjs", "esm"],
  // Sourcemaps for easier debugging.
  sourcemap: false,
});
