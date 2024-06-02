/*
규칙
1. 길이가 5가 아니라면 5가 될때까지 A(1)를 채우는게 우선
2. 만약 6에 도달했다면 본인은 0이 되고 앞의 자리는 +1을 함.
*/

function solution(word) {
    var answer = 0;
    let arr = [];
    
    let dic = {"A":1, "E":2, "I":3, "O":4, "U":5};
    let wordArr = [];
    for (let i=0; i<word.length; i++) {
        wordArr.push(dic[word[i]]);
    }
    
    while (true) {
        if (arr.toString() === wordArr.toString()) break;
        if (arr.toString() === "55555") break;
        
        if (arr.length < 5) {
            arr.push(1);
        } else {
            arr[4]++;
            // 올림 가능한 수 체크
            if (arr[4] >= 6) {
                for (let i=4; i>0; i--) {
                    if (arr[i] >= 6) {
                        arr[i-1]++;
                        arr.pop();
                    }
                }
            }
        }
        answer++;
    }
    
    return answer;
}
