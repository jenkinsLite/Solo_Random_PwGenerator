const alphaCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let allCharacters = alphaCharacters 
let mode = "dark"
let useNumbers = false;
let useSymbols = false;
let pwLength = document.querySelector("#pw-len") /* need to adjust this in html */
let pwBtn = document.querySelector("#pw-btn")
let pw1 = document.querySelector("#pw1")
let pw2 = document.querySelector("#pw2")

function getAllCharacters() {

    useNumbers = document.querySelector("#num-toggle").checked;
    useSymbols = document.querySelector("#sym-toggle").checked;

    if (useNumbers) {
        allCharacters = allCharacters.concat(numCharacters)
    }

    if (useSymbols) {
        allCharacters = allCharacters.concat(symCharacters)
    } 
    
}

function getRandomCharIndex() {
    return Math.floor(Math.random() * allCharacters.length)
}

function resetAllCharacters() {
    allCharacters = alphaCharacters
}

function setPwLength() {
    if (pwLength.value === null || pwLength.value < 8) { 
        pwLength.value = 8 
    } else if (pwLength.value > 20) {
        pwLength.value = 20
    }
}

function getRandomPw() {
    let randomPw1 = ""
    let randomPw2 = ""
    setPwLength()
    resetAllCharacters() 
    getAllCharacters()
    for (let i=0; i<pwLength.value; i++) {
        randomPw1 += allCharacters[getRandomCharIndex()]
        randomPw2 += allCharacters[getRandomCharIndex()]
    }
    pw1.textContent = randomPw1
    pw2.textContent = randomPw2

}

async function copyPwTxt() {
    const pwTxt = document.querySelector("#pw1").textContent;

    try {
        await navigator.clipboard.writeText(pwTxt);
        alert("Copied");
    } catch (err) {
        console.log("Failed to copy with: " + err)
    }
}

pwBtn.addEventListener("click", getRandomPw)
pw1.addEventListener("click", copyPwTxt)
pw2.addEventListener("click", copyPwTxt)
