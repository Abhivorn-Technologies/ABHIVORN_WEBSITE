import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Abhivorn Technologies — Custom software, web & mobile app development in Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share preview (WhatsApp, LinkedIn, X, Facebook) for every page that doesn't set its own image. */
export default async function OgImage() {
  // Real logo mark, not a stand-in letter
  const mark = await readFile(join(process.cwd(), "public/icon-512.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #002a55 0%, #003a75 55%, #00699e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={markSrc} width={60} height={60} />
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Abhivorn Technologies</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, maxWidth: 980 }}>
            Custom software, web &amp; mobile apps built to grow your business
          </div>
          <div style={{ marginTop: 28, fontSize: 30, opacity: 0.9 }}>HRMS · Healthcare · AI · E-commerce</div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, opacity: 0.95 }}>
          <span>50+ projects delivered</span>
          <span>·</span>
          <span>Hyderabad, India</span>
          <span>·</span>
          <span>abhivorn.com</span>
        </div>
      </div>
    ),
    size,
  );
}
