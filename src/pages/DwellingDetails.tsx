import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Dwelling } from '../types/user-data';

export default function DwellingDetails() {
    const { id } = useParams<{ id: string }>(); // Capturamos el ID de la URL
    const [dwelling, setDwelling] = useState<Dwelling | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Petición al endpoint específico (ajusta la URL si tu backend es distinto)
        fetch(`http://localhost:8080/dwellings/${id}`)
        .then((res) => {
            if (!res.ok) throw new Error("No se pudo cargar la vivienda");
            return res.json();
        })
        .then((data) => {
            setDwelling(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div style={{ padding: "40px", textAlign: "center", color: "#1D3557" }}>Cargando ficha técnica...</div>;
    if (!dwelling) return <div style={{ padding: "40px", textAlign: "center" }}>Vivienda no encontrada.</div>;

    return (
        <div style={{
        backgroundColor: "#F1FAEE",
        minHeight: "calc(100vh - 80px)",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center"
        }}>
        <div style={{ maxWidth: "900px", width: "100%" }}>
            
            {/* Botón Volver (Ley de Proximidad: separado del contenido principal) */}
            <Link to="/dwellings" style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px",
                textDecoration: "none", 
                color: "#457B9D", 
                fontWeight: 600,
                marginBottom: "20px"
            }}>
            ← Volver al listado
            </Link>

            {/* TARJETA PRINCIPAL (Ley de Figura y Fondo) */}
            <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            overflow: "hidden",
            border: "1px solid #E0E0E0"
            }}>
            
            {/* Header de la Ficha */}
            <div style={{ 
                backgroundColor: "#1D3557", 
                padding: "30px", 
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px"
            }}>
                <div>
                <h1 style={{ margin: 0, fontSize: "1.8rem" }}>{dwelling.street}</h1>
                <p style={{ margin: "5px 0 0", opacity: 0.8 }}>{dwelling.city} | ID Ref: #{dwelling.id}</p>
                </div>
                
                <div style={{
                padding: "8px 16px",
                borderRadius: "20px",
                fontWeight: "bold",
                backgroundColor: dwelling.available ? "#A8DADC" : "#F4A261",
                color: dwelling.available ? "#1D3557" : "white",
                letterSpacing: "1px",
                fontSize: "0.9rem"
                }}>
                {dwelling.available ? "DISPONIBLE" : "OCUPADA"}
                </div>
            </div>

            {/* Cuerpo de detalles */}
            <div style={{ padding: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
                
                {/* SECCIÓN 1: ESPECIFICACIONES (Ley de Región Común) */}
                <div>
                <h3 style={{ borderBottom: "2px solid #A8DADC", paddingBottom: "10px", color: "#1D3557" }}>
                    Especificaciones
                </h3>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem", lineHeight: "2" }}>
                    <li style={{ borderBottom: "1px solid #eee" }}>
                    <strong>Tipo de inmueble:</strong> {dwelling.type}
                    </li>
                    <li style={{ borderBottom: "1px solid #eee" }}>
                    <strong>Habitaciones:</strong> {dwelling.room}
                    </li>
                    <li style={{ borderBottom: "1px solid #eee" }}>
                    <strong>Año de construcción:</strong> {dwelling.buildDate}
                    </li>
                    <li style={{ borderBottom: "1px solid #eee" }}>
                    <strong>Certificado Energético:</strong> B (Estimado)
                    </li>
                </ul>
                </div>

                {/* SECCIÓN 2: ESTADO DE OCUPACIÓN (Ley de Región Común) */}
                <div style={{ 
                    backgroundColor: "#F8F9FA", 
                    padding: "20px", 
                    borderRadius: "12px",
                    border: "1px dashed #A8DADC"
                }}>
                <h3 style={{ marginTop: 0, color: "#1D3557" }}>Información de Ocupación</h3>
                
                {dwelling.available ? (
                    <div style={{ textAlign: "center", color: "#457B9D", padding: "20px" }}>
                        <p>Esta vivienda está lista para ser asignada.</p>
                        <Link to="/applicants" style={{ 
                            display: "inline-block",
                            marginTop: "10px",
                            padding: "10px 20px",
                            backgroundColor: "#1D3557",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "6px",
                            fontSize: "0.9rem"
                        }}>
                            Asignar Solicitante
                        </Link>
                    </div>
                ) : (
                    // Si está ocupada y hay datos del inquilino (asumiendo dwelling.applicants no es nulo)
                    <div>
                        <p style={{ marginBottom: "5px", fontSize: "0.9rem", color: "#666" }}>Inquilino titular:</p>
                        
                        {/* Comprobamos si el array existe y tiene al menos 1 persona */}
                        {dwelling.applicants && dwelling.applicants.length > 0 ? (
                            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#1D3557" }}>
                                {/* Accedemos a la posición [0] del array */}
                                {dwelling.applicants[0].name} {dwelling.applicants[0].surname}
                                
                                {/* Si hay más gente empadronada, lo indicamos */}
                                {dwelling.applicants.length > 1 && (
                                    <span style={{ fontSize: "0.8rem", fontWeight: "normal", color: "#666", marginLeft: "8px" }}>
                                        (+{dwelling.applicants.length - 1} convivientes)
                                    </span>
                                )}
                            </div>
                        ) : (
                            <span style={{color: "red"}}>
                                Error: La casa consta como ocupada pero no tiene inquilinos asignados.
                            </span>
                        )}
                        
                        <p style={{ fontSize: "0.9rem", marginTop: "15px" }}>
                            <strong>Estado del contrato:</strong> Vigente
                        </p>
                    </div>
                )}
                </div>

            </div>
            </div>
        </div>
        </div>
    );
}