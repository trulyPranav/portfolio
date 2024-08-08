document.addEventListener("DOMContentLoaded", function() {
    const marqueeText = document.querySelector('.marquee p');
    marqueeText.setAttribute('data-text', marqueeText.textContent);

    const marqueeContent = marqueeText.textContent;
    let cloneCount = Math.ceil(window.innerWidth / marqueeText.offsetWidth) + 1;
    for (let i = 0; i < cloneCount; i++) {
        const clone = document.createElement('span');
        clone.textContent = marqueeContent;
        marqueeText.appendChild(clone);
    }

    const connectWithMe = document.getElementById('connect-with-me');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            connectWithMe.classList.add('visible');
            connectWithMe.classList.remove('hidden');
        } else {
            connectWithMe.classList.add('hidden');
            connectWithMe.classList.remove('visible');
        }
        
        const marquee = document.querySelector('.marquee');
        if (window.scrollY > 50) {
            marquee.classList.add('tilted');
        } else {
            marquee.classList.remove('tilted');
        }       
    });
});
