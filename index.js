require("dotenv").config();
const eventRoutes = require("./src/routes/event-router");
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
app.use(cors());
app.use(express.json());

//app.use("/events", eventRoutes);
app.get("/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.APP_PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
