// ALTERANDO A NAVBAR

addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', scrollY > 0)
})

// SHOW/HIDE FAQ

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');

        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-times';
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})

// SHOW/HIDE NAV

const menu = document.querySelector(".nav_menu");
const open = document.querySelector("#open-menu-button");
const close = document.querySelector("#close-menu-button");

open.addEventListener('click', () => {
    menu.style.display = "flex";
    close.style.display = "flex";
    open.style.display = 'none';
})

close.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'none';    
    open.style.display = 'flex';
})