const getAllBooks = require('./getAllBooks');
const createBook = require('./createBook');
const getBookById = require('./getBookById');
const deleteBookById = require('./deleteBookById');
const updateBookById = require('./updateBookById');

module.exports = {
  paths: {
    '/books': {
      ...getAllBooks,
      ...createBook,
    },
    '/books/{bookId}': {
      ...getBookById,
      ...deleteBookById,
      ...updateBookById,
    },
  },
};
