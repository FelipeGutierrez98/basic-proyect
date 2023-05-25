//conexion base de datos
const connectDB = require('./db')

// toda lo logica de la conexion -manejar el servidor de la api
const express = require('express')


// ve va a traer todos los metodos/clases con express
const app = express()


// crear puerto
const port =4000

const userRoute = require('./routes/user.routes')


//llamar a la constante de tiene los metodos
app.use(express.json())

// crear ruta para que cuando ejecute mi api vea mi informacion
app.use('/users', userRoute)



//transfomrar el servidor
app.listen(port, () =>
  console.log(`el servidor se ejecuta en el pueto http://localhost${port}`)
)
