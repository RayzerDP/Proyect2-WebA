import {connectToDatabase} from "../db/database"

export const getProjects = async (req, res) =>{
     
    try {
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT * FROM projects')
    res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send('error in conection')
    }
    
}