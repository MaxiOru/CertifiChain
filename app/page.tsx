"use client";
import { useState } from "react";
import Link from "next/link";
import { getReadContract } from "../lib/contract"; // Importa la función real

export default function Home() {
  const [tokenId, setTokenId] = useState("");
  const [diploma, setDiploma] = useState<any>(null);
  const [mensaje, setMensaje] = useState("");

  const fetchDiploma = async () => {
    setMensaje("");
    setDiploma(null);
    try {
      const contract = getReadContract();
      const data = await contract.getDiploma(Number(tokenId));
      setDiploma(data);
      if (!data || !data.Nombre_Alumno) setMensaje("Diploma no encontrado.");
    } catch (err: any) {
      setMensaje("Error: " + err.message);
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
        {diploma && diploma.Nombre_Alumno && (
          <div className="result">
            <p><b>Alumno:</b> {diploma.Nombre_Alumno}</p>
            <p><b>Curso:</b> {diploma.Nombre_Curso}</p>
            <p><b>Tipo:</b> {diploma.Tipo_Certificado}</p>
            <p><b>Fecha:</b> {diploma.Fecha}</p>
            <p><b>URI:</b> <a href={diploma.uri} target="_blank">{diploma.uri}</a></p>
          </div>
        )}
        {mensaje && (
          <div className="result" style={{ background: "#fee2e2", color: "#991b1b" }}>
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
}