/*--------------------------------- JS Code By Nirav ---------------------------------*/


function show(){

    let arr = [
    "Be yourself; everyone else is already taken.",
    "It is never too late to be what you might have been.",
    "Nothing is impossible. The word itself says 'I'm possible'!",
    "Either you run the day, or the day runs you.",
    "In the middle of difficulty lies opportunity",
    "What we think, we become.",
    "Whatever you are, be a good one",
    "I have nothing to declare except my genius.",
];

let randomIdx = Math.floor(Math.random()*arr.length);

let quote = arr[randomIdx];

document.getElementById('quote').innerHTML = `<span>"</span>${quote}<span>"</span>`;
}