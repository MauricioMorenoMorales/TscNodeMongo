import { Request, Response } from 'express'

class IndexController {
	public index(req: Request, res: Response) {
		res.render('index')
	}
}

export const indexController = new IndexController()
