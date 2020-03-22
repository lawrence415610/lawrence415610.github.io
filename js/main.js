$(window).load(function () {
    $("#preloader").delay(300).fadeOut("slow");
});

$(document).ready(function () {
    const nav = document.querySelectorAll('#nav li');
    const section = document.querySelectorAll('section');

    const navPortfolio = document.querySelectorAll('#works li');
    const navPortfolioLabel = document.querySelectorAll('#works li>a');
    const portfolioWorks = document.querySelectorAll('#works .work_wrapper');

    // general navigation, click the nav bar to show the three sections
    for (let i = 0, len = nav.length; i < len; i++) {
        nav[i].addEventListener('click', () => {
            //clear
            nav.forEach((each) => {
                each.classList.remove('li_current');
            });
            section.forEach((each) => {
                each.classList.remove('show_section');
            });
            //set the clicked one a new class
            nav[i].classList.add('li_current');
            section[i].classList.add('show_section');
        });
    }

    // portfolio navigation, click the tab then show the work with the label
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
    const video = document.querySelector('#player_video');
    const playerButton = document.querySelector('.player_button');
    const progress = document.querySelector('.progress');
    const progressFilled = document.querySelector('.progress_filled');
    let mouseDown = false;

    function togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }

    function toggleBtn() {
        playerButton.style.backgroundImage = video.paused ? "url(\'./Resources/img/pause.svg\')":"url(\'./Resources/img/play.svg\')";
    }

    function handleProgress(){
        const percent = (video.currentTime/video.duration)*100;
        progressFilled.style.width = `${percent}%`;
        if(video.currentTime === video.duration){
            video.currentTime = 0;
            playerButton.style.backgroundImage = "url(\'./Resources/img/play.svg\')";
        }
    }

    function scrub(e){
        video.currentTime = (e.offsetX/progress.offsetWidth)*video.duration;
    }

    player.addEventListener('click', () => {
        toggleBtn();
        togglePlay();
    });

    video.addEventListener('timeupdate', handleProgress);
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousedown', ()=>mouseDown = true);
    progress.addEventListener('mouseup', ()=>mouseDown = false);
    progress.addEventListener('mousemove', (e)=>mouseDown && scrub(e));

});