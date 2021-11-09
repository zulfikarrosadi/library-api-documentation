module.exports = {
  get: {
    tags: ['Book'],
    summary: 'Get single book by id',
    description: '',
    operationId: 'getBookById',
    parameters: [
      {
        in: 'path',
        name: 'bookId',
        description: 'numeric id of book to get',
        required: true,
        schema: {
          type: 'integer',
        },
        example: 1,
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: 'Book is found',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemes/SuccessBookAPIResponse',
            },
          },
        },
      },
      404: {
        description: 'Book is not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemes/FailedBookAPIResponse',
            },
          },
        },
      },
    },
  },
};
