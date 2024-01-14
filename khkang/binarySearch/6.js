/* 

캠프가는 영식

백준링크 : https://www.acmicpc.net/problem/1590

문제
영식이는 민식이와 함게 고속버스를 타고 캠프를 가야 하지만, 민식이는 영식이를 깨우지 않고 혼자 버스를 타고 캠프에 가버렸다.

영식이는 혼자 고속버스터미널까지 가서 캠프에 오려고 한다. 터미널에는 캠프 장소까지 운행하는 N가지의 버스가 있다. 각각의 버스는 시작 시각, 간격, 대수의 정보를 가지고 있다. 예를 들어, 어떤 버스의 시작 시각이 특점 시점을 기준으로 10분 후이고, 간격은 10분이고, 대수가 5대이면, 이 버스는 10분, 20분, 30분, 40분, 50분에 한 대씩 출발한다.

영식이는 버스터미널에 T분에 도착했다. 영식이가 버스를 타려면 최소 몇 분을 더 기다려야 하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 버스의 개수 N과 영식이가 버스터미널에 도착하는 시간 T가 주어진다. 둘째 줄부터 총 N개의 줄에 각 버스의 시작 시각 Si, 간격 Ii, 대수 Ci가 공백을 사이에 두고 주어진다.

출력
첫째 줄에 영식이가 기다려야 하는 시간을 출력한다. 영식이가 도착하는 동시에 버스가 출발하면 정답은 0이다. 만약 버스가 없어서 캠프에 갈 수 없으면 -1을 출력한다. 정답은 231보다 작다.

*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// n : 버스 종류 개수, t: 영식이가 버스터미널에 도착하는 시간
const [n, t] = input[0].split(' ').map(Number);

let res = [];
let min = 0;
for (let i = 1; i <= n; i++) {
  // s : 버스 시작 시각, l : 간격, C : 대수
  let [s, l, c] = input[i].split(' ').map(Number);
  let start = 0;
  let busArr = [];
  for (let i = 0; i < c; i++) {
    busArr.push(s + l * i);
  }
  let end = busArr.length;
  if (busArr[start] > t) {
    res.push(busArr[start]);
  } else {
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      if (busArr[mid] == t) {
        res.push(busArr[mid]);
        break;
      } else if (busArr[mid] > t) {
        if (busArr[mid - 1] < t) {
          res.push(busArr[mid]);
          break;
        } else {
          end = mid - 1;
        }
      } else start = mid + 1;
    }
  }
}
if (res.length > 0) {
  min = Math.min(...res);
}
console.log(min ? min - t : -1);
