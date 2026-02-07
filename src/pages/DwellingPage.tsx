import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Dwelling } from '../types/user-data';

function DwellingPage() {
  const [dwellings, setDwellings] = useState<Dwelling[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Estados para los filtros
  const [filterCity, setFilterCity] = useState("");
  const [filterRooms, setFilterRooms] = useState("");
  const [filterAvailable, setFilterAvailable] = useState("all");
  
  const [sortOrder, setSortOrder] = useState("none"); 

  const navigate = useNavigate();

  const fetchDwellings = () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filterCity) params.append("city", filterCity);
    if (filterRooms) params.append("room", filterRooms);
    if (filterAvailable !== "all") params.append("available", filterAvailable);

    fetch(`http://localhost:8080/dwellings?${params.toString()}`)
      .then((response) => {
        if (!response.ok) throw new Error('Error en la respuesta del servidor');
        return response.json();
      })
      .then((data: Dwelling[]) => {
        // APLICAMOS ORDENAMIENTO EN FRONTEND
        let processedData = [...data];
        if (sortOrder === "asc") {
          processedData.sort((a, b) => a.street.localeCompare(b.street));
        } else if (sortOrder === "desc") {
          processedData.sort((a, b) => b.street.localeCompare(a.street));
        }
        
        setDwellings(processedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando las viviendas:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDwellings();
  }, [sortOrder]); 

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "2px solid #A8DADC",
    backgroundColor: "white",
    color: "#1D3557",
    outline: "none",
    fontSize: "0.95rem",
    fontWeight: 500 as const,
    minWidth: "150px"
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 140px)', width: '100%', padding: '40px 20px', boxSizing: 'border-box', backgroundColor: '#F1FAEE' }}>
      <div style={{ textAlign: 'center', maxWidth: '1200px', width: '100%' }}>
        <h1 style={{ marginBottom: '20px', color: "#1D3557", fontSize: "2.5rem" }}>Parque de Viviendas</h1>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", marginBottom: "40px", display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center", justifyContent: "center", border: "1px solid #E0E0E0" }}>
            <input type="text" placeholder="Filtrar por Ciudad..." value={filterCity} onChange={(e) => setFilterCity(e.target.value)} style={inputStyle} />
            <input type="number" placeholder="Nº Habitaciones" value={filterRooms} onChange={(e) => setFilterRooms(e.target.value)} style={{...inputStyle, width: "120px"}} />
            <select value={filterAvailable} onChange={(e) => setFilterAvailable(e.target.value)} style={inputStyle}>
                <option value="all">Todos los estados</option>
                <option value="true">Disponible</option>
                <option value="false">Ocupada</option>
            </select>

            {/* SELECT DE ORDENAMIENTO */}
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)} 
              style={{...inputStyle, border: "2px solid #457B9D"}}
            >
                <option value="none">Sin orden específico</option>
                <option value="asc">Orden: A-Z (Calle)</option>
                <option value="desc">Orden: Z-A (Calle)</option>
            </select>

            <button onClick={fetchDwellings} style={{ backgroundColor: "#1D3557", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>Buscar</button>
            
            {(filterCity || filterRooms || filterAvailable !== "all" || sortOrder !== "none") && (
                <button onClick={() => { setFilterCity(""); setFilterRooms(""); setFilterAvailable("all"); setSortOrder("none"); }} style={{ backgroundColor: "#FFFFFF", color: "#E63946", border: "2px solid #E63946", padding: "8px 15px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", marginLeft: "10px" }}>Limpiar</button>
            )}
        </div>
        
        {loading ? (
          <div style={{ color: '#1D3557' }}>Cargando...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', justifyContent: 'center' }}>
            {dwellings.map((dwelling) => (
              <div key={dwelling.id} onClick={() => navigate(`/dwellings/${dwelling.id}`)} style={{ border: '1px solid #A8DADC', borderRadius: '15px', padding: '25px', boxShadow: '0 4px 8px rgba(29, 53, 87, 0.08)', backgroundColor: '#fff', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <div>
                  <h3 style={{ margin: '0 0 15px 0', fontSize: '1.3rem', color: '#1D3557' }}>{dwelling.street}</h3>
                  <div style={{ fontSize: '15px', lineHeight: '1.6', color: "#457B9D" }}>
                    <p style={{margin: '5px 0'}}><strong>Ciudad:</strong> {dwelling.city}</p>
                    <p style={{margin: '5px 0'}}><strong>Habitaciones:</strong> {dwelling.room}</p>
                  </div>
                </div>
                <div style={{ marginTop: '20px', padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', backgroundColor: dwelling.available ? '#A8DADC' : '#F4A261', color: dwelling.available ? '#1D3557' : '#991B1B' }}>
                  {dwelling.available ? 'DISPONIBLE' : 'OCUPADA'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DwellingPage;