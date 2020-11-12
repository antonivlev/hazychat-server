import { PeerServer } from "peer";

const endpoint = (req, res) => {
  res.json({
    someKey: "this here is a value from server",
  });
};

const peerServer = PeerServer({ port: 9000, path: "/myapp" });

export default peerServer;
