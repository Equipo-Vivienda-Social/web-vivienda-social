import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Estilo común para los títulos de columna (Ley de Semejanza)
  const headingStyle: React.CSSProperties = {
    color: "#A8DADC", 
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
            Ensuring access to decent, safe and affordable housing for all, 
            contributing to the development of inclusive communities.
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
              SDG 11 commitment
            </p>
            <p style={{ margin: 0, fontSize: "0.75rem" }}>Sustainable Cities and Communities</p>
          </div>
        </div>

        {/* COLUMNA 2: ENLACES RÁPIDOS (Ley de Proximidad) */}
        <div>
          <h4 style={headingStyle}>Citizenship</h4>
          <nav>
            <Link to="/dwellings" style={linkStyle}>See Housing Stock</Link>
            <Link to="/applicants" style={linkStyle}>Check Applications</Link>
            <Link to="#" style={linkStyle}>Access Requirements</Link>
            <Link to="#" style={linkStyle}>Transparency Portal</Link>
          </nav>
        </div>

        {/* COLUMNA 3: CONTACTO E INSTITUCIONAL (Ley de Proximidad) */}
        <div>
          <h4 style={headingStyle}>Institutional Contact</h4>
          <div style={{ fontSize: "0.95rem", opacity: 0.9 }}>
            <p style={{ marginBottom: "10px" }}>
            <svg width="23px" height="23px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1D3557"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="15" height="15" fill="#1D3557"></rect> <path d="M18 9C18 13.7462 14.2456 18.4924 12.6765 20.2688C12.3109 20.6827 11.6891 20.6827 11.3235 20.2688C9.75444 18.4924 6 13.7462 6 9C6 7 7.5 3 12 3C16.5 3 18 7 18 9Z" stroke="#FFFFFF" strokeLinejoin="round"></path> <circle cx="12" cy="9" r="2" stroke="#FFFFFF" strokeLinejoin="round"></circle> </g></svg>
            &nbsp;  Violeta Parra, 9 50015 Zaragoza
            </p>
            <p style={{ marginBottom: "10px" }}>
            <svg width= "20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            &nbsp; 900 123 456 (Call Center)
              </p>
            <p style={{ marginBottom: "10px" }}> 
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#ffffff"></path> </g></svg>
            &nbsp; dwellings@svalero-example.com
              </p>
            <p style={{ fontSize: "0.8rem", marginTop: "20px", color: "#A8DADC" }}>
              Schedule: M-F from 9:00 to 14:00
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
        <span>&copy; {currentYear} Municipal Housing System.</span>
        <span>Privacy Policy | Legal Notice | Accessibility</span>
      </div>
    </footer>
  );
}