/*
한 문자열이 다른 문자열의 접두사가 되는 경우 false
*/

function solution(phone_book) {
    var answer = true;
    
    phone_book.sort();
    
    for (let i=0;i<phone_book.length-1;i++){
        if (phone_book[i] === phone_book[i+1].slice(0,phone_book[i].length))
            answer = false;
    }
    
    return answer;
}
