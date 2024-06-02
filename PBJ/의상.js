/*
1. 카테고리 내에서는 하나만 선택 가능.
2. 모든 카테고리를 다 선택할 필요는 없다.
3. 1개 이상은 무조건 착용해야 한다.

answer : 위를 만족하는 조합의 수
*/


function solution(clothes) {
    var answer = 1;
    let categories = {}
    
    for (let [name, category] of clothes) {
        if (!categories[category]) {
            categories[category] = 1;
        } else {
            categories[category] += 1;
        }
    }
    
    for (let category in categories) {
        answer *= (categories[category]+1); // 카테고리의 개수 + 1(해당 카테고리를 안고른 경우)
    }
    
    // 모든 것을 고르지 않은 경우 (-1)
    return answer-1;
}
