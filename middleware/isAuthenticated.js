module.exports = function(req, res, next) {
  console.log('getting to isAuthenticatated')
  if (req.isAuthenticated()) {
    console.log(1)
    return next();
  } else {
    console.log(2)
    return res.status(404).send("You aren't logged in");
  }
};
