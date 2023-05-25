const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");

const imagesList = images.map((image) =>
      `<li><img src="${image.url}" alt="${image.alt}" width = "350" height = "250"></li>`
  ).join("");

galleryEl.insertAdjacentHTML("afterbegin", imagesList);

galleryEl.style.display = "flex";
galleryEl.style.gap = "30px";
galleryEl.style.listStyle = "none";