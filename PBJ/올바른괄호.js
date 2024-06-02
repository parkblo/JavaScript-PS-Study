function solution(s){
    var answer = true;
    
    let arr = [];
    let open = 0;
    
    for (let i=0; i<s.length; i++){
        if (s[i] === '(') open++;
        if (s[i] === ')') {
            if (open <= 0) return false;
            open--;
        }
    }
    
    if (open > 0) return false;
    return answer;
}
