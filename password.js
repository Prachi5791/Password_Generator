const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");

const lowercaseE1 = document.getElementById("lowercase");
const uppercaseE1 = document.getElementById("uppercase");
const numbersE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");

const generateBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyIcon");
const passIndicator = document.getElementById("passIndicator");

const lowercaseLetters = "abcdefghijklmnoprstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=/<>,.:;{}[]()?\|'";


sliderValue.textContent = inputSlider.value; //if not written then value won't be displayed // to display defalult value
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;
    generatePassword();

})
function generatePassword(){
    const length = inputSlider.value;
    //the digits displayed assigned to it
    let characters = "";
    let password = "";
    characters += lowercaseE1.checked ? lowercaseLetters : "";
    characters += uppercaseE1.checked ? uppercaseLetters : "";
    characters += numbersE1.checked ? numbers : "";
    characters += symbolsE1.checked ? symbols : "";
    for(let i=0; i<length ; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length))
        // console.log(password);

    }
    passBox.value = password;
    updatePasswordIndicator();
}

generateBtn.addEventListener("click",()=>{
    generatePassword();
})

function updatePasswordIndicator(){
    const passwordStrength = getPasswordStrength(passBox.value);
    // console.log(passwordStrength);
    passIndicator.className= "pass-indicator " + passwordStrength;
    //space between the pass-indicator and password strenght is must to get the color
    //since pass-indicator was in css for each 
    // console.log(passIndicator.className)
}

function getPasswordStrength(password){
    if(password.length <=10){
        return "weak";
    }
    else if(password.length <=20){
        return "medium";
    }
    else{
        return "strong";
    }
}
window.addEventListener('DOMCcontentLoaded',()=>{
    updatePasswordIndicator();
})

copyBtn.addEventListener("click",()=>{
    if(passBox.value != "" ||passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = "check";

        //to again make the copy sign come
        setTimeout(()=>{
            copyBtn.innerHTML = "content_copy";

        },3000);
    }
})