//external modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
//local module
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(
  cors({
    origin: [
      "https://primetrade-auth-dashboard-pi.vercel.app",
      "https://primetrade-auth-dashboard-1.onrender.com",
    ],
    credentials: true,
  }),
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("PrimeTrade backend running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);
