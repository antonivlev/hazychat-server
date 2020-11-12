const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

app.get("/api", (req, res) => res.send("Helloooooo world!"));

const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
  path: "/myapp",
});

app.use("/api/peerjs:null", peerServer);

module.exports = app;
