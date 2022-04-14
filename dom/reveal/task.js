const reveal = Array.from(document.getElementsByClassName('reveal'));

const search = function() {
    const  viewportHeight = window.innerHeight;
    reveal.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top > viewportHeight || rect.bottom < viewportHeight) {
            element.classList.remove('reveal_active');
        } else {
            element.classList.add('reveal_active');
        }
    });
}

document.addEventListener('scroll', search);
