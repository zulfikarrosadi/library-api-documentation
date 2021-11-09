const express = require('express');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');

const bookRouter = require('./routes/book');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  '/api/docs',
  swaggerUI.serve,
  swaggerUI.setup(docs, { customSiteTitle: 'Libary API Docs' })
);
app.use('/books', bookRouter);

app.listen(3000, () => console.log(`running on http://localhost:3000`));
