let answer = 0;

function DFS(dungeons, depth, vis, currK) {
    answer = answer < depth ? depth : answer;
    
    for (let i=0; i<dungeons.length; i++) {
        if (!vis[i] && currK >= dungeons[i][0]) {
            vis[i] = true;
            DFS(dungeons, depth+1, vis, currK - dungeons[i][1]);
            vis[i] = false;
        }
    }
    
    return;
}

function solution(k, dungeons) {
    let vis = new Array(dungeons.length).fill(false);
    
    for (let i=0; i<dungeons.length; i++) {
        vis[i] = true;
        DFS(dungeons, 1, vis, k - dungeons[i][1]);
        vis[i] = false;
    }
    
    return answer;
}
