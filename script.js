
const hills = document.getElementById("mountains");
const man = document.getElementById("man");
const clouds = document.getElementById("clouds");
const landing_heading = document.getElementById("landing_heading")
const landing_para = document.getElementsByClassName("hiking_para")[0]
const heading_margin = landing_heading.style.marginTop;
const sun = document.getElementById("sun");
const sun_margin = sun.style.marginTop;

window.addEventListener('scroll', () => {

    let value = window.scrollY;
    // man.style.top = '-' + value * 0.1 + '%';
    hills.style.top = value * 0.25 + 'vh';
    clouds.style.left = '-' + value * 0.05 + '%';
    clouds.style.top = value * 0.05 + '%';
    landing_heading.style.marginTop = heading_margin + (value * 0.4) + '%';
    landing_para.style.marginTop = value * 0.7 + '%';
    sun.style.marginTop = '-' + sun_margin + (value * 0.035) + '%';
})
