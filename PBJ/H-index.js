function solution(citations) {
    return citations.sort((a,b) => {
        return b-a;
    }).reduce((h,t,i)=> {
        if (i+1<=t) {
            h = i+1;
        }
        return h;
    },0);
}
