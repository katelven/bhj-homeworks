const sliderArray = Array.from(document.getElementsByClassName("slider__item"));

function slide(num) {
    let activeSlide = sliderArray.findIndex(n => n.className.includes("slider__item_active"));
    if (num < 0) num = sliderArray.length - 1;
    if (num > sliderArray.length - 1) num = 0;
    sliderArray[activeSlide].className = "slider__item";
    sliderArray[num].className += " slider__item_active";
}

document.querySelector(".slider__arrow_next").onclick = function() {
    let idx = sliderArray.findIndex(n => n.className.includes("slider__item_active"));
    slide(idx + 1);
}

document.querySelector(".slider__arrow_prev").onclick = function() {
    let idx = sliderArray.findIndex(n => n.className.includes("slider__item_active"));
    slide(idx - 1);
}