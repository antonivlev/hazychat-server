const endpoint = (req, res) => {
  res.json({
    someKey: "this here is a value from server",
  });
};

export default endpoint;
