express = require("express");
const bodyParser = require("body-parser");
app = express();
port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  fullName = req.body.name;
  password = req.body.password;

  console.log(fullName);
  console.log(password);
  res.send(`<h2 style="color: purple"> Hello, ${fullName}</h2>
    <h3>Your password is: ${password}</h3>`);
});

app.listen(port, () => {
  console.log("listening to port " + port);
});
