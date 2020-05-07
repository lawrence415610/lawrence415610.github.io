window.addEventListener('load', function () {
    // the preloader setting
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader-disappear');

    // the typing machine setting
    const options = {
        strings: ['YELIN', 'Web Developer', 'UX Designer'],
        typeSpeed: 100,
        loop: true,
        loopCount: Infinity
    };

    const typed = new Typed('#motion-text', options);

    // general navigation, click the nav bar to show the three sections
    const nav = document.querySelectorAll('#nav li');
    const section = document.querySelectorAll('section');

    for (let i = 0, len = nav.length; i < len; i++) {
        nav[i].addEventListener('click', () => {
            //clear
            nav.forEach((each) => {
                each.classList.remove('nav__li-clicked');
            });
            section.forEach((each) => {
                each.classList.remove('section-display');
            });
            //set the clicked one a new class
            nav[i].classList.add('nav__li-clicked');
            section[i].classList.add('section-display');
        });
    }

    // portfolio navigation, click the tab then show the work with the label
    const navPortfolio = document.querySelectorAll('#works li');
    const navPortfolioLabel = document.querySelectorAll('#works li>a');
    const portfolioWorks = document.querySelectorAll('#works .work__wrapper');

    navPortfolio.forEach((el1) => {
        el1.addEventListener('click', function () {
            // change the state of the label
            let label = el1.firstElementChild;
            navPortfolioLabel.forEach((el2) => {
                el2.classList.remove('work_current');
            });
            label.classList.add('work_current');
            // check whether the data-type of the nav and the element are the same
            portfolioWorks.forEach((el3) => {
                if (label.getAttribute('data-type') === el3.getAttribute('data-type')) {
                    el3.style.display = 'block';
                } else if (label.getAttribute('data-type') === 'all') {
                    portfolioWorks.forEach((el4) => {
                        el4.style.display = 'block';
                    })
                } else {
                    el3.style.display = 'none';
                }
            })
        });
    });

    // the video player settings
    const player = document.querySelector('.player');
    const video = document.querySelector('#player__video');
    const playerButton = document.querySelector('.player__button');
    const progress = document.querySelector('.progress');
    const progressFilled = document.querySelector('.progress__filled');
    let mouseDown = false;

    function togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }

    function toggleBtn() {
        playerButton.style.backgroundImage = video.paused ? "url(\'pause.svg\')" : "url(\'play.svg\')";
    }

    function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
        if (video.currentTime === video.duration) {
            video.currentTime = 0;
            playerButton.style.backgroundImage = "url(\'./Resources/img/play.svg\')";
        }
    }

    function scrub(e) {
        video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
    }

    player.addEventListener('click', () => {
        toggleBtn();
        togglePlay();
    });

    video.addEventListener('timeupdate', handleProgress);
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousedown', () => mouseDown = true);
    progress.addEventListener('mouseup', () => mouseDown = false);
    progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));

    // animations
    const singleExp = document.querySelectorAll('.single-experience__main');
    const singleTime = document.querySelectorAll('.single-experience__time');
    const aCard = document.querySelectorAll('.awardCards__card');
    singleExp.forEach(el => {
        el.classList.add('animated', 'flipInX');
    });
    singleTime.forEach(el => {
        el.classList.add('animated', 'flipInX');
    });
    aCard.forEach(el => {
        el.classList.add('animated', 'slideInRight');
    });
});

