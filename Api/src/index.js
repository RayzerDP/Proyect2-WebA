import app from './app'
import './db/database'

app.listen(app.get('port'))

console.log('server running port:', app.get('port'))