function solution(sizes) {
    for (let i=0; i<sizes.length; i++){
        if (sizes[i][0] < sizes[i][1]){
            let tmp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = tmp;
        }
    }
    
    let maxA=0, maxB=0;
    for (let i=0; i<sizes.length; i++){
        if (maxA < sizes[i][0]) maxA=sizes[i][0];
        if (maxB < sizes[i][1]) maxB=sizes[i][1];
    }
    
    return maxA*maxB;
}
