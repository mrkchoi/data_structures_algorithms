// Write a ‘getElementsByClassName’ function.



function getElementsByClassName(document, className) {
  if (!document) return null;
  let output = [];
  let stack = [document];

  while (stack.length) {
    let node = stack.pop();
    if (node.classList) {
      let nodeClassList = Array.from(node.classList);
      // on node, call node.classList, 
      // convert result into array (Array.from(classList))
      // check that array includes className argument
      // if true, then push element into output arr
      if (nodeClassList.includes(className)) output.push(node);
    }
    // if children, add children to stack
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        stack.push(node.children[i]);
      }
    }
  }

  return output;
}

document.getElementsByClassName(selector)

// init an output arr
// starting from document (root node)
// DFS on all elements in document tree
// check if each element has class of `className`

// once DFS is complete, return output

{/* <body>
  <div>
    <h1>header</h1>
    <p>
      <a href="#">link</a>
      <a href="#">link</a>
      <span class="spanny">span</span>
    </p>
    <span class="spanny">span</span>
    <p>
      <a href="#">link</a>
      <a href="#">link</a>
      <span class="spanny">span</span>
    </p>
    <span class="spanny">span</span>
    <p>
      <a href="#">link</a>
      <a href="#">link</a>
      <span class="spanny">span</span>
    </p>
  </div>
</body> */}

