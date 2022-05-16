let greenbutton = document.querySelector("#greenButton")
console.log(greenbutton)
let passbox1 = document.querySelector("#passbox1")
let passbox2 = document.querySelector("#passbox2")
let passbox3 = document.querySelector("#passbox3")
let passbox4 = document.querySelector("#passbox4")
console.log(passbox1)
console.log(passbox2)
console.log(passbox3)
console.log(passbox4)

let possible_characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+="
// store all possible characters in an array
let charArray = Array.from(possible_characters);

function passwordBoxes(){

  passbox1.textContent = randomPassword()
  passbox2.textContent = randomPassword()
  passbox3.textContent = randomPassword()
  passbox4.textContent = randomPassword()
}

function randomPassword(){
    let randomstr = ""
    for(var i =0; i<10; i++){
        let index = Math.floor(Math.random()*74)
        randomstr+= charArray[index]
    }
    return randomstr
}

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("passbox1"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

let copiedBox = document.querySelector("#passbox1") 
copiedBox.addEventListener("click",box)

function box(){
    this.classList.add("selected");
}

greenbutton.addEventListener("click", passwordBoxes);




