var en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ";
var ar = "ضصثقفغعهخحجدشسيبلاتنمكطئءؤرbىةوزظ ";
function toEn(text) {
  return text
    .split("")
    .map(x => en[ar.indexOf(x)] || x)
    .reduce((acc, cur) => acc + cur, "");
}

if (process.argv.length > 2) {
  console.log(toEn(process.argv[2]));
} else {
  var readline = require("readline");
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  console.log("Please enter the arabic text");
  rl.on("line", function(line) {
    console.log(toEn(line));
    process.exit(0);
  });
}
