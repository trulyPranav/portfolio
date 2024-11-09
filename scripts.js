const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})

const mainTextDisplayContents = ["Flutter", "Web", ".NET"];
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
