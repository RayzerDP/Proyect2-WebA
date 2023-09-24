import { connectToDatabase, mssql } from "../db/database";

export const PostProjects = async (req, res)=>{
   const { Nombre, LenguajeP, Categoria, Descripcion } = req.body;
const pool = await connectToDatabase(); // Asegurar que connectToDatabase() esté definida y devuelva una conexión válida

if (Nombre == null || LenguajeP == null || Categoria == null || Descripcion == null) {
  return res.status(400).json({ msg: 'Bad request, try again plis' });
}

try {
  await pool
    .request()
    .input("Nombre", mssql.NChar, Nombre)
    .input("LenguajeP", mssql.NChar, LenguajeP)
    .input("Categoria", mssql.NChar, Categoria)
    .input("Descripcion", mssql.Text, Descripcion)
    .query(
      "INSERT INTO projects (Nombre, LenguajeP, Categoria, Descripcion) VALUES (@Nombre, @LenguajeP, @Categoria, @Descripcion)"
    );

  console.log(Nombre, LenguajeP, Categoria, Descripcion);
  res.json({ message: 'new project' }); // Devuelve un objeto JSON con un mensaje
} catch (error) {
  console.error('Error insert project:', error.message);
  res.status(500).json({ msg: 'Internal server error' });
}
}