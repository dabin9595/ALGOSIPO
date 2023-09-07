const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);

  const solution = (A, B) => {
    const merged = [];
    let i = 0,
      j = 0;

    while (i < A.length && j < B.length) {
      if (A[i] < B[j]) {
        merged.push(A[i]);
        i++;
      } else {
        merged.push(B[j]);
        j++;
      }
    }

    while (i < A.length) {
      merged.push(A[i]);
      i++;
    }
    while (j < B.length) {
      merged.push(B[j]);
      j++;
    }

    return merged.join(" ");
  };

  const answer = solution(A, B);
  console.log(answer);
});
