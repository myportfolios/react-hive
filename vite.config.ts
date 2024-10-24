import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react";

// __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

// https://vite.dev/config/

// Import the necessary functions from Vite
export default defineConfig({
  // Add the React plugin to Vite, enabling React-specific features like JSX support
  plugins: [react()],

  build: {
    // Configure settings for building a library (rather than a typical app)
    lib: {
      // Entry point for the library (can also be multiple entries), specifying the main file of the library
      entry: resolve(__dirname, "lib/main.ts"),
      // Name of the global variable to expose the library when bundled in UMD/IIFE format
      name: "react-hive",
      // Output file name for the library bundle
      fileName: "react-hive",
    },
    // Options specific to the bundler (Rollup in this case)
    rollupOptions: {
      // Specify dependencies to exclude from the bundle and instead be treated as external (i.e., provided by the environment where the library is used)
      external: ["react", "react-dom", "react/jsx-runtime"],
      // Configure the output format for global variables (important for UMD/IIFE builds)
      output: {
        // Map external dependencies to global variables when using the library in a browser environment
        globals: {
          react: "React", // Use the global "React" variable for "react"
          "react-dom": "ReactDOM", // Use the global "ReactDOM" variable for "react-dom"
          "react/jsx-runtime": "react/jsx-runtime", // Use the "react/jsx-runtime" global variable
        },
      },
    },
  },
});
