import { connectToDatabase, mssql } from "../db/database";

export const GetProjectsId = async (req, res)=>{
    const {id} = req.params
    const pool = await connectToDatabase();
    const result = await pool
    .request()
    .input('id', id)
    .query("SELECT * FROM projects Where id = @id")
    console.log(result)


    res.send(result.recordset[0])
}
