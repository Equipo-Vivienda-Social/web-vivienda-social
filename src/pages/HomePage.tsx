export default function Home() {
    return (
      <div
        style={{
          maxWidth: "900px",
          height: "calc(100vh - 290px)",
          margin: "40px auto",
          padding: "40px",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            color: "#1a1a1a",
          }}
        >          
          Gestión integral de parques de vivienda pública y solicitudes ciudadanas.
        </h1>
  
        <p
          style={{
            fontSize: "1.25rem",
            color: "#555",
            marginBottom: "60px",
          }}
        >
          Elige una opción del menú para comenzar.
        </p>
  

      </div>
    );
  }
  