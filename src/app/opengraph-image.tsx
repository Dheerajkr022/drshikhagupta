import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Dr. Shikha Gupta — Consultant Paediatrician (MBBS VMMC, MD Pediatrics RML Hospital) in Kamla Nagar, Delhi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          padding: "54px 64px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Accent Glows */}
        <div
          style={{
            position: "absolute",
            top: "-90px",
            right: "-90px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            backgroundColor: "rgba(30, 86, 160, 0.4)",
            filter: "blur(75px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-90px",
            left: "-90px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            backgroundColor: "rgba(10, 147, 150, 0.3)",
            filter: "blur(75px)",
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
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#1E56A0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: 800,
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              +
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
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
                Consultant Paediatrician • Kamla Nagar, Delhi
              </span>
            </div>
          </div>

          {/* Academic Accreditations */}
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
              MBBS (VMMC) • MD Pediatrics (RML)
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            margin: "auto 0",
            maxWidth: "1040px",
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
              Dedicated Child Specialist • North Delhi
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Dedicated Paediatrician in Kamla Nagar for Your Child&apos;s Health & Milestones.
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.82)",
              lineHeight: 1.45,
              margin: 0,
              maxHeight: "68px",
              overflow: "hidden",
            }}
          >
            Well-Baby Care • IAP Child Vaccination • Growth Tracking • Acute Illness & Fever Care • Breastfeeding Guidance
          </p>
        </div>

        {/* Footer Info Strip */}
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
              📍 Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi – 110007
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
              +91 99586 83094 • drshikhagupta.com
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
