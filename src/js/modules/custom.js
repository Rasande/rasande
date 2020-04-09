// Rotate on scroll

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("rotate--scroll");
    image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}
