function solution(brown, yellow) {
    var answer = [];
    const area = brown+yellow;
    
    for (let i=1; i<=Math.sqrt(area); i++) {
        if (area % i === 0) {
            let x = area/i;
            let y = i;
            if ( (x-2)*(y-2) === yellow ) {
                answer.push(x);
                answer.push(y);
                return answer;
            }
        }
    }
    
    return answer;
}
