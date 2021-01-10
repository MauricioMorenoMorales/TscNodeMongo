import express from 'express'

//Inicializaciones
const app = express()

//Settings
app.set('port', 3000)
//middlewares
//Routes
//Static files
//Starting the server
app.listen(app.get('port'), (): void => {
	console.log(`Server on port ${app.get('port')}`)
})
