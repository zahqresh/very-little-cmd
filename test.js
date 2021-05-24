const vlc = require("./app");

vlc.ask("whats you age?", (age) => {
  console.log(age);
});
