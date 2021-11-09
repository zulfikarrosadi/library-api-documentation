const getAllBooks = require('./getAllBooks');
const createBook = require('./createBook');

module.exports = {
  paths: {
    '/books': {
      ...getAllBooks,
      ...createBook,
    },
  },
};
