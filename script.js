const menuToggle = document.querySelector('.menu-toggle');

const navMenu = document.querySelector('.nav-menu');

function closeMenu() {

    navMenu.classList.remove('is-open');

    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.querySelector('.sr-only').textContent = 'Open menu';

}

menuToggle.addEventListener('click', () => {

    const isOpen = navMenu.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));

    menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';

});

navMenu.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', closeMenu);

});

document.addEventListener('click', (event) => {

    if (!event.target.closest('.navbar')) {

        closeMenu();

    }

});

// time line scrolling animation

function updateTimelineProgress() {

    const timelines = document.querySelectorAll('.timeline');

    const screenCenter = window.innerHeight / 2;

    timelines.forEach(timeline => {

        const rect = timeline.getBoundingClientRect();

        // Timeline line-এর actual শুরু এবং শেষ

        const lineStart = rect.top + 10;

        const lineEnd = rect.bottom - 10;

        /*

         * Screen-এর center থেকে timeline-এর progress হিসাব

         *

         * Timeline-এর top যখন screen-এর center-এ আসবে

         * তখন progress = 0%

         */

        let progress =

            ((screenCenter - lineStart) / (lineEnd - lineStart)) * 100;

        // 0% - 100% এর মধ্যে রাখি

        progress = Math.max(0, Math.min(100, progress));

        timeline.style.setProperty(

            '--timeline-progress',

            `${progress}%`

        );

        // প্রতিটি timeline item-এর active state

        const items = timeline.querySelectorAll('.timeline-item');

        items.forEach(item => {

            const icon = item.querySelector('.timeline-icon');

            if (!icon) return;

            const iconRect = icon.getBoundingClientRect();

            const iconCenter =

                iconRect.top + (iconRect.height / 2);

            if (iconCenter <= screenCenter) {

                item.classList.add('timeline-active');

            } else {

                item.classList.remove('timeline-active');

            }

        });

    });

}

// Page scroll

window.addEventListener('scroll', updateTimelineProgress);

// Browser resize

window.addEventListener('resize', updateTimelineProgress);

// Page load

updateTimelineProgress();

const downloadBtn = document.getElementById('downloadBtn');     // Download button action
const facebookLink = document.getElementById('facebookLink');   // facebook button action
const linkedInLink = document.getElementById('linkedInLink');   //linkedin button action
const youtubeLink = document.getElementById('youtubeLink');     //youtube button action
const upperArrow = document.getElementById('upperArrow');       //upper button action


// Download button action

if (downloadBtn) {
    downloadBtn.onclick=function() {
        window.open('https://drive.google.com/file/d/1t7zT4Zhl77PdLzdbBzpLQg6GLZWT072r/view?usp=sharing', '_blank')
    }
}

// facebook button action

if (facebookLink){
    facebookLink.onclick= function(){
        window.open('https://www.facebook.com/profile.php?id=61593977812787', '_blank');
    }
}

// linkedin button action

if (linkedInLink){
    linkedInLink.onclick= function(){
        window.open('https://www.linkedin.com/in/minhaj-rahman-126982433/', '_blank');
    }
}

//youtube button action

if (youtubeLink){
    youtubeLink.onclick=function(){
        window.open('https://www.youtube.com/@code_with_minhaj', '_blank')
    }
}

//upper button action

if (upperArrow){
    upperArrow.onclick=function(){
        window.location.href('#cv')
    }
}


const signUpBtn = document.getElementById("signUpBtn");
const signUpPopup = document.getElementById("signUpPopup");
const closeBtn = document.getElementById("closeBtn");

signUpBtn.onclick = () => {
    signUpPopup.style.display = "flex";
};

closeBtn.onclick = () => {
    signUpPopup.style.display = "none";
};
