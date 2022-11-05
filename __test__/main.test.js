// __tests__/main.test.js
import { jest } from '@jest/globals';
import { hello } from '../src/api/routes/hello.js';
import request from 'supertest';

let server = null;

describe('app.js', () => {
  it('hello', () => {
    const req = {};
    const res = { send: jest.fn() };
    hello(req, res);
    expect(res.send.mock.calls.length).toBe(1);
    const [[data]] = res.send.mock.calls;
    expect(data).toEqual('Hello World!');
  });
});
