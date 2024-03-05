const express = require("express");
const cors = require("cors");
const app = express();
const randomStuff = require('./controller')
const { getCompliment, getFortune, getInspired, getEmail, getDropped, getAppt } = randomStuff

app.use(cors());
app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/inspire", getInspired);
app.post("/api/sign", getEmail);
app.get("/api/drop", getDropped);
app.put("/api/calendar", getAppt);

app.listen(4000, () => console.log("Server running on 4000"));

