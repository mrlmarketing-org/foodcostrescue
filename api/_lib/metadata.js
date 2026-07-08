// Stripe Checkout Session metadata is the only place this app can stash the
// form submission between "create the session" and "the browser comes back
// from Stripe's hosted page" — there's no database. Each metadata value is
// capped at 500 chars by Stripe, so file links are packed as one JSON blob
// when they fit, and fall back to one key per file when they don't.
const MAX_METADATA_VALUE = 480;

export function buildFileMetadata(files) {
  const metadata = {};
  if (!files || !files.length) return metadata;

  const json = JSON.stringify(files.map((f) => ({ n: f.name, u: f.url })));
  if (json.length <= MAX_METADATA_VALUE) {
    metadata.files = json;
    return metadata;
  }

  files.forEach((f, i) => {
    metadata[`file_${i + 1}`] = `${f.name}|${f.url}`.slice(0, MAX_METADATA_VALUE);
  });
  metadata.fileCount = String(files.length);
  return metadata;
}

export function parseFilesFromMetadata(metadata) {
  if (!metadata) return [];

  if (metadata.files) {
    try {
      return JSON.parse(metadata.files).map((f) => ({ name: f.n, url: f.u }));
    } catch {
      return [];
    }
  }

  const count = Number(metadata.fileCount || 0);
  const files = [];
  for (let i = 1; i <= count; i += 1) {
    const raw = metadata[`file_${i}`];
    if (!raw) continue;
    const separatorIndex = raw.indexOf("|");
    if (separatorIndex === -1) continue;
    files.push({ name: raw.slice(0, separatorIndex), url: raw.slice(separatorIndex + 1) });
  }
  return files;
}
