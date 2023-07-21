import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import User from "./db/User.js";

const app = express();

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => res.send("Server is ready"));

(async () => {
  try {
    await User.sync({ alter: true });
    console.log("Tables created successfully");
  } catch (err) {
    console.error(`Error creating tables: ${err}`);
  }
})();

console.log(process.env.POSTGRES_PASSWORD);

app.listen(port, () => console.log(`Server started on port ${port}`));
