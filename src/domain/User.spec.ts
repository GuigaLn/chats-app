import { expect, test } from 'vitest';
import User from './User';

test('create an user', () => {
  const user = new User({
    id: null,
    email: 'guilhermeleonardonallon@gmail.com',
    name: 'Guilherme Nallon',
    password: 'Guilherme'
  });

  expect(user).toBeInstanceOf(User);
  expect(user.name).toEqual('Guilherme Nallon');
});

test('cannot create a user with no name', () => {
  expect(() => {
    new User({
      id: null,
      email: 'guilhermeleonardonallon@gmail.com',
      name: '',
      password: 'Guilherme'
    });
  }).toThrow();
});

test('cannot create a user with no e-mail', () => {
  expect(() => {
    new User({
      id: null,
      email: 'notValidEmail',
      name: 'Guilherme Nallon',
      password: 'Guilherme'
    });
  }).toThrow();
});

test('cannot create a user with no password', () => {
  expect(() => {
    new User({
      id: null,
      email: 'guilhermeleonardonallon@gmail.com',
      name: 'Guilherme Nallon',
      password: ''
    });
  }).toThrow();
});
