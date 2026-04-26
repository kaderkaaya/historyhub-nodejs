require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { attachHelpers, errorMiddleware } = require("resify-express");
const eventRoutes = require("./src/routes/event-router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(attachHelpers);

app.use("/events", eventRoutes);
app.get("/health", (req, res) => res.success({ ok: true }));

app.use(
  errorMiddleware({
    includeStack: process.env.NODE_ENV === "development",
  }),
);

const PORT = process.env.APP_PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
