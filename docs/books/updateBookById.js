module.exports = {
  patch: {
    tags: ['Book'],
    summary: 'update single book by id',
    description: '',
    operationId: 'updateBookById',
    parameters: [
      {
        in: 'path',
        name: 'bookId',
        description: 'numeric id of book to update',
        required: true,
        schema: {
          type: 'integer',
        },
        example: 1,
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#components/schemes/Book',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Successfully update the book',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemes/SuccessBookAPIResponse',
            },
          },
        },
      },
      404: {
        description: 'Book not found, failed to update',
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
