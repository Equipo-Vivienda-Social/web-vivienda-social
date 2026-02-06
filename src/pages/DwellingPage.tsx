import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// Asegúrate de que este archivo exista como acordamos
import type { Dwelling } from '../types/dwellings';

function DwellingPage() {
  // Estado para guardar las viviendas traídas de la API
  const [dwellings, setDwellings] = useState<Dwelling[]>([]);
  // Estado para manejar la carga visual
  const [loading, setLoading] = useState(true);

  // Hook de efecto para cargar los datos al entrar en la página
  useEffect(() => {
    fetch('http://localhost:8080/dwellings')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        setDwellings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando las viviendas:", error);
        setLoading(false);
      });
  }, []);

  // Vista de carga
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh', 
        color: '#1D3557',
        fontSize: '1.2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        Cargando parque de viviendas...
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      minHeight: 'calc(100vh - 140px)', 
      width: '100%',
      padding: '40px 20px',
      boxSizing: 'border-box',
      backgroundColor: '#F1FAEE' // Fondo general crema claro
    }}>
      
      <div style={{ textAlign: 'center', maxWidth: '1200px', width: '100%' }}>
        <h1 style={{ marginBottom: '30px', color: "#1D3557", fontSize: "2.5rem" }}>
          Parque de Viviendas
        </h1>
        
        {/* Mensaje si no hay datos */}
        {dwellings.length === 0 && (
            <div style={{ 
                padding: '20px', 
                backgroundColor: '#fff', 
                borderRadius: '10px', 
                color: '#457B9D',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
                No se encontraron viviendas registradas en el sistema.
            </div>
        )}

        {/* Rejilla de Tarjetas */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '25px', 
          justifyContent: 'center' 
        }}>
          {dwellings.map((dwelling) => (
            <div key={dwelling.id} style={{
              border: '1px solid #A8DADC', // Borde azul claro
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 8px rgba(29, 53, 87, 0.08)', // Sombra suave
              backgroundColor: '#fff',
              textAlign: 'left', 
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: '0 0 15px 0', fontSize: '1.3rem' }}>
                    {/* Enlace dinámico al detalle de la vivienda */}
                    <NavLink
                        to={`/dwellings/${dwelling.id}`}
                        style={() => ({
                            color: '#1D3557', // Azul oscuro
                            textDecoration: 'none',
                            fontWeight: 700
                        })}
                    >
                        {dwelling.street}
                    </NavLink>                
                </h3>
                
                <div style={{ fontSize: '15px', lineHeight: '1.6', color: "#457B9D" }}>
                  <p style={{margin: '5px 0'}}><strong>Ciudad:</strong> {dwelling.city}</p>
                  <p style={{margin: '5px 0'}}><strong>Tipo:</strong> {dwelling.type}</p>
                  <p style={{margin: '5px 0'}}><strong>Habitaciones:</strong> {dwelling.room}</p>
                </div>
              </div>

              <div>
                <div style={{ 
                  marginTop: '20px', 
                  padding: '10px', 
                  borderRadius: '8px', 
                  textAlign: 'center',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                  // Lógica visual de disponibilidad
                  backgroundColor: dwelling.available ? '#A8DADC' : '#FEE2E2',
                  color: dwelling.available ? '#1D3557' : '#991B1B'
                }}>
                  {dwelling.available ? 'DISPONIBLE' : 'OCUPADA'}
                </div>
                
                <div style={{ 
                    marginTop: '15px', 
                    fontSize: '12px', 
                    color: '#A8DADC', 
                    borderTop: '1px solid #F1FAEE', 
                    paddingTop: '10px',
                    textAlign: 'right'
                }}>
                  Construcción: {dwelling.buildDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DwellingPage;