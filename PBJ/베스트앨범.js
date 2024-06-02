function solution(genres, plays) {
    var answer = [];
    
    // obj : 많이 재생된 장르 나열에 사용
    let obj = {};
    let dupobj = {};
    genres.forEach((elem,idx)=>{
        obj[elem] = obj[elem] ? obj[elem] + plays[idx] : plays[idx];
    });
    
    answer = genres.map((e, i) => ({
       genre: e, idx:i, play:plays[i] 
    }))
    .sort((a,b) => {
        if (a.genre !== b.genre) return obj[b.genre] - obj[a.genre];
        if (a.play !== b.play) return b.play - a.play;
        return a.idx - b.idx;
    })
    .filter((e) => {
        if (dupobj[e.genre] >= 2) return false;
        dupobj[e.genre] = dupobj[e.genre] ? dupobj[e.genre] + 1 : 1;
        return true;
    })
    .map((e) =>e.idx);
    
    return answer;
}
