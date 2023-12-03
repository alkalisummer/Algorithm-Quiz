const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
2
5 6
0 0 1 0
`.toString().trim().split('\n');
const [idx, arr, operators] = input;

const calculate = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b)
];

let min = 1000000000;
let max = -1000000000;

const recursive = (cnt, val) => {
    const originVal = val;//다시 초기화 할 때 사용.

    if(cnt === idx-1){
        if(val>max) max=val;
        if(val<min) min=val;
        return;
    }else {
        for(let i=0; i<4; i++){
            if(operators[i]>0){
                switch(i){
                    case 0:
                        val+=arr[cnt+1];
                    break;
                    case 1:
                        val-=arr[cnt+1];
                    break;
                    case 2:
                        val*=arr[cnt+1];
                    break;
                    case 3:
                        if(val>=0){
                            val = Math.floor(val/arr[cnt+1])
                        }else{
                            val = Math.floor((-1)*val/arr[cnt+1])
                            if(val>0) val = val*(-1);// -0이 나올 수도 있기 때문에 
                        }
                    break;
                }
    
                operators[i]--;
                recursive(cnt+1, arr);
                arr = originVal;
                operators[i]++;
            }
        }
    }

}

recursive(0, arr[0]);
console.log(`${max}\n${min}`);