"use client";

import { useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    background: "radial-gradient(circle at 18% 18%, rgba(236,72,153,0.10), transparent 28%), radial-gradient(circle at 82% 82%, rgba(109,34,232,0.15), transparent 30%), linear-gradient(135deg, #fbf8ff 0%, #f4efff 100%)",
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#22143d",
  },
  bgTwoLeft: {
    position: "fixed",
    left: "-70px",
    top: "-80px",
    fontSize: "440px",
    lineHeight: 1,
    color: "rgba(109,34,232,0.05)",
    fontWeight: 900,
    pointerEvents: "none",
    transform: "rotate(-12deg)",
  },
  bgTwoRight: {
    position: "fixed",
    right: "-55px",
    bottom: "-130px",
    fontSize: "390px",
    lineHeight: 1,
    color: "rgba(236,72,153,0.06)",
    fontWeight: 900,
    pointerEvents: "none",
    transform: "rotate(14deg)",
  },
  card: {
    width: "min(100%, 520px)",
    position: "relative",
    zIndex: 1,
    background: "rgba(255,255,255,0.90)",
    border: "1px solid rgba(109,34,232,0.12)",
    borderRadius: 34,
    boxShadow: "0 28px 90px rgba(76,29,149,0.16)",
    padding: "44px 34px 34px",
    textAlign: "center",
    overflow: "hidden",
  },
  logo: {
    width: 122,
    height: 122,
    objectFit: "contain",
    margin: "0 auto 14px",
    display: "block",
    filter: "drop-shadow(0 16px 28px rgba(236,72,153,0.20))",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 13px",
    borderRadius: 999,
    background: "#f3ecff",
    color: "#6d22e8",
    fontSize: 13,
    fontWeight: 900,
    marginBottom: 16,
  },
  title: {
    fontSize: "clamp(30px, 5vw, 42px)",
    lineHeight: 1.03,
    letterSpacing: "-0.045em",
    margin: "0 0 14px",
    color: "#21123c",
    fontWeight: 950,
  },
  brand: {
    color: "#6d22e8",
  },
  subtitle: {
    margin: "0 auto 28px",
    color: "#6f6380",
    fontSize: 16,
    fontWeight: 650,
    lineHeight: 1.5,
    maxWidth: 390,
  },
  actions: {
    display: "grid",
    gap: 12,
  },
  primary: {
    width: "100%",
    border: 0,
    borderRadius: 19,
    padding: "18px 22px",
    background: "linear-gradient(135deg, #4c1d95 0%, #6d22e8 54%, #8b2cf6 100%)",
    color: "#fff",
    fontSize: 17,
    fontWeight: 950,
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 15px 34px rgba(109,34,232,0.32)",
  },
  secondary: {
    width: "100%",
    borderRadius: 19,
    padding: "16px 22px",
    background: "#f6f1ff",
    color: "#6d22e8",
    fontSize: 16,
    fontWeight: 900,
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },
  note: {
    margin: "24px 0 0",
    paddingTop: 20,
    borderTop: "1px solid #eee7f8",
    color: "#8a8197",
    fontSize: 13,
    fontWeight: 650,
    lineHeight: 1.45,
  },
};

export default function InviteLandingClient() {
  const params = useParams();
  const searchParams = useSearchParams();
  const parcheId = typeof params?.id === "string" ? params.id : "";
  const side = searchParams?.get("side") || "";

  const deepLink = useMemo(() => {
    const path = parcheId ? `parche/${encodeURIComponent(parcheId)}` : "";
    const query = side ? `?side=${encodeURIComponent(side)}` : "";
    return `parcha2://${path}${query}`;
  }, [parcheId, side]);

  return (
    <main style={styles.page}>
      <div style={styles.bgTwoLeft}>2</div>
      <div style={styles.bgTwoRight}>2</div>
      <section style={styles.card}>
        <img src="/logo-2.png" alt="Parcha2" style={styles.logo} />
        <div style={styles.eyebrow}>✨ Invitación externa</div>
        <h1 style={styles.title}>
          Te invitaron a un parche en <span style={styles.brand}>Parcha2</span>
        </h1>
        <p style={styles.subtitle}>Abre la app para ver el plan, conocer los detalles y aceptar la invitación.</p>
        <div style={styles.actions}>
          <a href={deepLink} style={styles.primary}>
            <span>Abrir en Parcha2</span>
            <span>›</span>
          </a>
          <a href="/" style={styles.secondary}>
            <span>Conocer Parcha2</span>
            <span>›</span>
          </a>
        </div>
        <p style={styles.note}>Si la app no abre, instala Parcha2 y vuelve a tocar el link de invitación.</p>
      </section>
    </main>
  );
}
