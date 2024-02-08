import { Router } from 'express';
import * as bookController from '../controllers/book.js';

const booksRouter = Router();

booksRouter
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.addNewBook);

booksRouter
  .route('/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

booksRouter.patch('/:id/addTag', bookController.addTagToBook);
export default booksRouter;
