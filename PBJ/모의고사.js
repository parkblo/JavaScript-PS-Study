function solution(answers) {
    var answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let i=0, j=0, k=0, l=0;
    let cnt = [0,0,0];
    
    while (l < answers.length) {
        if (i>=one.length) i=0;
        if (j>=two.length) j=0;
        if (k>=three.length) k=0;
        
        if(one[i] === answers[l]) cnt[0]++;
        if(two[j] === answers[l]) cnt[1]++;
        if(three[k] === answers[l]) cnt[2]++;
        
        i++;j++;k++;l++;
    }
    let max=0;
    cnt.forEach((e)=>{
        if (e>max) max=e;
    });
    cnt.forEach((e,i)=>{
        if (e === max) answer.push(i+1);
    });
    
    return answer;
}
