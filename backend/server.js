
const express = require("express");
const cors = require("cors");
const { PORT } = require('./config/config.js');

const app = express();
var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: "POST,OPTIONS",

};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to azure open demo application." });
  });
  
require("./routes/chat.routes.js")(app);
  
// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);    
  });