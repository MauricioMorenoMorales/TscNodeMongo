import { Router } from 'express'

const router: Router = Router()

import { booksController } from '../controllers/books.controller'

router.get('/books', booksController.index)

router.get('/books/add', booksController.renderFormBook)

export default router
