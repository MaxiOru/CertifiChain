"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [tokenId, setTokenId] = useState("");
  const [diploma, setDiploma] = useState<any>(null);

  const fetchDiploma = async () => {
    // Aquí va tu lógica de consulta al contrato
    // Simulación:
    if (tokenId === "1") {
      setDiploma({
        Nombre_Alumno: "Maximiliano",
        Nombre_Curso: "Desarrollo Blockchain con Solidity",
        Tipo_Certificado: "aprobacion",
        Fecha: "15/09/2025",
        uri: "https://ejemplo.com/certificado.jpg"
      });
    } else {
      setDiploma(null);
    }
  };

  return (
    <div>
      {/* Barra de navegación */}
      <nav style={{
        background: "#2563eb",
        padding: "12px 0",
        marginBottom: "32px",
        textAlign: "center"
      }}>
        <Link href="/" style={{ color: "#fff", marginRight: 24, fontWeight: "bold", textDecoration: "none" }}>Consulta</Link>
        <Link href="/admin" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Administración</Link>
      </nav>

      <div className="container">
        <div className="title">Consulta de Diplomas</div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Token ID"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
          />
          <button onClick={fetchDiploma}>Buscar</button>
        </div>
        {diploma && (
          <div className="result">
            <p><b>Alumno:</b> {diploma.Nombre_Alumno}</p>
            <p><b>Curso:</b> {diploma.Nombre_Curso}</p>
            <p><b>Tipo:</b> {diploma.Tipo_Certificado}</p>
            <p><b>Fecha:</b> {diploma.Fecha}</p>
            <p><b>URI:</b> <a href={diploma.uri} target="_blank">{diploma.uri}</a></p>
          </div>
        )}
        {!diploma && tokenId && (
          <div className="result" style={{ background: "#fee2e2", color: "#991b1b" }}>
            Diploma no encontrado.
          </div>
        )}
      </div>
    </div>
  );
}