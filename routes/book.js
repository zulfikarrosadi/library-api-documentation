const { Router } = require('express');
const {
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById,
  updateBookById,
} = require('../controllers/book');

const router = Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.delete('/:id', deleteBookById);
router.patch('/:id', updateBookById);

module.exports = router;
