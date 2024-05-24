const express = require('express');
const { createController } = require('../controller/create-controller');
const createRoute = express.Router();

createRoute.route("/create").post(createController);

module.exports = {createRoute}