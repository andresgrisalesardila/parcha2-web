const APP_NAME = "Parcha2";

function cleanText(value) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function buildLegacyDeepLink(parcheId, side) {
  const cleanId = cleanText(parcheId);
  const cleanSide = cleanText(side);
  const path = cleanId ? `parche/${encodeURIComponent(cleanId)}` : "";
  const query = cleanSide ? `?side=${encodeURIComponent(cleanSide)}` : "";

  // IMPORTANTE:
  // La build actual instalada en celulares todavía puede tener registrado el esquema viejo "desparcha2://".
  // El esquema nuevo "parcha2://" solo funcionará después de instalar una build nueva que lo incluya nativamente.
  // Por eso la landing usa el esquema viejo por compatibilidad, aunque la marca visible sea Parcha2.
  return `desparcha2://${path}${query}`;
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
    background:
      "radial-gradient(circle at 18% 14%, rgba(236,72,153,0.10), transparent 28%), radial-gradient(circle at 82% 78%, rgba(109,34,232,0.16), transparent 32%), linear-gradient(135deg, #fbf8ff 0%, #f4efff 100%)",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#22143d",
    overflow: "hidden",
  },
  bgTwoLeft: {
    position: "fixed",
    left: "-100px",
    top: "-120px",
    fontSize: "430px",
    lineHeight: 1,
    color: "rgba(109,34,232,0.042)",
    fontWeight: 950,
    pointerEvents: "none",
    transform: "rotate(-12deg)",
    userSelect: "none",
  },
  bgTwoRight: {
    position: "fixed",
    right: "-90px",
    bottom: "-160px",
    fontSize: "390px",
    lineHeight: 1,
    color: "rgba(236,72,153,0.055)",
    fontWeight: 950,
    pointerEvents: "none",
    transform: "rotate(14deg)",
    userSelect: "none",
  },
  glow: {
    position: "fixed",
    width: 320,
    height: 320,
    borderRadius: 999,
    background: "rgba(109,34,232,0.10)",
    filter: "blur(70px)",
    right: "18%",
    top: "18%",
    pointerEvents: "none",
  },
  card: {
    width: "min(100%, 540px)",
    position: "relative",
    zIndex: 1,
    background: "rgba(255,255,255,0.92)",
    border: "1px solid rgba(109,34,232,0.12)",
    borderRadius: 34,
    boxShadow: "0 28px 90px rgba(76,29,149,0.16)",
    padding: "42px 32px 32px",
    textAlign: "center",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  logo: {
    width: 130,
    height: 130,
    objectFit: "contain",
    margin: "0 auto 12px",
    display: "block",
    filter: "drop-shadow(0 16px 28px rgba(236,72,153,0.22))",
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
    fontSize: "clamp(29px, 5vw, 42px)",
    lineHeight: 1.04,
    letterSpacing: "-0.045em",
    margin: "0 0 14px",
    color: "#21123c",
    fontWeight: 950,
  },
  brand: { color: "#6d22e8" },
  subtitle: {
    margin: "0 auto 27px",
    color: "#6f6380",
    fontSize: 16,
    fontWeight: 650,
    lineHeight: 1.5,
    maxWidth: 410,
  },
  actions: { display: "grid", gap: 12 },
  primary: {
    width: "100%",
    border: 0,
    borderRadius: 19,
    padding: "18px 22px",
    background:
      "linear-gradient(135deg, #4c1d95 0%, #6d22e8 54%, #8b2cf6 100%)",
    color: "#fff",
    fontSize: 17,
    fontWeight: 950,
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 15px 34px rgba(109,34,232,0.32)",
    boxSizing: "border-box",
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

export default function InviteLanding({ parcheId = "", side = "" }) {
  const deepLink = buildLegacyDeepLink(parcheId, side);

  return (
    <main style={styles.page}>
      <div style={styles.bgTwoLeft}>2</div>
      <div style={styles.bgTwoRight}>2</div>
      <div style={styles.glow} />
      <section style={styles.card}>
        <img src="/logo-2.png" alt="Parcha2" style={styles.logo} />
        <div style={styles.eyebrow}>✨ Invitación externa</div>
        <h1 style={styles.title}>
          Te invitaron a un parche en <span style={styles.brand}>{APP_NAME}</span>
        </h1>
        <p style={styles.subtitle}>
          Abre la app para ver el plan, conocer los detalles y aceptar la invitación.
        </p>
        <div style={styles.actions}>
          <a href={deepLink} style={styles.primary}>
            <span>Abrir en {APP_NAME}</span>
            <span>›</span>
          </a>
          <a href="/" style={styles.secondary}>
            <span>Conocer {APP_NAME}</span>
            <span>›</span>
          </a>
        </div>
        <p style={styles.note}>
          Si la app no abre, instala o actualiza {APP_NAME} y vuelve a tocar el link de invitación.
        </p>
      </section>
    </main>
  );
}
