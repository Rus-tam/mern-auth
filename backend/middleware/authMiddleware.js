import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../db/User.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findOne({
        where: { id: decoded.userId },
        attributes: { exclude: ["password"] },
      });

      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };