// document.getElementById("count-el").innerText = 5

let saveEl  = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass in arguments

let i = 0
function increment()
{
    i += 1 // ==  i = i + 1
    countEl.innerText = i
}

function save(){
    let countstr = i + " - " 
    saveEl.textContent += countstr
    countEl.innerText = 0
    i = 0
}

function decrement()
{
    i -= 1
    countEl.innerText = i
}



// //innerText vs textContent

// <div id="divA">This is <span>some</span> text!</div>

// let text = document.getElementById('divA').textContent;
// // The text variable is now: 'This is some text!'

// document.getElementById('divA').textContent = 'This text is different!';
// // The HTML for divA is now:
// // <div id="divA">This text is different!</div>


