"use client";

import { useState } from "react";

function initials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

/**
 * Candidate photo with a neutral initials fallback. Many registry image
 * paths do not have files yet, so the fallback is expected, not exceptional.
 * The box has a fixed aspect ratio, so image loading never shifts layout.
 */
export default function CandidateAvatar({
  name,
  image,
  size = "md",
  priority = false,
}: {
  name: string;
  image: string | null;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = !!image && !failed;
  return (
    <span className={`cmp-avatar cmp-avatar--${size}`} aria-hidden={showImage ? undefined : true}>
      {/* Initials always sit underneath, so a missing photo never leaves a
          blank circle, even before JavaScript has loaded. */}
      <span className="cmp-avatar__initials" aria-hidden="true">
        {initials(name)}
      </span>
      {showImage && (
        // eslint-disable-next-line @next/next/no-img-element -- matches existing site images; many paths are unoptimised uploads
        <img
          // A server-rendered image can fail before hydration, in which case
          // onError never fires; detect that once the element is attached.
          ref={(el) => {
            if (el && el.complete && el.naturalWidth === 0) setFailed(true);
          }}
          src={image}
          alt={name}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
