function solution(numbers) {
    let answer = numbers.map(a=>String(a))
    .sort((a,b)=>{
        return (b+a) - (a+b);    
    })
    .reduce((answer,t)=>{
        return answer += t;
    },"");
    
    return answer[0] === '0' ? "0" : answer;
}
