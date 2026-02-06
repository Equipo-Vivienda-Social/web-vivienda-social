import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Estilo común para los títulos de columna (Ley de Semejanza)
  const headingStyle: React.CSSProperties = {
    color: "#A8DADC", // Azul claro para destacar sobre fondo oscuro
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "20px",
    borderBottom: "2px solid #457B9D",
    display: "inline-block",
    paddingBottom: "5px"
  };

  // Estilo común para los enlaces (Ley de Semejanza)
  const linkStyle: React.CSSProperties = {
    color: "#F1FAEE",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    fontSize: "0.95rem",
    opacity: 0.9,
    transition: "opacity 0.2s"
  };

  return (
    <footer
      style={{
        backgroundColor: "#1D3557", // Fondo oscuro (Ley de Región Común)
        color: "#F1FAEE",
        padding: "60px 20px 20px",
        marginTop: "auto",
        borderTop: "4px solid #457B9D", // Detalle estético
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "40px"
        }}
      >
        {/* COLUMNA 1: IDENTIDAD Y AGENDA 2030 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
             {/* Pequeño guiño visual a la casa/refugio */}
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8DADC" strokeWidth="2">
                <path d="M3 21h18M5 21V7l8-5 8 5v14" />
            </svg>
            <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>Vivienda Social</span>
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.6", opacity: 0.8 }}>
            Garantizando el acceso a una vivienda digna, segura y asequible para todos, 
            contribuyendo al desarrollo de comunidades inclusivas.
          </p>
          
          {/* Badge de Agenda 2030 */}
          <div style={{ 
              marginTop: "20px", 
              backgroundColor: "rgba(255,255,255,0.1)", 
              padding: "10px", 
              borderRadius: "8px",
              display: "inline-block"
          }}>
            <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: "bold", color: "#F4A261" }}>
              compromiso ODS 11
            </p>
            <p style={{ margin: 0, fontSize: "0.75rem" }}>Ciudades y Comunidades Sostenibles</p>
          </div>
        </div>

        {/* COLUMNA 2: ENLACES RÁPIDOS (Ley de Proximidad) */}
        <div>
          <h4 style={headingStyle}>Ciudadanía</h4>
          <nav>
            <Link to="/dwellings" style={linkStyle}>Ver Parque de Viviendas</Link>
            <Link to="/applicants" style={linkStyle}>Consultar Solicitudes</Link>
            <Link to="#" style={linkStyle}>Requisitos de Acceso</Link>
            <Link to="#" style={linkStyle}>Portal de Transparencia</Link>
          </nav>
        </div>

        {/* COLUMNA 3: CONTACTO E INSTITUCIONAL (Ley de Proximidad) */}
        <div>
          <h4 style={headingStyle}>Contacto Institucional</h4>
          <div style={{ fontSize: "0.95rem", opacity: 0.9 }}>
            <p style={{ marginBottom: "10px" }}>📍 Plaza del Ayuntamiento, 1</p>
            <p style={{ marginBottom: "10px" }}>📞 900 123 456 (Atención Ciudadana)</p>
            <p style={{ marginBottom: "10px" }}>✉️ vivienda@ayuntamiento.gob</p>
            <p style={{ fontSize: "0.8rem", marginTop: "20px", color: "#A8DADC" }}>
              Horario: L-V de 9:00 a 14:00
            </p>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR DE COPYRIGHT */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "0.85rem",
          opacity: 0.6,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <span>&copy; {currentYear} Sistema Municipal de Vivienda.</span>
        <span>Política de Privacidad | Aviso Legal | Accesibilidad</span>
      </div>
    </footer>
  );
}