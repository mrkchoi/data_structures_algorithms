var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  if (root.children.length === 0) {
    return 1;
  }

  let deepestChild = 0;
  root.children.forEach(child => {
    let dpth = maxDepth(child)
    if (1 + dpth > deepestChild) {
      deepestChild = 1 + dpth;
    }
  })
  return deepestChild;
};