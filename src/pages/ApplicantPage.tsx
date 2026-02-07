import React, { useEffect, useState } from 'react'
import type { Applicant } from '../types/user-data'
import { useNavigate } from 'react-router-dom';

function ApplicantPage() {
        const [ applicants, setApplicants ] = useState<Applicant[]>([]);
        const [ loading, setLoading ] = useState(true);
        
        // Filtros
        const [filterEmployed, setFilterEmployed] = useState("all");
        const [filterFamily, setFilterFamily] = useState("");
        const [filterSalary, setFilterSalary] = useState(""); // Buscaremos >= que este valor en el frontend

        const navigate = useNavigate();

        const fetchApplicants = () => {
            setLoading(true);
            const params = new URLSearchParams();
            
            if (filterEmployed !== "all") params.append("employed", filterEmployed);
            if (filterFamily) params.append("familyMembers", filterFamily);
            // Nota: No enviamos salary al backend para poder filtrar por "Mayor que" en el frontend
            // Si quisieras exacto: if (filterSalary) params.append("salary", filterSalary);

            fetch(`http://localhost:8080/applicants?${params.toString()}`)
            .then((response) => {
                if (!response.ok) throw new Error('Error en la respuesta del servidor');
                return response.json();
            })
            .then((data: Applicant[]) => {
                // Lógica Frontend: Filtrar salario mayor o igual que X
                let filteredData = data;
                if (filterSalary) {
                    const minSalary = parseInt(filterSalary);
                    filteredData = data.filter(app => app.salary >= minSalary);
                }
                
                setApplicants(filteredData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error cargando los solicitantes:", error);
                setLoading(false);
            });
        };

        useEffect(() => {
            fetchApplicants();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const inputStyle = {
            padding: "10px 15px",
            borderRadius: "6px",
            border: "2px solid #A8DADC",
            backgroundColor: "#FFFFFF",
            color: "#1D3557",
            outline: "none",
            fontSize: "0.95rem",
            fontWeight: 500 as const,
            minWidth: "150px"
        };

        if (loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: '#1D3557' }}>
                    Cargando listado de solicitantes...
                </div>
            );
        }

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 140px)', width: '100%', padding: '40px 20px', boxSizing: 'border-box', backgroundColor: '#F1FAEE'
        }}>
            <div style={{ textAlign: 'center', maxWidth: '1200px', width: '100%' }}>
                <h1 style={{ marginBottom: '20px', color: "#1D3557", fontSize: "2.5rem" }}>
                    Ciudadanos Solicitantes
                </h1>
                
                {/* --- BARRA DE FILTROS --- */}
                <div style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    marginBottom: "40px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #E0E0E0"
                }}>
                    <select 
                        value={filterEmployed}
                        onChange={(e) => setFilterEmployed(e.target.value)}
                        style={inputStyle}
                    >
                        <option value="all">Situación Laboral (Todos)</option>
                        <option value="true">Con Empleo</option>
                        <option value="false">Desempleado</option>
                    </select>

                    <input 
                        type="number" 
                        placeholder="Miembros familiares" 
                        value={filterFamily}
                        onChange={(e) => setFilterFamily(e.target.value)}
                        style={{...inputStyle, width: "160px"}}
                    />

                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <span style={{fontSize: "0.9rem", color: "#457B9D"}}>Salario min:</span>
                        <input 
                            type="number" 
                            placeholder="Ej: 1500" 
                            value={filterSalary}
                            onChange={(e) => setFilterSalary(e.target.value)}
                            style={{...inputStyle, width: "100px", backgroundColor: "#FFFFFF", color: "#1D3557"}}
                        />
                        <span style={{fontSize: "0.9rem", color: "#457B9D"}}>€</span>
                    </div>

                    <button 
                        onClick={fetchApplicants}
                        style={{
                            backgroundColor: "#1D3557",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Filtrar
                    </button>
                </div>
                {/* --- FIN BARRA DE FILTROS --- */}

                {applicants.length === 0 && (
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', color: '#457B9D' }}>
                        No se encontraron solicitantes con esos criterios.
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', justifyContent: 'center' }}>
                    {applicants.map((applicant) => (
                        <div 
                            key={applicant.id} 
                            onClick={() => navigate(`/applicants/${applicant.id}`)}
                            style={{
                                border: '1px solid #A8DADC', borderRadius: '15px', padding: '25px',
                                boxShadow: '0 4px 8px rgba(29, 53, 87, 0.08)', backgroundColor: '#fff',
                                textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                                cursor: 'pointer', transition: 'transform 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            <div>
                                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', color: '#1D3557' }}>
                                    {applicant.name} {applicant.surname}
                                </h3>
                                <div style={{ fontSize: '0.9rem', color: "#666", marginBottom: "15px", borderBottom: "1px solid #F1FAEE", paddingBottom: "10px" }}>
                                    DNI/NIE: <strong>{applicant.dni}</strong>
                                </div>
                                <div style={{ fontSize: '15px', lineHeight: '1.6', color: "#457B9D" }}>
                                    <p style={{margin: '5px 0'}}><strong>Familia:</strong> {applicant.familyMenbers} miembros</p>
                                    <p style={{margin: '5px 0'}}><strong>Ingresos:</strong> {applicant.salary?.toLocaleString()} €/año</p>
                                </div>
                            </div>
                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                                <span style={{
                                    padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold',
                                    backgroundColor: applicant.employed ? '#E9F5DB' : '#F1FAEE',
                                    color: applicant.employed ? '#2A9D8F' : '#666',
                                    border: applicant.employed ? '1px solid #2A9D8F' : '1px solid #ccc'
                                }}>
                                    {applicant.employed ? 'CON EMPLEO' : 'DESEMPLEADO'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApplicantPage