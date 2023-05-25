// crear una parte con los rutas de los datos
const express = require('express')
const router = express.Router() //especifico que voy a usar de la libreria

//main archivo principal

const usercontroller = require('../controllers/user.controller')

/* (ruta de partida , metodo que vamos a utilizar) */
router.get('/', usercontroller.getAllUsers)
router.post('/', usercontroller.createUser)
router.put('/:id', usercontroller.updateUser)
router.delete('/:id',usercontroller.deleteUser)
// "/" punto de partida

module.exports = router
