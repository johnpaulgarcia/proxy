// create a simple server using express
require('dotenv').config()
const axios = require("axios");
const express = require("express");
const md5 = require("md5");
const app = express();
const port = process.env.SERVER_PORT;
const protocol = require('http')
const server = protocol.createServer(app)
const { createProxyMiddleware } = require("http-proxy-middleware");
const qs = require("qs");

const options = {
    target: "",
    changeOrigin: true,
};

app.use(
    "/",
    createProxyMiddleware(options)
);

// create server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
