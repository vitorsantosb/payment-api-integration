const express = require("express");
const router = express.Router();

async function init() {
    router.use(require('./get'));
    router.use(require('./post'));
}

module.exports = {router, init};