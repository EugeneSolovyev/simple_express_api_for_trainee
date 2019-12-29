export const options = {
  swaggerDefinition: {
    info: {
      title: 'Reflection API for Trainee JS developer', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'A simple CRUD API', // Description (optional)
    },
  },
  host: 'http://localhost:8000',
  basePath: '/api/v1',
  apis: ['./api/*.js'],
}
