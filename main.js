// 1-mashq
function quick(arr){
  if(arr.length<=1) return arr;
  let pivot=arr[0];
  let left=arr.slice(1).filter(x=>x<pivot);
  let right=arr.slice(1).filter(x=>x>=pivot);
  return [...quick(left), pivot, ...quick(right)];
}
// 2-mashq
function mergeSort(arr){
  if(arr.length<=1) return arr;
  let mid=arr.length/2;
  let left=mergeSort(arr.slice(0,mid));
  let right=mergeSort(arr.slice(mid));
  return merge(left,right);
}
// 3-mashq
let graph={a:["b","c"], b:["d"], c:[], d:[]};

function bfs(start){
  let q=[start];
  let visited=new Set();

  while(q.length){
    let node=q.shift();
    if(!visited.has(node)){
      console.log(node);
      visited.add(node);
      q.push(...graph[node]);
    }
  }
}
// 4-mashq
function dfs(node, visited=new Set()){
  if(visited.has(node)) return;
  console.log(node);
  visited.add(node);

  for(let n of graph[node]){
    dfs(n, visited);
  }
}
// 5-mashq
// conceptual (simplified)
