const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = {
  //ask user a question and return input
  ask: function (question, callback) {
    rl.question(question, callback);
  },

  //show information to cli for user
  print: (info) => {
    console.log(info);
  },
};
