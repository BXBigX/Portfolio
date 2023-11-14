var body = document.querySelector('body');
const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

function toggleLabInfo() {
    var labInfo = document.getElementById('labInfo');
    if (labInfo.style.display === 'none') {
        labInfo.style.display = 'block';
    } else {
        labInfo.style.display = 'none';
    }
}
