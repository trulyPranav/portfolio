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
    element.style.borderRight = "2px solid white";
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
    wordElem.classList.add("typing-animation");
    currIndex++;
    if (currIndex === mainTextDisplayContents.length)
        currIndex = 0;
    setTimeout(() => {
        // wordElem.style.borderRight = "none";

        setTimeout(() => {
            wordElem.style.borderRight = "2px solid white";
            displayWords();
        }, 500);
    }, currentWord.length * 150 + 2000);
    
}

displayWords();