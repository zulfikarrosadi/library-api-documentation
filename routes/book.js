const { Router } = require('express');
const { getAllBooks, getBookById, createBook } = require('../controllers/book');

const router = Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);

module.exports = router;
