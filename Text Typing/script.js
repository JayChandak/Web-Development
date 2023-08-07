const text  = document.querySelector("h1 span");
const words = ["Learn","Code","Practice","Repeat"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () =>{
    let currentWord = words[wordIndex];
    let currentChar = currentWord.substring(0,charIndex);
    text.textContent = currentChar;
    text.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length){
        // add
        charIndex++;
        setTimeout(typeEffect,200);
    } else if(isDeleting && charIndex > 0) {
        // remove
        charIndex--;
        setTimeout(typeEffect,100);
    }else{
        // next word
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        text.classList.remove("stop-blinking");
        setTimeout(typeEffect,1000);        
    }

    // console.log(currentWord,currentChar);
}

typeEffect();