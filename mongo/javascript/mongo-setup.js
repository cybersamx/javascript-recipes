db.createUser({
  user: 'user',
  pwd:  'password',
  roles: [
    {
      role: 'readWrite',
      db:   'test',
    }
  ]
});
