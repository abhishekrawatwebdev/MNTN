
const hills = document.getElementById("mountains");
const man = document.getElementById("man");
const clouds = document.getElementById("clouds");
const landing_heading = document.getElementById("landing_heading")
const landing_para = document.getElementsByClassName("hiking_para")[0]
const heading_margin = landing_heading.style.marginTop;
const sun = document.getElementById("sun");
const sun_margin = sun.style.marginTop;
const navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value > 100) {
        navbar.style.backgroundColor = '#0B1D26';

    }
    else {
        navbar.style.backgroundColor = 'transparent'
    }
    hills.style.top = value * 0.25 + 'vh';
    clouds.style.left = '-' + value * 0.05 + '%';
    clouds.style.top = value * 0.05 + '%';
    landing_heading.style.marginTop = heading_margin + (value * 0.4) + '%';
    landing_para.style.marginTop = value * 0.7 + '%';
    sun.style.marginTop = '-' + sun_margin + (value * 0.035) + '%';
})



// $(function () {  // $(document).ready shorthand
//     $('.content').fadeIn('slow');
// });

// $(document).ready(function () {

//     /* Every time the window is scrolled ... */
//     $(window).scroll(function () {

//         // /* Fade in one element */
//         $('.fadein').each(function (i) {
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             /* If the object is completely visible in the window, fade it it */
//             if (bottom_of_window > bottom_of_object) {
//                 $(this).animate({ 'opacity': '1' }, 2000);
//             }

//         });

//     });

// });

const open_menu_btn = document.getElementById('menu_open');
const navbar_mobile = document.getElementsByClassName('nav_mobile')[0]
const close_menu_btn = document.getElementById('menu_close_btn');

open_menu_btn.addEventListener('click', () => {
    navbar_mobile.style.transform = "translateX(0)";
});

close_menu_btn.addEventListener('click', () => {
    navbar_mobile.style.transform = "translateX(-104vw)";
});
