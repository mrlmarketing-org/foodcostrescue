import { handleUpload } from "@vercel/blob/client";

const ALLOWED_CONTENT_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/heic",
  "image/heif",
];

// Issues short-lived client tokens so invoice files upload straight from the
// browser to Vercel Blob — a serverless function's ~4.5MB request body limit
// would otherwise cap multi-file invoice uploads.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const jsonResponse = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ALLOWED_CONTENT_TYPES,
        addRandomSuffix: true,
        maximumSizeInBytes: 25 * 1024 * 1024,
      }),
    });

    res.status(200).json(jsonResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
