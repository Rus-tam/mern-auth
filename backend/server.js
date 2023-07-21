import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import User from "./db/User.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

(async () => {
  try {
    await User.sync({ alter: true });
    console.log("Tables created successfully");
  } catch (err) {
    console.error(`Error creating tables: ${err}`);
  }
})();

app.listen(port, () => console.log(`Server started on port ${port}`));
