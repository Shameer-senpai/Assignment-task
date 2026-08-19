const request = require('supertest');
const app = require('../src/app');

describe('Task API', () => {

  test('POST /tasks should crerate a task', async () => {

    const response = await request(app)
      .post('/tasks')
      .send({
              title: 'Learn Supertest',
      description: 'Understand API testing',
      status: 'todo',
      priority: 'high'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Learn Supertest');
    expect(response.body.status).toBe('todo');

  });

});