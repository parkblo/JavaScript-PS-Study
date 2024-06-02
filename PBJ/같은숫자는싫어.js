function solution(arr) {
    var answer = [];
    
    arr.forEach((t)=> {
        if (answer[answer.length-1] !== t) {
            answer.push(t);
        }
    })
    
    return answer;
}
