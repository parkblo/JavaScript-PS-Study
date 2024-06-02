let answerArr = [];

function isSosu(curr) {
    let num = Number(curr);
    if (curr < 2) return false;
    
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num%i === 0) return false;
    }
    
    return true;
}

function f(numbers, vis, curr, maxL) {
    // base case
    if (curr.toString().length >= maxL) {
        if (isSosu(curr)) {
            console.log(curr);
            let flag = answerArr.reduce((e,item) => {
                if (item === curr) e = false;
                return e;
            },true);
            if (flag) answerArr.push(curr);
        }
        return;
    }
    
    for (let i=0; i<numbers.length; i++){
        if (curr.toString().length === 0 && numbers[i] === "0"){
            continue;
        }
        
        if (!vis[i]) {
            let nextCurr = curr + numbers[i];
            let nextVis = [...vis];
            nextVis[i] = true;
            f(numbers,nextVis,nextCurr,maxL);
        }
    }
    
    return;
}

function solution(numbers) {
    var answer = 0;
    let vis = new Array(numbers.length).fill(false);
    
    for (let maxL=1; maxL<=numbers.length; maxL++) {
        console.log(maxL + "maxL");
        f(numbers,vis,"",maxL);
    }
    
    answer = answerArr.length;
    
    return answer;
}
