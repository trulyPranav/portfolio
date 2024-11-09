const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})

const mainTextDisplayContents = ["Flutter", "Web", ".NET"];
let currIndex = 0;

function typeWord(word, element) {
    let charIndex = 0;
    element.innerHTML = '';
    let typingInterval = setInterval(() => {
        element.innerHTML += word[charIndex];
        charIndex++;
        if (charIndex === word.length) {
            clearInterval(typingInterval);
        }
    }, 150);
}

function displayWords() {
    const wordElem = document.querySelector(".main-display-text-change");
    const currentWord = mainTextDisplayContents[currIndex];
    typeWord(currentWord, wordElem);
    currIndex++;
    if (currIndex === mainTextDisplayContents.length)
        currIndex = 0;
    setTimeout(displayWords, currentWord.length * 150 + 2000);
    
}

displayWords();