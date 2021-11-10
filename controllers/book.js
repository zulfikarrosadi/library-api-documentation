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
    const result = [];
    if (!Array.isArray(book)) {
      result.push(book);
    }
    return res.status(201).json({
      status: 'OK',
      data: result,
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

module.exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.books.findUnique({
      where: { id: parseInt(id, 10) },
    });
    const result = [];
    if (!Array.isArray(book)) {
      result.push(book);
    }
    return res.status(200).json({
      status: 'OK',
      data: result,
      error: [],
    });
  } catch (errors) {
    return res.status(404).json({
      status: 'NOT FOUND',
      data: [],
      errors: errors.map((error) => ({
        code: error.code,
        message: error.message,
      })),
    });
  }
};

module.exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.books.delete({
      where: { id: parseInt(id, 10) },
    });
    const result = [];
    if (!Array.isArray(book)) {
      result.push(book);
    }
    return res.status(200).json({
      status: 'DELETED',
      data: result,
      error: [],
    });
  } catch (errors) {
    console.log(errors);
    return res.status(404).json({
      status: 'NOT FOUND',
      data: [],
      errors: errors.map((error) => ({
        code: error.code,
        message: error.message,
      })),
    });
  }
};

module.exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = await prisma.books.update({
      where: { id: parseInt(id, 10) },
      data: { title, author },
    });
    const result = [];
    if (!Array.isArray(book)) {
      result.push(book);
    }

    return res.status(200).json({
      status: 'UPDATED',
      data: result,
      error: [],
    });
  } catch (errors) {
    return res.status(404).json({
      status: 'NOT FOUND',
      data: [],
      errors: errors.map((error) => ({
        code: error.code,
        message: error.message,
      })),
    });
  }
};
