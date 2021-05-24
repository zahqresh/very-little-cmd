const readline = require("readline");
const colors = require("colors");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

//few default colors
colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});

module.exports = {
  //ask user a question and return input
  ask: function (question, callback) {
    rl.question(`${question}: `.verbose, callback);
  },

  //show information to cli for user
  print: (info) => {
    console.log(`${info}`.info);
  },
};
