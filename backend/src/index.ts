import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.json({ mensaje: 'Backend conectado correctamente 🚀' });
});
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bd_eventos",
  password: "Eventos123",
  port: 5432,
});

// GET /eventos
app.get("/eventos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM eventos");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo eventos" });
  }
});

// POST /eventos
app.post("/eventos", async (req, res) => {
  try {
    const { nombre, descripcion, fecha_inicio, fecha_fin } = req.body;

    const result = await pool.query(
      "INSERT INTO eventos (nombre, descripcion, fecha_inicio, fecha_fin) VALUES ($1,$2,$3,$4) RETURNING *",
      [nombre, descripcion, fecha_inicio, fecha_fin]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error creando evento" });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});