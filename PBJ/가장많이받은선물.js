/*
흐름

1. if 선물 주고받은 기록
선물 하나 to 더 많은 선물을 준 사람 from 더 적은 사람

2. if 주고 받은 기록 없음 || 주고받은 수가 같음
선물 하나 to 선물 지수가 큰 사람 from 더 적은 사람
* 선물 지수 = 준 선물 수 - 받은 선물 수
높을 수록 준 선물이 많음.

3. 선물 지수도 같다면 아무일 발생X

input
friends: 이름 배열
gifts: 선물 기록 배열

answer
다음 달에 한 사람이 가장 많이 받는 선물의 수
*/

function solution(friends, gifts) {
    var answer = Number.MIN_SAFE_INTEGER;
    
    let send = [];
    let recieve = [];
    let giftIndex = [];
    let nextMonthGift = [];
    
    // 배열 초기화
    for (let i=0; i<friends.length; i++) {
        nextMonthGift[friends[i]] = 0;
        send[friends[i]] = [];
        recieve[friends[i]] = [];
        giftIndex[friends[i]] = 0;
    }
    
    // gifts 배열 반영하기
    for (let item in gifts) {
        let [from, to] = gifts[item].split(" ");
        send[from].push(to);
        recieve[to].push(from);
        giftIndex[from] += 1;
        giftIndex[to] -= 1;
    }
    
    // 가장 많은 선물을 받는 사람 구하기
    for (let i=0; i<friends.length; i++) {
        for (let j=i+1; j<friends.length; j++) {
            // i vs j
            
            // 1. 선물 내역 비교
            let Acnt = 0, Aname = friends[i];
            let Bcnt = 0, Bname = friends[j];
            
            for (let item in send[Aname]) {
                if (send[Aname][item] === Bname) Acnt++;
            }
            
            for (let item in send[Bname]) {
                if (send[Bname][item] === Aname) Bcnt++;
            }
            
            if (Acnt + Bcnt > 0 && Acnt > Bcnt) {
                nextMonthGift[Aname]++;
                //console.log("gift " + Aname);
                continue;
            }
            else if (Acnt + Bcnt > 0 && Acnt < Bcnt) {
                nextMonthGift[Bname]++;
                //console.log("gift " + Bname);
                continue;
            }
            
            // 2. 선물 지수 비교
            if (giftIndex[Aname] > giftIndex[Bname]) {
                nextMonthGift[Aname]++;
                //console.log("giftIdx " + Aname);
            }
            else if (giftIndex[Bname] > giftIndex[Aname]) {
                nextMonthGift[Bname]++;
                //console.log("giftIdx " + Bname);
            }
        }
    }
    
    // 가장 많은 선물을 받는 사람 구하기
    for (let i=0; i<friends.length; i++) {
        answer = Math.max(answer,nextMonthGift[friends[i]]);
    }
    
    return answer;
}
