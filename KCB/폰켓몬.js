function solution(nums) {
  var dic = nums.reduce((acc, cur)=>{
    if (acc[cur]) { acc[cur] += 1; }
    else { acc[cur] = 1; }
    return acc;
  }, {})
  return Math.min(Object.keys(dic).length, nums.length/2);
}