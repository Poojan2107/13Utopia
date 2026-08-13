/**
 * Approved client logos / case frames are not in yet.
 * Flip to true only after files land in public/cases/[slug]/ and mediaStatus is "locked".
 */
export const LOCKED_MEDIA = false;

export function showLockedMedia(status?: "sample" | "locked") {
  return LOCKED_MEDIA && status === "locked";
}
