module.exports = {
  components: {
    schemes: {
      SuccessBookAPIResponse: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Request status, is failed or success',
            example: 'OK',
          },
          data: {
            type: 'array',
            description: 'Some books data that wrapped in array of object',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  description: 'auto generated id',
                  example: 1,
                },
                title: {
                  type: 'string',
                  description: 'A book title',
                  example: 'Clean Code',
                },
                author: {
                  type: 'string',
                  description: 'The name of book author',
                  example: 'Jhon Doe',
                },
              },
            },
          },
          error: {
            type: 'array',
            description: 'list of error that wrapped in array of object',
            items: { type: 'string' },
            example: [],
          },
        },
      },
      FailedBookAPIResponse: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Request status, is failed or success',
            example: 'OK',
          },
          data: {
            type: 'array',
            description: 'Some books data that wrapped in array of object',
            items: { type: 'string' },
            example: [],
          },
          error: {
            type: 'array',
            description: 'list of error that wrapped in array of object',
            items: {
              type: 'object',
              properties: {
                code: {
                  type: 'string',
                  description: 'An API error code',
                  example: 'P0001',
                },
                status: {
                  type: 'string',
                  description: 'A readable error summary',
                  example: 'IncompleRequest',
                },
                message: {
                  type: 'string',
                  description: 'An error message that describe error code',
                  example: 'Request URL is broken',
                },
              },
            },
          },
        },
      },
    },
  },
};
