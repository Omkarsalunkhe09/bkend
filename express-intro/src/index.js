const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");

const postController = require("./controllers/post.controller");

const app = express();
require("dotenv").config();

app.use(express.json());

const corsOrigin = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOrigin));

app.use("/posts", postController);

port = process.env.PORT || 2345;

app.listen(port, async function () {
  try {
    await connect();
    console.log(`list to ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
