import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract dynamic query params with thoughtful healthcare defaults
    const title =
      searchParams.get("title") ||
      "Dr. Shikha Gupta — Consultant Paediatrician in Kamla Nagar";
    const desc =
      searchParams.get("desc") ||
      "MBBS (VMMC & Safdarjung Hospital), MD Pediatrics (RML Hospital). Attentive, unhurried paediatric care at Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi.";
    const category = searchParams.get("badge") || "Paediatric Healthcare";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#0B192C",
            padding: "50px 60px",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            position: "relative",
          }}
        >
          {/* Subtle Accent Glows */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              backgroundColor: "rgba(30, 86, 160, 0.35)",
              filter: "blur(70px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              backgroundColor: "rgba(10, 147, 150, 0.25)",
              filter: "blur(70px)",
            }}
          />

          {/* Top Brand Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              paddingBottom: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#1E56A0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: 800,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                +
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Dr. Shikha Gupta
                </span>
                <span
                  style={{
                    color: "#6BA4E8",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Consultant Paediatrician • Child Specialist
                </span>
              </div>
            </div>

            {/* Credential Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "#34D399",
                  fontSize: "12px",
                  fontWeight: 700,
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                ✓ DMC Registered
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(30, 86, 160, 0.3)",
                  color: "#93C5FD",
                  fontSize: "12px",
                  fontWeight: 700,
                  border: "1px solid rgba(147, 197, 253, 0.25)",
                }}
              >
                MBBS (VMMC) • MD (RML)
              </span>
            </div>
          </div>

          {/* Center Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              margin: "auto 0",
              maxWidth: "1020px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#38BDF8",
                }}
              >
                {category}
              </span>
            </div>

            <h1
              style={{
                fontSize: title.length > 55 ? "42px" : "50px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.45,
                margin: 0,
                maxHeight: "68px",
                overflow: "hidden",
              }}
            >
              {desc}
            </p>
          </div>

          {/* Bottom Footer Ribbon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              paddingTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                📍 Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>•</span>
              <span
                style={{
                  color: "#FBBF24",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                ★ 4.9 (117+ Google Reviews)
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  color: "#6BA4E8",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                drshikhagupta.com
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
