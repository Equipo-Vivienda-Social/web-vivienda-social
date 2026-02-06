import { NavLink } from "react-router-dom";

export default function Navbar() {
    // Estilos base para los enlaces
    const linkStyle = ({ isActive }: { isActive: boolean }) => ({
        color: isActive ? "#F1FAEE" : "#A8DADC", // Blanco si activo, azul claro si no
        textDecoration: "none",
        fontWeight: 500,
        fontSize: "1rem",
        padding: "8px 16px",
        borderRadius: "6px",
        transition: "all 0.3s ease",
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
    });

    return (
        <nav
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 40px",
            height: "80px",
            backgroundColor: "#1D3557", // Tu azul más oscuro (más elegante)
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
        }}
        >
        {/* SECCIÓN LOGO + TÍTULO */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Icono SVG de "Casa/Refugio" Minimalista */}
            <div style={{ 
                backgroundColor: "#457B9D", 
                padding: "8px", 
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F1FAEE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M3 21h18M5 21V7l8-5 8 5v14" />
                <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9z" />
                </svg>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#F1FAEE", fontWeight: 700, fontSize: "1.2rem", lineHeight: 1 }}>
                    Vivienda Social
                </span>
                <span style={{ color: "#A8DADC", fontSize: "0.75rem", letterSpacing: "0.5px" }}>
                    GESTIÓN MUNICIPAL
                </span>
            </div>
        </div>

        {/* SECCIÓN MENÚ DE NAVEGACIÓN */}
        <div style={{ display: "flex", gap: "8px" }}>
            <NavLink to="/" style={linkStyle}>
            Inicio
            </NavLink>
            <NavLink to="/dwellings" style={linkStyle}>
            Viviendas
            </NavLink>
            <NavLink to="/applicants" style={linkStyle}>
            Solicitantes
            </NavLink>
        </div>
        </nav>
    );
}