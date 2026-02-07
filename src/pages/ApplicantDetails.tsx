import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Applicant, Dwelling } from '../types/user-data';

export default function ApplicantDetails() {
    const { id } = useParams<{ id: string }>();
    const [applicant, setApplicant] = useState<Applicant | null>(null);
    const [assignedDwelling, setAssignedDwelling] = useState<Dwelling | null>(null); // Para guardar su casa si tiene
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Cargar datos del solicitante
        fetch(`http://localhost:8080/applicants/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("Error fetching applicant");
            return res.json();
        })
        .then(data => {
            setApplicant(data);
            // 2. Una vez tenemos el usuario, miramos si tiene casa asignada
            // Nota: Tu controller tiene este endpoint preparado: /applicants/{id}/dwelling
            return fetch(`http://localhost:8080/applicants/${id}/dwelling`);
        })
        .then(res => {
            if (res.ok) return res.json();
            return null; // Si devuelve 404 o vacío, es que no tiene casa
        })
        .then(dwellingData => {
            if (dwellingData) setAssignedDwelling(dwellingData);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div style={{ padding: "40px", textAlign: "center", color: "#1D3557" }}>Cargando expediente...</div>;
    if (!applicant) return <div style={{ padding: "40px", textAlign: "center" }}>Solicitante no encontrado.</div>;

    return (
        <div style={{ backgroundColor: "#F1FAEE", minHeight: "calc(100vh - 80px)", padding: "40px 20px", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "900px", width: "100%" }}>
            
            <Link to="/applicants" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#457B9D", fontWeight: 600, marginBottom: "20px" }}>
            ← Volver al listado
            </Link>

            {/* TARJETA PRINCIPAL */}
            <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", overflow: "hidden", border: "1px solid #E0E0E0" }}>
            
            {/* Header con iniciales */}
            <div style={{ backgroundColor: "#457B9D", padding: "30px", color: "white", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ width: "60px", height: "60px", backgroundColor: "white", color: "#457B9D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold" }}>
                    {applicant.name.charAt(0)}{applicant.surname.charAt(0)}
                </div>
                <div>
                    <h1 style={{ margin: 0, fontSize: "1.8rem" }}>{applicant.name} {applicant.surname}</h1>
                    <p style={{ margin: "5px 0 0", opacity: 0.9 }}>DNI: {applicant.dni}</p>
                </div>
            </div>

            <div style={{ padding: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
                
                {/* SECCIÓN DATOS ECONÓMICOS (Región Común) */}
                <div>
                <h3 style={{ borderBottom: "2px solid #A8DADC", paddingBottom: "10px", color: "#1D3557" }}>Perfil Socioeconómico</h3>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem", lineHeight: "2.2" }}>
                    <li style={{ borderBottom: "1px solid #eee" }}><strong>Ingresos Anuales:</strong> {applicant.salary} €</li>
                    <li style={{ borderBottom: "1px solid #eee" }}><strong>Unidad Familiar:</strong> {applicant.familyMembers} personas</li>
                    <li style={{ borderBottom: "1px solid #eee" }}>
                        <strong>Situación Laboral:</strong> 
                        <span style={{ marginLeft: "10px", color: applicant.employed ? "green" : "red", fontWeight: "bold" }}>
                            {applicant.employed ? "ACTIVO" : "DESEMPLEADO"}
                        </span>
                    </li>
                </ul>
                </div>

                {/* SECCIÓN ESTADO VIVIENDA (Destacado) */}
                <div style={{ backgroundColor: "#F0F4F8", padding: "25px", borderRadius: "12px", border: "1px solid #DCE6F1" }}>
                <h3 style={{ marginTop: 0, color: "#1D3557" }}>Estado de Asignación</h3>
                
                {assignedDwelling ? (
                    <div>
                        <div style={{ color: "#2A9D8F", fontWeight: "bold", marginBottom: "10px" }}>VIVIENDA ASIGNADA</div>
                        <p style={{ fontSize: "0.9rem", color: "#555" }}>Reside actualmente en:</p>
                        <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#1D3557", margin: "10px 0" }}>
                            {assignedDwelling.street}, {assignedDwelling.city}
                        </div>
                        <Link to={`/dwellings/${assignedDwelling.id}`} style={{ textDecoration: "underline", color: "#457B9D", fontSize: "0.9rem" }}>
                            Ver detalles del inmueble
                        </Link>
                    </div>
                ) : (
                    <div>
                        <div style={{ color: "#E63946", fontWeight: "bold", marginBottom: "10px" }}>⏳ EN LISTA DE ESPERA</div>
                        <p style={{ fontSize: "0.9rem", color: "#555" }}>
                            Este solicitante cumple los requisitos pero aún no tiene un inmueble asignado.
                        </p>
                        <button style={{ marginTop: "15px", width: "100%", padding: "10px", backgroundColor: "#1D3557", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                            Buscar Vivienda Compatible
                        </button>
                    </div>
                )}
                </div>

            </div>
            </div>
        </div>
        </div>
    );
}