module.exports = {
  post: {
    tags: ['Book'],
    summary: 'Add new book to database',
    description: '',
    operationID: 'createBook',
    parameters: [],
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
      201: {
        description: 'Successfully added new book',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemes/SuccessBookAPIResponse',
            },
          },
        },
      },
      400: {
        description: 'Failed to add new book',
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
