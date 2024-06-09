/*
모든 달은 28일 까지 있다.

today: 오늘 날짜
terms: [약관 종류, 유효 기간(달)]
privacies: [수집된 날짜, 약관 종류]
answer: 파기해야할 개인정보의 번호, 오름차순 정렬
*/

function convertStringToNum(dateString) {
    let ret = 0;
    let [year, month, day] = dateString.split(".");
    
    ret += Number(year)*28*12;
    ret += Number(month)*28;
    ret += Number(day);
    
    return ret;
}

function solution(today, terms, privacies) {
    var answer = [];
    let dic = {};
    const todayNum = convertStringToNum(today);
    
    // 약관 종류 등록
    for (let term of terms) {
        let [type, month] = term.split(" ");
        dic[type] = Number(month);
    }
    
    // 파기 여부 확인
    for (let i=0; i<privacies.length; i++) {
        let [date, type] = privacies[i].split(" ");
        let dateNum = convertStringToNum(date) + (dic[type] * 28);
        
        if (todayNum >= dateNum) {
            answer.push(i+1);
        }
    }
    
    answer.sort((a,b)=>a-b);
    return answer;
}
