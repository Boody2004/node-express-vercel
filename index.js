const express = require("express");
const home = require("./routes/home");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const documentation = [
    {
      url: "/home",
      type: "GET",
    },
  ];
  res.send(documentation);
});

app.use("/home", home);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`running on: http://localhost:${port}`));
