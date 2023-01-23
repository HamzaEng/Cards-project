const parent = document.getElementById('cards').children;
let cards = Array.from(parent);
const left = document.getElementById('btnLeft');
const right = document.getElementById('btnRight');

let i = 0;
let size = cards.length - 1;

left.addEventListener("click", toLeft);
right.addEventListener('click', toRight);

window.addEventListener("keydown", event => {
    if ( event.key == "ArrowRight") {
      toRight();
    }
})

window.addEventListener("keydown", event => {
    if ( event.key == "ArrowLeft") {
      toLeft();
    }
})


function toLeft() {
    if(i > 0) {
        cards[i].style.transform = "translateX(1000px)";
        cards[i].style.opacity = "0";
        i--;
        if( i < size ) {
            right.style.opacity = "1";
        }
        if( i == 0 ) {
            left.style.opacity = "0";
        } 
    }
}

function toRight() {
    if( i <= size) {
        i++;
        cards[i].style.transform = "translateX(0)";
        cards[i].style.opacity = "1";
        if( i == size ) {
            right.style.opacity = "0";
        }
        if( i >= 1 ) {
            left.style.opacity = "1";
        } 
    }
}