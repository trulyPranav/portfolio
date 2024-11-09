const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})

const mainTextDisplayContents = ["Flutter", "Web", "Python", ".NET"];
let currIndex = 0;

function typeWord(word, element, callback) {
    let charIndex = 0;
    element.innerHTML = '';
    element.style.borderRight = "2px solid white";
    let typingInterval = setInterval(() => {
        element.innerHTML += word[charIndex];
        charIndex++;
        if (charIndex === word.length) {
            clearInterval(typingInterval);
            callback();
        }
    }, 150);
}

function deleteWord(element, word, callback) {
    let charIndex = word.length - 1;
    let deletingInterval = setInterval(() => {
        element.innerHTML = word.slice(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
            clearInterval(deletingInterval);
            callback();
        }
    }, 100);
}

function displayWords() {
    const wordElem = document.querySelector(".main-display-text-change");
    const currentWord = mainTextDisplayContents[currIndex];
    
    wordElem.classList.add("typing-animation");
    typeWord(currentWord, wordElem, () => {
        setTimeout(() => {
            deleteWord(wordElem, currentWord, () => {
                currIndex++;
                if (currIndex === mainTextDisplayContents.length) {
                    currIndex = 0;
                }
                setTimeout(displayWords, 500);
            });
        }, 1000);
    });
}

displayWords();

const images = document.querySelectorAll('.image-item');
let imageIndex = 0;

function changeImage() {
    images.forEach(img => img.classList.remove('active'));
    images[imageIndex].classList.add('active');
    imageIndex = (imageIndex + 1) % images.length;
}
setInterval(changeImage, 1750*2);
changeImage();

window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    const scrollPosition = window.scrollY;
    const md1 = document.querySelector(".mainDisplay");

    if (scrollPosition > 300) {
        logo.classList.add('logo-fixed');
        md1.classList.add('opace');
        md1.classList.remove('opaceAgain');
    } else {
        logo.classList.remove('logo-fixed');
        // md1.classList.remove('opace');
        md1.classList.add('opaceAgain');
    }
});
