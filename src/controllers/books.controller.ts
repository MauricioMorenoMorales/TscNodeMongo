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
}

export const booksController = new BooksController()
