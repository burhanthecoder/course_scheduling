


// check verify access token

export const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({
          error: "INVALID_TOKEN",
        });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      error: "UNAUTHORIZED",
    });
  }
}

// check admin role