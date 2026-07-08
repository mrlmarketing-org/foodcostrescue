import { getCountries, getCountryCallingCode } from "libphonenumber-js/min";

// Full ISO country list with dial codes, built from libphonenumber-js's own
// metadata (rather than a separate hand-maintained list) so it can never
// drift out of sync with what the validator actually accepts.
const regionNames = typeof Intl.DisplayNames === "function" ? new Intl.DisplayNames(["en"], { type: "region" }) : null;

export const phoneCountries = getCountries()
  .map((code) => ({
    code,
    name: regionNames?.of(code) || code,
    dialCode: getCountryCallingCode(code),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const DEFAULT_PHONE_COUNTRY = "US";
