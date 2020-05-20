const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const details = require("./routes/routes");

app.use("/api/v1/", details);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server has started"));
