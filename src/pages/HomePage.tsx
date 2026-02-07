import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "calc(100vh - 80px)", 
        backgroundColor: "#F1FAEE", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div style={{ textAlign: "left" }}>
          <div style={{ 
              display: "inline-block", 
              padding: "6px 12px", 
              backgroundColor: "#A8DADC", 
              color: "#1D3557", 
              borderRadius: "20px", 
              fontSize: "0.85rem", 
              fontWeight: 700, 
              marginBottom: "20px"
          }}>
              NEW CALL FOR APPLICATIONS 2026
          </div>
          
          <h1
            style={{
              fontSize: "3.5rem", // Texto grande e impactante
              lineHeight: "1.1",
              margin: "0 0 24px 0",
              color: "#1D3557",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 800
            }}
          >
            Dwelling management <br/>
            <span style={{ color: "#457B9D" }}>public and fair.</span>
          </h1>

          <p
            style={{fontSize: "1.2rem", color: "#555", lineHeight: "1.6", marginBottom: "40px", maxWidth: "500px"}}
          >
            Manage the municipal property portfolio and handle citizen requests from a centralised and transparent platform.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <Link
              to="/dwellings"
              style={{padding: "14px 28px", backgroundColor: "#F4A261", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: 600, boxShadow: "0 4px 14px rgba(230, 57, 70, 0.3)", transition: "transform 0.2s"}}
            >
              View Dwellings
            </Link>
            
            <Link
              to="/applicants"
              style={{padding: "14px 28px", backgroundColor: "#fff", color: "#1D3557", border: "2px solid #1D3557", borderRadius: "8px", textDecoration: "none", fontWeight: 600}}
            >
              Manage Applicants
            </Link>
          </div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN DECORATIVA */}
        <div style={{ 
            position: "relative",
            height: "500px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "20px 20px 0px #A8DADC" // Efecto de sombra sólida moderna
        }}>
            <img 
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop" 
                alt="Edificio moderno de viviendas"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
             {/* Tarjeta flotante decorativa */}
            <div style={{
                position: "absolute",
                bottom: "30px",
                left: "-20px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                maxWidth: "200px"
            }}>
                <div style={{ fontSize: "2rem" }}>🏠</div>
                <div>
                    <div style={{ fontWeight: "bold", color: "#1D3557" }}>+1,200</div>
                    <div style={{ fontSize: "0.8rem", color: "#888" }}>Host families</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}