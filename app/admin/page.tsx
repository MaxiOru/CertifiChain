"use client";
import { useState } from "react";
import Link from "next/link";

export default function Admin() {
  const [form, setForm] = useState({
    to: "",
    Nombre_Alumno: "",
    Nombre_Curso: "",
    Tipo_Certificado: "",
    Fecha: "",
    uri: ""
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const issue = async (e: any) => {
    e.preventDefault();
    // Aquí va tu lógica de emisión al contrato
    // Simulación:
    if (form.to && form.Nombre_Alumno && form.Nombre_Curso) {
      setMensaje("¡Diploma emitido con éxito!");
      setForm({
        to: "",
        Nombre_Alumno: "",
        Nombre_Curso: "",
        Tipo_Certificado: "",
        Fecha: "",
        uri: ""
      });
    } else {
      setMensaje("Completa todos los campos requeridos.");
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
        <div className="title">Emitir Diploma</div>
        <form onSubmit={issue} className="input-group" style={{ flexDirection: "column", gap: "12px" }}>
          <input
            placeholder="to"
            name="to"
            value={form.to}
            onChange={handleChange}
            type="text"
            required
          />
          <input
            placeholder="Nombre_Alumno"
            name="Nombre_Alumno"
            value={form.Nombre_Alumno}
            onChange={handleChange}
            type="text"
            required
          />
          <input
            placeholder="Nombre_Curso"
            name="Nombre_Curso"
            value={form.Nombre_Curso}
            onChange={handleChange}
            type="text"
            required
          />
          <input
            placeholder="Tipo_Certificado"
            name="Tipo_Certificado"
            value={form.Tipo_Certificado}
            onChange={handleChange}
            type="text"
            required
          />
          <input
            placeholder="Fecha"
            name="Fecha"
            value={form.Fecha}
            onChange={handleChange}
            type="date"
            required
          />
          <input
            placeholder="uri"
            name="uri"
            value={form.uri}
            onChange={handleChange}
            type="url"
            required
          />
          <button type="submit">Emitir</button>
        </form>
        {mensaje && (
          <div className="result" style={{ marginTop: 16 }}>
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
}