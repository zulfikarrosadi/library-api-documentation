const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.getAllBooks = async (req, res) => {
  try {
    const books = await prisma.books.findMany();
    return res.status(200).json({
      status: 'OK',
      data: books,
      error: [],
    });
  } catch (errors) {
    // pretending that we have error validation that return array of object
    return res.status(400).json({
      status: 'BAD REQUEST',
      data: [],
      errors: errors.map((error) => ({
        code: error.code,
        status: error.status,
        message: error.message,
      })),
    });
  }
};

module.exports.createBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await prisma.books.create({
      data: { title, author },
    });
    return res.status(200).json({
      status: 'OK',
      data: book,
      error: [],
    });
  } catch (errors) {
    return res.status(400).json({
      status: 'INVALID REQUEST',
      data: [],
      errors: errors.map((error) => ({
        code: error.code,
        message: error.message,
      })),
    });
  }
};
