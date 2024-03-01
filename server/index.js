const express = require("express");
const cors = require("cors");
const app = express();
const randomStuff = require('./controller')
const { getCompliment, getFortune } = randomStuff

app.use(cors());
app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);

app.listen(4000, () => console.log("Server running on 4000"));

