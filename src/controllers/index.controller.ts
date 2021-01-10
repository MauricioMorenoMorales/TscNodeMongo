import { Request, Response } from 'express'

class IndexController {
	public index(req: Request, res: Response) {
		res.render('books/index')
	}
}

export const indexController = new IndexController()
