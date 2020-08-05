(window as any).FontAwesomeConfig.keepOriginalSource = false;

const mainControls = {
    currentStyle: null as HTMLLinkElement,
    mainNavbar: null as HTMLElement,
    toTopControl: null as HTMLDivElement,
};

window.addEventListener('load', function (this: Window, _ev: Event) {
    mainControls.mainNavbar = document.getElementById('main-navbar');

    mainControls.toTopControl = document.getElementById('toTop') as HTMLDivElement;
    mainControls.toTopControl.addEventListener('click', function (this: HTMLDivElement, ev: Event) {
        ev.preventDefault();
        ev.stopPropagation();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});

// Header bar / scroll to top control animation on scroll down
window.addEventListener('scroll', function (this: Window, _ev: Event) {
    if (mainControls.toTopControl) {
        if (window.scrollY > 500) {
            mainControls.toTopControl.style.bottom = '-0.125rem';
            mainControls.toTopControl.style.opacity = '1';
        } else {
            mainControls.toTopControl.style.bottom = '6.25rem';
            mainControls.toTopControl.style.opacity = '0';
        }
    }
    if (mainControls.mainNavbar) {
        if (window.scrollY > 300) {
            mainControls.mainNavbar.classList.add('header-consensed');
        } else {
            mainControls.mainNavbar.classList.remove('header-consensed');
        }
    }
})
