'use strict';

let accentuatedPhrases = document.getElementsByClassName('has-tooltip');

for (let phrase of accentuatedPhrases) {
    phrase.insertAdjacentHTML('afterend', 
    `<div class='tooltip'>${phrase.title}</div>`);
    
    phrase.addEventListener('click', function(event) {
        event.preventDefault();
        let hiddenEl = event.target.nextElementSibling;
        
        if (hiddenEl.classList.contains('tooltip_active')) {
            hiddenEl.classList.remove('tooltip_active');
            return false;
        }

        let activeEl = document.getElementsByClassName('tooltip_active')[0];
    
        if (activeEl) {
            activeEl.classList.toggle('tooltip_active');
        }
        hiddenEl.style.left = event.target.getBoundingClientRect().left + 'px';
        hiddenEl.style.top = event.target.getBoundingClientRect().top + 20 + 'px';
        hiddenEl.classList.toggle('tooltip_active');
    
    });
}