const getBooks = require('./getBooks');
const createBook = require('./createBook');

module.exports = {
  paths: {
    '/books': {
      ...getBooks,
      ...createBook,
    },
  },
};
