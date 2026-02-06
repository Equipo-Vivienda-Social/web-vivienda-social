export default function Header() {
    return (
      <header
        style={{
          backgroundColor: "#457B9D", // Azul medio de la paleta
          color: "#F1FAEE", // Crema claro para el texto
          padding: "20px 0",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // Sombra más suave
          width: "100%",
        }}
      >
        <div>
            <div>
                <img src="../../public/img/vivienda_humans.webp" alt="bienestar iconos" 
                    style={{
                        height: "60px",
                        width: "60px"
                    }}/>
            </div>
        </div>
        <div>
            <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 600 }}>
            
            Vivienda Social
            </h1>
            <p style={{ margin: "8px 0 0", fontSize: "16px", opacity: 0.9 }}>
            Sistema de gestión de inmuebles y beneficiarios.
            </p>            
        </div>
      </header>
    );
  }