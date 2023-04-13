const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


btn.addEventListener("click", countVowels);

function countVowels(){
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();

}