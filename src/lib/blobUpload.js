import { upload } from "@vercel/blob/client";

// Uploads straight from the browser to Vercel Blob via a short-lived token
// from /api/blob-upload — keeps large invoice files off our own serverless
// function's request body.
export async function uploadInvoiceFiles(files) {
  const uploaded = await Promise.all(
    files.map((file) =>
      upload(`invoice-uploads/${Date.now()}-${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/api/blob-upload",
      })
    )
  );
  return uploaded.map((result, i) => ({ name: files[i].name, url: result.url }));
}
