require("dotenv").config();

const express = require("express");
const connectDB = require("./db.js");
const { createRoute } = require("./router/create-route.router.js");
const app = express();

const cors = require('cors')

// tackling server differences with cors
const corsOption = {
  origin: "http://localhost:5173",
  methods:'GET, POST, PUT, DELETE, PATCH, HEAD',
  credentials: true
};

app.use(cors(corsOption));


app.use(express.json());

app.use('/api/user/', createRoute)


const PORT = 8000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`app is running successfully at PORT: ${PORT}`);
  });
});
