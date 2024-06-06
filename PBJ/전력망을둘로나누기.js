function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;
    
    let graph = Array.from(Array(n+1),()=>[]);
    
    for (let wire of wires) {
        let [from, to] = wire;
        
        graph[from].push(to);
        graph[to].push(from);
    }
    
    function bfs(start, disconnect) {
        let vis = new Array(n+1).fill(false);
        let q = [start];
        let depth = 0;
        vis[start] = true;
        
        while (q.length) {
            let front = q.shift();
            
            graph[front].forEach((e) => {
                if (!vis[e] && e !== disconnect) {
                    vis[e] = true;
                    q.push(e);
                }
            });
            
            depth++;
        }
        
        return depth;
    }
    
    // 안쓸 wire 고르기
    for (let wire of wires) {
        let [a, b] = wire;
        answer = Math.min(answer, Math.abs(bfs(a,b) - bfs(b,a)));
    }
    
    return answer;
}
