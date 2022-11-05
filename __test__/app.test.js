// __tests__/app.test.js
import { jest } from '@jest/globals';
import request from 'supertest';
import { server } from '../app.js';

afterEach(() => {
  server.close();
});

const makeQuery = (query) => {
  const results = [];
  for (const key in query) {
    results.push(`${key}=${query[key]}`);
  }
  return results.join('&');
};
const makeUrl = ({ appid, version, schemas, idcmd, query }) =>
  `api/${appid}/${version}/${schemas}/${idcmd}?${makeQuery(query)}`;

test('make Query', () => {
  const query = {
    searchStr: 11,
    bts: 'good',
  };
  expect(makeQuery(query)).toEqual(`searchStr=11&bts=good`);
});

test('make Url', () => {
  const params = {
    appid: 'www',
    version: '0.0.1',
    schemas: 'users',
    idcmd: 'all',
    query: { searchStr: 11 },
  };
  const res = makeUrl(params);
  const sampleUrl = `api/${params.appid}/${params.version}/${params.schemas}/${
    params.idcmd
  }?${makeQuery(params.query)}`;
  expect(res).toEqual(sampleUrl);
});

test('home', async () => {
  const response = await request(server).get('/');
  expect(response.statusCode).toBe(200);
});

test('api - params test', async () => {
  const expectData = {
    appid: 'www',
    version: '0.0.1',
    schema: 'users',
    idcmd: 'all',
    query: { searchStr: 11 },
  };

  const sampleUrl = `/api/www/0.0.1/users/all?searchStr=11`;
  const res = await request(server).get(sampleUrl);
  expect(res.statusCode).toBe(200);
});
