import { Router, Request, Response } from 'express'

//Importing Routes

const router: Router = Router()

import { indexController } from '../controllers/index.controller'

router.get('/', indexController.index)

export default router
