/* 

증가 수열 

백준 링크 : https://www.acmicpc.net/problem/30236

문제
수열 
$a_{1}, a_{2}, \ldots, a_{n}$이 주어진다. 다음 조건을 만족하는 수열 
$b_{1}, b_{2}, \ldots, b_{n}$을 좋은 수열이라고 정의한다:

 
$b_{i}$는 양의 정수이다(
$i = 1, 2, \ldots, n$).
 
$b_{i} \neq a_{i}$이다(
$i = 1, 2, \ldots, n$).
 
$b_{1} < b_{2} < \ldots < b_{n}$이다.
좋은 수열 
$b_{1}, b_{2}, \ldots, b_{n}$에 대하여, 
$b_{n}$의 최솟값을 구하여라.

입력
각 입력은 여러 개의 테스트 케이스로 이루어져 있다. 첫 번째 줄에 테스트 케이스의 개수 
$t$가 주어진다(
$1 \le t \le 100$). 다음 줄부터 각각의 테스트 케이스가 주어진다.

각각의 테스트 케이스의 첫 번째 줄에 정수 
$n$이 주어진다 (
$1 \le n \le 100$).

두 번째 줄에 
$n$개의 정수 
$a_1, a_2, \ldots, a_n$이 공백으로 구분되어 주어진다 (
$1 \le a_i \le 10^{9}$).

출력
각각의 테스트 케이스마다 정답을 출력한다.

*/

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `3
5
1 3 2 6 7
4
2 3 4 5
1
1`
  .trim()
  .split('\n');

const t = Number(input[0]);

let line = 1;

const findNum = (a, b) => {
  let num = b + 1;
  if (num == a) {
    num = findNum(a, b + 1);
  }
  return num;
};

for (let i = 0; i < t; i++) {
  let n = Number(input[line]);
  let a = input[line + 1].split(' ').map(Number);
  let b = new Array(n);

  if (a[0] - 1 > 0) {
    b[0] = 1;
  } else {
    b[0] = a[0] + 1;
  }

  for (let j = 1; j < n; j++) {
    let bNum = findNum(a[j], b[j - 1]);
    b[j] = bNum;
  }
  console.log(Math.max(...b));

  line += 2;
}
