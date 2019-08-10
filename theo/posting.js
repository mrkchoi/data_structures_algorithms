document.addEventListener('DOMContentLoaded', () => {
  createElements();
});

function createPost() {
  let inp = document.querySelectorAll('INPUT')[0];
  let content = inp.value;
  inp.value = '';
  let item = document.createElement('LI');
  item.id = 'list_item';
  item.innerHTML = filter(content);
  let form = commentForm();
  item.appendChild(form);
  let list = document.querySelector('UL');
  list.appendChild(item);
}

function createElements() {
  let body = document.getElementsByTagName('BODY')[0];
  let inp = document.createElement('INPUT');
  body.appendChild(inp);
  let btn = document.createElement('BUTTON');
  btn.innerHTML = 'submit new post';
  btn.onclick = createPost;
  body.appendChild(btn);
  let list = document.createElement('UL');
  list.id = 'all_posts';
  body.appendChild(list);
}

function commentForm() {
  let inp = document.createElement('INPUT');
  let btn = document.createElement('BUTTON');
  btn.innerHTML = 'leave a comment'
  btn.onclick = addComment;
  let list = document.createElement('UL');
  list.id = 'comments'
  let dv = document.createElement('DIV');
  dv.appendChild(inp);
  dv.appendChild(btn);
  dv.appendChild(list);

  return dv;
}

function addComment() {
  let list = this.parent.children[2];
  console.log(list)
  let item = document.createElement('LI');
  item.innerHTML = 'test'
  list.appendChild(item);
}

function filter(content) {
  // & lt; and & gt;
  let arr = content.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '<') {
      arr[i] = '&lt;'
    }
    if (arr[i] === '>') {
      arr[i] = '&gt;'
    }
  }

  console.log(content)
  return arr.join('');
}