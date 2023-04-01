module.exports = (req, res, next) => {
  console.log("@@@@@", req.session.isLoggedIn); //req.session.isLoggedIn
  if (req.session.isLoggedIn && req.session.role == "admin") {
    next();
  } else {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
};
