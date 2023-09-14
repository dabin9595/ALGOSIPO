let input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    const n = Number(input[0]);
    const stairs = input.slice(1).map(Number);
    const dp = [];

    // 초기값 설정
    dp[0] = stairs[0];
    if (n > 1) {
      dp[1] = stairs[0] + stairs[1];
    }
    if (n > 2) {
      dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
    }

    // 동적 프로그래밍을 사용해 최대 점수 계산
    for (let i = 3; i < n; i++) {
      dp[i] = Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]) + stairs[i];
    }

    console.log(dp[n - 1]);
  });
