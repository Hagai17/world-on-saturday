// main.ts — entry program for the make.fun bounty "news-image-20261121".
//
// What it does: the entry artwork lives next to this file as `entry.png`.
// The program checks that the file really is a PNG or JPEG image and that
// it fits the competition size limit (1 MiB), then copies it to
// `entry.png` inside the output directory. The grader reads the image
// from there.
//
// Runtime: Node 22, standard library only, no network access.

import { copyFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Largest image the competition accepts: 1 MiB = 1024 * 1024 bytes.
const MAX_IMAGE_BYTES = 1_048_576;

// Magic bytes that start a PNG file: 89 50 4E 47.
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47];
// Magic bytes that start a JPEG file: FF D8 FF.
const JPEG_MAGIC = [0xff, 0xd8, 0xff];

/** True when `data` starts with every byte of `magic`, in order. */
function startsWithBytes(data: Buffer, magic: number[]): boolean {
  if (data.length < magic.length) return false;
  return magic.every((byte, i) => data[i] === byte);
}

/** Human-readable name of the image format, or null when unknown. */
function detectFormat(data: Buffer): "PNG" | "JPEG" | null {
  if (startsWithBytes(data, PNG_MAGIC)) return "PNG";
  if (startsWithBytes(data, JPEG_MAGIC)) return "JPEG";
  return null;
}

function main(): void {
  // The source image sits in the same directory as this program file.
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, "entry.png");

  const image = readFileSync(sourcePath);

  const format = detectFormat(image);
  if (format === null) {
    // Show the first bytes as two-digit hex so the mismatch is easy to see.
    const firstBytes = [...image.subarray(0, 4)]
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(" ");
    throw new Error(
      `entry.png is not a PNG or JPEG image (first bytes: ${firstBytes})`,
    );
  }
  if (image.length > MAX_IMAGE_BYTES) {
    throw new Error(
      `entry.png is ${image.length} bytes, over the ${MAX_IMAGE_BYTES}-byte limit`,
    );
  }

  // MAKEFUN_OUTPUT_DIR replaces the default /output when it is set
  // (the grader sets it; locally it lets us test without touching /output).
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const destPath = join(outDir, "entry.png");
  copyFileSync(sourcePath, destPath);

  console.log(`wrote ${format} image (${image.length} bytes) to ${destPath}`);
}

// Report failures as one clear line and exit non-zero, instead of
// dumping a raw stack trace on whoever runs the program.
try {
  main();
} catch (err) {
  console.error(`error: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
