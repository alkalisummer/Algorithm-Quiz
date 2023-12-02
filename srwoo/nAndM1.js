const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
4 2
`.toString().trim().split('\n');

const recursive = (n, m, depth) => {
    if(depth === m){
        let res = ''
        for(let val of arr){
            res += val + ' ';
        }
        console.log(res);
        return;
        // for(let val of arr){
        //     process.stdout.write(`${val} `);
        // }
        // console.log('');
        // return;
    }

    for(let i=1; i<=n; i++){
        if(!visit[i]){
            arr[depth] = i;
            visit[i] = true;
            recursive(n, m, depth+1);
            visit[i] = false;
        }
    }
}

const [n, m] = input[0].split(' ').map(Number);
let arr = [...Array(m)].fill(0);
let visit = [...Array(n)].fill(false);

recursive(n, m, 0);