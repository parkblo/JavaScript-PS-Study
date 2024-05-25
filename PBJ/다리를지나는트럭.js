// 다리 길이 bridge_length
// 다리 위 트럭의 무게는 weight 이하

function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
    const all_trucks = truck_weights.length;
    
    // 트럭이 없는 칸일 경우 -1
    let bridge = new Array(bridge_length).fill(-1);
    
    // 반복문 1회: 1초 경과
    let curr_weight = 0;
    let completed = 0;
    while(completed < all_trucks) {
        // 다리 위 트럭들 한칸씩 전진
        let front = bridge.shift();
        // -1일 경우 아무 트럭도 없는 것임.
        if (front === -1) {
            bridge.push(-1);
        } else {
            curr_weight -= front;
            completed++;
            bridge.push(-1);
        }
        // 다리가 견딜 수 있다면 트럭 올리기
        if (curr_weight + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            curr_weight += truck;
            bridge[bridge.length-1] = truck;
        }
        sec++;
    }
    
    return sec;
}
