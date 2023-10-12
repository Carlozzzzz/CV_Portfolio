/*================================ toggle icon navbar ================================*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*================================ scroll sections active link ================================*/
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


    /*================================ sticky navbar ================================*/
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*================================ remove toggle icon and navbar when click nabbar link (scroll) ================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*================================ scroll reveal ================================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .expertise-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skill-bar, .bar span, .contact-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .contact-content', { origin: 'right' });


/*================================ typed js ================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Junior Web Developer', 'Junior Codeigniter Developer', 'friend'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*================================ video player ================================*/
const portfolioBox =  document.querySelectorAll('.portfolio-container .portfolio-box button');
const closeVideo = document.querySelector('.popup-video span');
// Opening Video
portfolioBox.forEach(box => {
    box.onclick = () => {
        const btnClass = box.classList[0];
        const popupVideo =  document.querySelector('.popup-video');
        const videoPlayer = document.querySelector('.popup-video video');

        popupVideo.style.display = "block";
        videoPlayer.src = getVideoLink(btnClass);
    }
})

closeVideo.onclick = () => {
    const popupVideo = document.querySelector('.popup-video');
    const videoPlayer = document.querySelector('.popup-video video');

    popupVideo.style.display = "none";
    videoPlayer.src = '';
};

function getVideoLink(btnClass) {
    let result = "";
    switch (btnClass) {
        case "online-enrollmentBtn":
            result = "files/onlineenrollment.mp4";
            break;
        case "webappBtn":
            result = "files/webapp.mp4";
            break;
        case "swpssBtn":
            result = "files/swpss.mp4";
            break;
        case "tiktaktoBtn":
            result = "files/tiktaktoe.mp4";
            break;
        case "todo-listBtn":
            result = "files/todo.mp4";
            break;
        case "login-systemBtn":
            result = "files/login.mp4";
            break;
        default:
            console.log("not found.");
            break;
    }
    return result;
}