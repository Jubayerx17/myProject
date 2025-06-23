const refresh = document.querySelector(".refresh");
const load = document.querySelector(".load");
const imgContainer = document.querySelector(".imgContainer");
const imgNum = 5;

refresh.addEventListener("click", () => {
  location.reload();
});

load.addEventListener("click", () => {
  addNewImg();
});

function addNewImg() {
  for (let i = 1; i <= imgNum; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgContainer.appendChild(img);
  }
}
