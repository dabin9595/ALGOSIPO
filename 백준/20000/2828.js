const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
let J;
const apples = [];

rl.question("", (input) => {
  [N, M] = input.split(" ").map(Number);
  rl.question("", (input) => {
    J = Number(input);
    readApples();
  });
});

function readApples() {
  rl.question("", (input) => {
    apples.push(Number(input));
    if (apples.length === J) {
      calculateMinimumDistance();
    } else {
      readApples();
    }
  });
}

function calculateMinimumDistance() {
  const initialPosition = Math.floor(M / 2);
  let totalDistance = 0;

  for (let i = 0; i < J; i++) {
    const applePosition = apples[i];
    const distance = Math.abs(applePosition - initialPosition);
    totalDistance += distance;
    initialPosition = applePosition;
  }

  console.log(totalDistance);
  rl.close();
}
