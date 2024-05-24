function solution(array, commands) {
    var answer = [];
    for (let [i, j, k] of commands) {
        let ar = array.slice(i-1,j).sort((a,b)=>{return a-b;});
        answer.push(ar[k-1]);
    }
    return answer;
}
