import { Router, Request, Response } from 'express'

//Importing Routes

const router: Router = Router()

import { indexController } from '../controllers/index.controller'

router.get('/', indexController.index)

router.get('/add', (req: Request, res: Response) => {
	res.send('formulario')
})

router.get('/about', (req, res) => {
	res.render('about')
})
export default router
