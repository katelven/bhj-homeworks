menuPoints = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuPoints.length; i++) {
    menuPoints[i].onclick = () => {
        subMenuHead = menuPoints[i].closest('li')
        subMenu = subMenuHead.querySelectorAll('li ul.menu_sub');
        updSubMenu = Array.from(subMenu);
        if (updSubMenu.length > 0) {
            updSubMenu[0].classList.toggle('menu_active');
            return false;
        } else {
            return true;
        }
    };
};