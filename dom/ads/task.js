const rotators = document.getElementsByClassName("rotator");

for (let i = 0; i < rotators.length; i++) {
    let rotator = rotators.item(i);
    let rotCase = rotator.querySelector(".rotator__case");

    function searchElement() {
        if (rotCase.classList.contains("rotator__case_active")) {
            rotCase.classList.remove("rotator__case_active");
        }
        rotCase = rotCase.nextElementSibling;
        if (rotCase == null) {
            rotCase = rotator.querySelector(".rotator__case");
        }
        rotCase.classList.add("rotator__case_active");
        if (rotCase.classList.contains("rotator__case_active")) {
            let col = rotCase.dataset.color;
            let sp = rotCase.dataset.speed;
            rotCase.style.color = col;
            rotCase.style.speed = sp;
        }
    }
    setInterval(searchElement, 1000);
};


