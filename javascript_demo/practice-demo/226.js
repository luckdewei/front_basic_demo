


var invertTree = function(root) {
  var dfs = (node) => {
    if (!node) return
    let l = node.left
    let r = node.right
    dfs(l)
    dfs(r)
    let temp = node.left
    node.left = node.right
    node.right = temp
  }
  dfs(root)
  return root
};