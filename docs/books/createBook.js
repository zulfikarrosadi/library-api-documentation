module.exports = {
  post: {
    tags: ['Book'],
    summary: 'Add new book to database',
    description: '',
    operationID: 'createBook',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [],
    requestBody: {
      type: 'object',
      required: ['title', 'author'],
      properties: {
        title: {
          type: 'string',
          description: 'A book title',
          example: 'Clean Code',
        },
        author: {
          type: 'string',
          description: 'A book author',
          example: 'Jhon Doe',
        },
      },
    },
  },
};
