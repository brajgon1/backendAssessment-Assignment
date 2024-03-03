const express = require("express");
const cors = require("cors");
const app = express();
const randomStuff = require('./controller')
const { getCompliment, getFortune, getInspired, getEmail } = randomStuff

app.use(cors());
app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/inspire", getInspired);
app.post("/api/sign", getEmail);

app.listen(4000, () => console.log("Server running on 4000"));

