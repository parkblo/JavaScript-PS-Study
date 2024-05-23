/*
n마리중 n/2마리 선택
정수 배열 전달 : elem = 폰켓몬 값 정수
answer : 선택중 값이 가장 다양하도록
*/

function solution(nums) {
    var answer = 0;
    
    let map = new Map();
    for (let num of nums) {
        if (map.size < nums.length/2 && !map.get(num)) {
            map.set(num,1)
        }
    }
    
    answer = map.size;
    
    return answer;
}
