// src/index.js
import express from "express";
import applicationRoutes from "./routes/applicationRoutes.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/applications", applicationRoutes);

export default app;  // Export 'app' so it can be used in server.js