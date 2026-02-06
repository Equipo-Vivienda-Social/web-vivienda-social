import React from 'react'
import { applicants } from '../data/applicants' 
import { NavLink } from 'react-router-dom';

function DwellingPage() {

  const candidatos = Array.from(new Set(applicants.map((applicant) => applicant.name))).sort();

  return (
    
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '10vh', 
      width: '100%',
      padding: '40px 20px',
      boxSizing: 'border-box',
      backgroundColor: '#f9f9f9' 
    }}>
      
      <div style={{ textAlign: 'center', maxWidth: '1200px', width: '100%' }}>
        <h1 style={{ marginBottom: '10px' }}>Listado de Solicitantes</h1>
                
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '25px', 
          marginTop: '30px',
          justifyContent: 'center' 
        }}>
          {applicants.map((applicant) => (
            <div key={applicant.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              textAlign: 'left', 
              transition: 'transform 0.2s',
            }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '1.2rem' }}>
                <NavLink
                    to={`/applicants/${applicant.id}`}
                    style={() => ({color: 'black'})}
                >
                    {applicant.name} {applicant.surname}
                </NavLink>                
            </h3>
              
              <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <p><strong>DNI:</strong> {applicant.dni}</p>
                <p><strong>Salario:</strong> {applicant.salary}€</p>
                <p><strong>Miembros familiares:</strong> {applicant.family_members} pers.</p>
                
                <div style={{ 
                  marginTop: '15px', 
                  padding: '10px', 
                  borderRadius: '8px', 
                  textAlign: 'center',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                  backgroundColor: applicant.employed === 1 ? '#dcfce7' : '#fee2e2',
                  color: applicant.employed === 1 ? '#166534' : '#991b1b'
                }}>
                  {applicant.employed === 1 ? 'ACTIVO' : 'DESEMPLEADO'}
                </div>
              </div>
              
              <div style={{ marginTop: '15px', fontSize: '11px', color: '#aaa', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                Referencia Vivienda: #{applicant.dwelling_id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DwellingPage