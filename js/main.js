window.addEventListener('load', function () {

    const nav = document.querySelectorAll('#nav li');
    const section = document.querySelectorAll('section');

    const navPortfolio = document.querySelectorAll('#works li');
    const navPortfolioLabel = document.querySelectorAll('#works li>a');
    const portfolioWorks = document.querySelectorAll('#works .work_wrapper');

    // TODO: use the preloader to load me img


    // general navigation, click the nav bar to show the three sections
    for (let i = 0, len = nav.length; i < len; i++) {
        nav[i].addEventListener('click', () => {
            //clear all before set
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
            // check whether the data-type of the nav and the element are the same, if same, show, otherwise hide
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
});