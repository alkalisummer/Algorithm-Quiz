# algorithm-study-js

javascript로 공부하는 알고리즘
<br><br>
## 1. 시간복잡도

#### 빅오 표기법(Big-O Notation)

가장 빠르게 증가하는 항만을 고려하는 표기법(제일 위부터 빠른순)

- O(1) : 상수 시간(constant time)
- O(logN) : 로그 시간(log time)
- O(N) : 선형 시간(linear time)
- O(NlogN) : 로그 선형 시간(log-linear time)
- O(N^2) : 이차 시간(quadratic time)
- O(N^3) : 삼차 시간(cubic time)
- O(2^N) : 지수 시간(exponential time)

<br><br>

## 2. 기본입력

#### fs모듈 
입력데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
예를 들어 /dev/stdin 파일에 적힌 테스트를 읽어오는 경우, 다음과 같이 코드를 작성
기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환

```
//readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);

```

#### readline 모듈
한 줄씩 입력을 받아서, 처리하여 정답을 출력할때는 readline 모듈을 사용할 수 있다.

```
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = |];

rl.on('line', function(line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
}).on('close', function() {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
  console.log(input);
  process.exit();
}) ;

```


