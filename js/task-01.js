const categoriesItemEl = document.querySelector('#categories').children;
console.log('Number of categories:', categoriesItemEl.length);
[...categoriesItemEl].forEach(itemEl => {
  console.log('Category:', itemEl.firstElementChild.textContent);
  console.log('Elements:', itemEl.lastElementChild.children.length);
});


// const categoriesItemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesItemEl.length}`);
// categoriesItemEl.forEach((item) => {
//   const itemTitleEl = item.querySelector("h2").textContent;
//   console.log(`Category: ${itemTitleEl}`);
//   const itemsListEl = item.querySelectorAll("li");
//   console.log(`Elements: ${itemsListEl.length}`);
// });