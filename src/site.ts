// Every address and fact the site gives out, in one place, edited by hand at
// each release. The app reads `${SITE}/latest.json` once a day
// (src-tauri/src/update.rs: FEED_URL, in github.com/MQKit/app): keep the two in step.

/** The site's address. */
export const SITE = "https://mqkit.com";
export const APP_NAME = "MQKit";
export const REPO = "https://github.com/MQKit/app";

export const LATEST_VERSION = "1.0.0";
/** Release date of LATEST_VERSION (yyyy-mm-dd). */
export const LATEST_DATE = "2026-12-01";
export const INSTALLER_NAME = `MQKit-setup-${LATEST_VERSION}.exe`;
// by tag: the link names the exact file the SHA-256 is for
export const DOWNLOAD = `${REPO}/releases/download/v${LATEST_VERSION}/${INSTALLER_NAME}`;
/** From scripts\package.ps1 -Release; empty until the first release. */
export const INSTALLER_SHA256 = "";
export const INSTALLER_SIZE = "6 MB";
/** Until the first release, the download buttons say "coming soon". */
export const DOWNLOAD_READY = INSTALLER_SHA256 !== "";
export const WINGET_ID = "SoftwareHive.MQKit";

export const COMPANY = {
  name: "SOFTWARE HIVE S.R.L.",
  site: "https://softwarehive.ro",
  address: "Str. Zorilor 23, Sat Voicești, 247745, Județul Vâlcea, Romania",
  register: "J2026020677006",
  euid: "ROONRC.J2026020677006",
  vat: "RO54366095",
  email: "contact@softwarehive.ro",
};
