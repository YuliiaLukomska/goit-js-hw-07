const itemArray = document.querySelectorAll('.item');
const itemQuantity = itemArray.length;
console.log(`Number of categories: ${itemQuantity}`);

itemArray.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.lastElementChild.querySelectorAll('li').length}`
  );
});
