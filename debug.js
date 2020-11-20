function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var A = {1:2, 3:4, 5:6}
for(var i in A){
    console.log(i);
    console.log(typeof i)
}


