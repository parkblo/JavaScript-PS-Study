function solution(priorities, location) {
    var answer = 0;
    let num=0;
    
    // 타겟 심어놓기
    let arr = priorities.map((t,i)=>{
        if (i===location) return {p:t,target:true};
        else return {p:t,target:false};
    })
    
    while (arr.length > 0) {
        // 꺼내기 pop
        let a = arr.shift();
        let flag = false;
        // 우선순위 높은 프로세스 있는지 확인
        for (let i=0; i<arr.length; i++) {
            if (a.p < arr[i].p) flag = true;
        }
        // 없다면 꺼낸 프로세스 실행
        if (!flag) {
            num++;
            if (a.target === true) {
                return num;
            }
        } else {
            arr.push(a);
        }
    }
    
    return answer;
}
