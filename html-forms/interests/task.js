let interestsList = document.getElementsByClassName('interests_active');

for (let i = 0; i < interestsList.length; i++) {
    let mainInterest = interestsList.item(i).closest('.interest').firstElementChild.firstElementChild;
    let interestsItems = interestsList.item(i).querySelectorAll('.interest__check');

    mainInterest.addEventListener('change', function () {
        if (this.checked) {
            for (let item of interestsItems) {
                item.checked = true;
            }
        } else {
            for (let item of interestsItems) {
                item.checked = false;
            }
        }
    });
}