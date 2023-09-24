import express from 'express'
import config from './config';
import projectRouter from './rutes/Project.routes'

const app = express();

//config
app.set('port', config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : false}))



app.use(projectRouter)


export default app
