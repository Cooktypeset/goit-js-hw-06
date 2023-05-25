const categoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemEl.length}`);
categoriesItemEl.forEach((item) => {
  const itemTitleEl = item.querySelector("h2").textContent;
  console.log(`Category: ${itemTitleEl}`);
  const itemsListEl = item.querySelectorAll("li");
  console.log(`Elements: ${itemsListEl.length}`);
  const listItems = item.children;
  console.log(listItems);
const firstListItem = item.firstElementChild;
  console.log(firstListItem);
  const lastListItem = item.lastElementChild;
  console.log(lastListItem);
});