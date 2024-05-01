require("dotenv").config();
const express = require("express");
const Connection = require("./Database/Database.js");
const userRouter = require("./Routes/userRoutes.js");
const cors = require("cors");

const server = express();

server.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
server.use(express.json());

Connection();

server.use("/", userRouter);
server.get("/", (req, res) => {
  res.status(200).send({ message: "hello" });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
