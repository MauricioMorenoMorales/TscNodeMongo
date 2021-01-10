import { Request, Response } from 'express'

class BooksController {
	public index(req: Request, res: Response) {
		res.render('books/index', {
			title: 'Books',
		})
	}
	public renderFormBook(req: Request, res: Response) {
		res.render('books/add', {
			title: 'Add a Book',
		})
	}

	public saveBook(req: Request, res: Response) {
		console.log(req.body)
		res.send('Recibido xd')
	}
}

export const booksController = new BooksController()
