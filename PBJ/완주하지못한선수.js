function solution(participant, completion) {
    var answer = '';

    let map = new Map();

    // 엔트리 +1
    participant.forEach((a) => {
        if (map.has(a)) {
            map.set(a, map.get(a) + 1);
        }
        else {
            map.set(a, 1);
        }
    })

    // 완주시 -1
    completion.forEach((a) => {
        map.set(a, map.get(a) - 1);
    })

    // 0 초과인 경우 해당 이름에 미완주자 있음
    participant.forEach((a) => {
        if (map.get(a) > 0) {
            answer = a;
        }
    })

    return answer;
}