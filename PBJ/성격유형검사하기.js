/*
R T
C F
J M
A N
*/

function solution(survey, choices) {
    var answer = '';
    let score = new Map();
    
    // wow ;;
    score["R"]=0;
    score["T"]=0;
    score["C"]=0;
    score["F"]=0;
    score["J"]=0;
    score["M"]=0;
    score["A"]=0;
    score["N"]=0;
    
    let dic = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3};
    
    for (let i=0; i<survey.length; i++) {
        let neg = survey[i][0];
        let pos = survey[i][1];
        let choice = choices[i];
        
        if (choice<4) {
            score[neg] += dic[choice];
        }  else if (choice>4) {
            score[pos] += dic[choice];
        }
    }
    
    // make result
    if (score['R'] < score['T']) {
        answer += "T";
    } else {
        answer += "R";
    }
    
    if (score['C'] < score['F']) {
        answer += "F";
    } else {
        answer += "C";
    }
    
    if (score['J'] < score['M']) {
        answer += "M";
    } else {
        answer += "J";
    }
    
    if (score['A'] < score['N']) {
        answer += "N";
    } else {
        answer += "A";
    }
    
    return answer;
}
