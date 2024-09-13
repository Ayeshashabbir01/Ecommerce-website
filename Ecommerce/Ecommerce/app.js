const wraper = document.querySelector(".sliderwraper");
const menuItems = document.querySelectorAll(".menuItems");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wraper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
