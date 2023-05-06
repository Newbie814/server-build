// just an example, not really how you would do this in production

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'matt') {
    req.user = { name: 'matt', id: 3 };
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
  console.log('authorize');
  next();
};

module.exports = authorize;
