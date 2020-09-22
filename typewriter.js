const sentence = "hello there from lighthouse labs";
let count = 1000;

for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[i] + "\n");
    }, count);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, count);
    count += 50;
  }

}

