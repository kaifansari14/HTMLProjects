document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  const typingElement = document.getElementById("typing");
  const words = ["Web Developer", "Developer", "Web designer", "Youtuber"];
  let wordIndex = 0;
  let LetterIndex = 0;
  let currentWord = "";
  let currentLatters = "";
  let isDeleting = false;

  function type() {
    if (isDeleting) {
      currentLatters = currentWord.substring(0, LetterIndex - 1);
      LetterIndex--;
    } else {
      currentLatters = currentWord.substring(0, LetterIndex + 1);
      LetterIndex++;
    }

    typingElement.innerHTML = currentLatters;

    let typeSpeed = 200;
    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && LetterIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && LetterIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
      currentWord = words[wordIndex];
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  currentWord = words[wordIndex];
  type();
});
