const navTrigger = document.querySelector('.navigation_trigger');
const navPanel = document.querySelector('.navigation_panel');
const navBackground = document.querySelector('.navigation_background');
const navBox = document.querySelector('.navigation_box');
const wrapper = document.querySelector('.wrapper');

navTrigger.addEventListener('click', () => {
    navPanel.style.opacity = 1;
    navPanel.style['pointer-events'] = 'unset';
    wrapper.style.height = '100vh';
    setTimeout(() => {
        navBox.style.transform = 'translateY(0)';
    }, 300);
})

navBackground.addEventListener('click', () => {
    navBox.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        navPanel.style.opacity = 0;
        navPanel.style['pointer-events'] = 'none';
        wrapper.style.height = 'unset';
    }, 500);
});