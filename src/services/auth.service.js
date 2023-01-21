const jwtService = require('./jwt.service');

const authenticate = (user) => {
  if (user.username === 'admin' && user.password === 'admin') {
    const token = jwtService.generate({ username: user.username });
    return { token };
  }
  throw new Error('Invalid credentials');
};

module.exports = { authenticate };
