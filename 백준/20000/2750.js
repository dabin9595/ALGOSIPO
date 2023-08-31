// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = numbers.shift();

/* 출력 값 */
numbers.sort((a, b) => a - b).forEach((num) => console.log(num));
