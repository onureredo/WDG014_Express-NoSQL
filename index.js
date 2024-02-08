import express from 'express';
import './db/server.js';
import { errorHandler } from './middlewares/ErrorHandler.js';
import booksRouter from './routes/booksRouter.js';

const app = express();
const PORT = 8000;

app.use(express.json());

// ROUTES
app.use('/books', booksRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
