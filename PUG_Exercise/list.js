express = require("express");
const bodyParser = require("body-parser");
app = express();
port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

songs = [
  "Sgt. Peppers Lonely Hearts Club Band",
  "With a Little Help from My Friends",
  "Lucy in the Sky with Diamonds",
  "Getting Better",
  "Fixing a Hole",
  "Shes Leaving Home",
  "Being for the Benefit of Mr. Kite!",
  "Within You Without You",
  "When Im Sixty-Four",
  "Lovely Rita",
  "Good Morning Good Morning",
  "Sgt. Peppers Lonely Hearts Club Band (Reprise)",
  "A Day in the Life",
];

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("list", { songs: songs });
});

app.post("/", (req, res) => {
  let songTitle = req.body.songTitle;
  if (songTitle) songs.push(songTitle);
  res.render("list", { songs: songs });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
