module.exports = {
  delete: {
    tags: ['Book'],
    summary: 'Delete book by id',
    description: '',
    operationId: 'deleteBookById',
    parameters: [
      {
        in: 'path',
        name: 'bookId',
        description: 'numeric id of book to delete',
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
        description: 'succeded deleting book',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemes/SuccessBookAPIResponse',
            },
          },
        },
      },
      404: {
        description: 'Book is not found, request failed',
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
