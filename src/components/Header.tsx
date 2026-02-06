export default function Header() {
    return (
      <header
        style={{
          backgroundColor: "#457B9D",
          color: "white",
          padding: "15px 0",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px" }}>
          Vivienda Social
        </h1>
        <p style={{ margin: "5px 0 0", fontSize: "14px" }}>
          Sistema de gestión de inmuebles y beneficiarios de vivienda social.
        </p>
      </header>
    );
  }
  