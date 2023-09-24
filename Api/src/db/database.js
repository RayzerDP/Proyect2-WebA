const mssql = require('mssql');

// Configuración de conexión
const config = {
  user: 'ray',
  password: 'diego1019',
  server: 'DESKTOP-M4UC0AN',
  port: 1433,
  database: 'Proyectos',
  options: {
    encrypt: true, // Si estás utilizando una conexión segura
    trustServerCertificate: true
  },
};

export async function connectToDatabase() {
  try {
    // Establecer una conexión a la base de datos utilizando la configuración de conexión
    const pool = await mssql.connect(config);
    console.log('Conexión establecida a SQL Server.');
    return pool
  } catch (error) {
    console.error('Error al conectarse a SQL Server:', error);
  }
  await pool.close()
}

// Llamar a la función para establecer la conexión
connectToDatabase();

export { mssql }