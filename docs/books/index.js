const getAllBooks = require('./getAllBooks');
const createBook = require('./createBook');
const getBookById = require('./getBookById');

module.exports = {
  paths: {
    '/books': {
      ...getAllBooks,
      ...createBook,
    },
    '/books/{bookId}': {
      ...getBookById,
    },
  },
};
