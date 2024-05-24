/* 
  paricipant의 길이는 completion 보다 1짧다. participant 중 완주하지 못한 선수는?
*/


function solution(participant, completion) {

  const runner = new Map();
  participant.forEach(p=>{
      runner.set(p, runner.get(p)+1 || 1);
  });

  completion.forEach(p=>runner.set(p, runner.get(p)-1));
  for(const [key, value] of runner.entries()) {
    if (value == 1) return key;
  }
}