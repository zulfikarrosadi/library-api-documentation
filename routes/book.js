const { Router } = require('express');
const { getAllBooks, createBook } = require('../controllers/book');

const router = Router();

router.get('/', getAllBooks);
router.post('/', createBook);

module.exports = router;
