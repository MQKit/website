// The feed of the app's "new version" note (repositories/app/src-tauri/src/update.rs).
// Built from the newest entry of src/data/changelog.ts.
import { RELEASES } from "../data/changelog";
import { SITE } from "../site";

export function GET() {
  const r = RELEASES[0];
  const feed = {
    version: r.version,
    url: `${SITE}/download/`,
    notes: r.summary,
  };
  return new Response(JSON.stringify(feed, null, 2) + "\n", { headers: { "Content-Type": "application/json" } });
}
