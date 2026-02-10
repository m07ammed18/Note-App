import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // This middleware will parse JSON badies: req.body
app.use(ratelimiter);
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}\n http://localhost:5001/`);
  });
});
