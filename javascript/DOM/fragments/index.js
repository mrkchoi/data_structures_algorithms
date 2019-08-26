
let fragment = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  let newItem = document.createElement('p');
  newItem.textContent = 'new item' + i;
  fragment.appendChild(newItem);
}

// console.log(fragment);
document.body.appendChild(fragment);