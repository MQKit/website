// Static export: `npm run build` writes plain files to dist/, which nginx
// serves (deploy/). Every page is a folder with an index.html, so URLs end
// in a slash (/download/).
import { defineConfig } from "astro/config";
import { SITE } from "./src/site.ts";

export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  // No dev toolbar: the site loads nothing that is not its own.
  devToolbar: { enabled: false },
  compressHTML: false,
});
