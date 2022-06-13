const sentence = "|/-\\|/-\\|";

const delayString = function (string) {

  for (let x = 0; x < string.length; x++) {
    setTimeout(() => {
      process.stdout.write(`\r${string[x]}   `);
    }, x * 500)
  }

}

delayString(sentence)