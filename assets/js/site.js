window.FontAwesomeConfig.keepOriginalSource = false;
const mainControls = {
    currentStyle: null,
    mainNavbar: null,
    toTopControl: null,
};
window.addEventListener('load', function (_ev) {
    mainControls.mainNavbar = document.getElementById('main-navbar');
    mainControls.toTopControl = document.getElementById('toTop');
    mainControls.toTopControl.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', function (_ev) {
    if (mainControls.toTopControl) {
        if (window.scrollY > 500) {
            mainControls.toTopControl.style.bottom = '-0.125rem';
            mainControls.toTopControl.style.opacity = '1';
        }
        else {
            mainControls.toTopControl.style.bottom = '6.25rem';
            mainControls.toTopControl.style.opacity = '0';
        }
    }
    if (mainControls.mainNavbar) {
        if (window.scrollY > 300) {
            mainControls.mainNavbar.classList.add('header-consensed');
        }
        else {
            mainControls.mainNavbar.classList.remove('header-consensed');
        }
    }
});
