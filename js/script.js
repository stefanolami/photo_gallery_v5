
let search = document.querySelector("#search");
let photos = document.querySelectorAll("a");


search.addEventListener("keydown", () => {
    let searchValue = search.value.toLowerCase();
    for (let i = 0; i < photos.length; i++) {
       if (!photos[i].dataset.caption.includes(searchValue)) {
           photos[i].style.display = "none";
       }
    }
});

search.addEventListener("keydown", () => {
    let searchValue = search.value.toLowerCase();
    for (let i = 0; i < photos.length; i++) {
       if (photos[i].dataset.caption.includes(searchValue)) {
           photos[i].style.display = "grid";
       }
    }
});

