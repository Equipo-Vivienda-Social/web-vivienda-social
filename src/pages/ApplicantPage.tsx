import React, { useEffect, useState } from 'react'
import type { Applicant } from '../types/user-data'
import { NavLink } from 'react-router-dom';
import { data } from 'react-router-dom';

function ApplicantPage() {
    const [ applicants, setApplicants ] = useState<Applicant[]>([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/applicants')
          .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json();
          })
          .then((data) => {
            setApplicants(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error cargando los solicitantes:", error);
            setLoading(false);
          });
    }, []);

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
                Solicitantes
            </h1>
            {applicants.length === 0 && (
                <div style={{
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    color: '#457B9D',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                    No se encontraron solicitantes registrados en el sistema
                </div>
            )}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                justifyContent: 'center'
            }}>
                {applicants.map((applicant) => (
                    <div key={applicant.id} style={{
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
                                <NavLink
                                    to={`/applicants/${applicant.id}`}
                                    style={() => ({
                                        color: '#1D3557',
                                        textDecoration: 'none',
                                        fontWeight: 700
                                    })}>
                                        {applicant.name}
                                </NavLink>
                            </h3>
                            <div style={{ fontSize: '15px', lineHeight: '1.6', color: "#457B9D" }}>
                            <p style={{margin: '5px 0'}}><strong>Nombre:</strong> {applicant.name}</p>
                            <p style={{margin: '5px 0'}}><strong>DNI:</strong> {applicant.dni}</p>
                            <p style={{margin: '5px 0'}}><strong>Miembros familiares:</strong> {applicant.familyMenbers}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}

            </div>
        </div>

    </div>
  )
}

export default ApplicantPage