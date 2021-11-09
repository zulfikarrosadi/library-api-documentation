module.exports = {
  get: {
    tags: ['Book'],
    summary: 'Gett list of book',
    description: '',
    operationId: 'getAllBooks',
    parameters: [],
    requestBody: {},
    responses: {
      200: {
        description: 'Successfully get all book data',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemes/SuccessBookAPIResponse',
            },
          },
        },
      },
      400: {
        description: 'Failed to get all book data',
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
