var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var spanText = document.getElementById("colorCode");
var message = document.querySelector("#displayAnswer");
var h3 = document.querySelector("h3");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    spanText.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
    if(colors[i]) {
        squares[i].style.backgroundColor = colors[i];
    }
    else { squares[i].style.display = "none";
}

}
});

hardBtn.addEventListener("click", function() {
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    spanText.textContent = pickedColor;


    for(var i=0; i<squares.length; i++) {

          squares[i].style.backgroundColor = colors[i];
          squares[i].style.display = "block";
        
    }

});

resetButton.addEventListener ("click", function() {
    
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    spanText.textContent = pickedColor;

    this.textContent = "NEW GAME";

    message.textContent = "";
    
    for(var i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    }
    h3.style.backgroundColor = "azure" ;
} )

spanText.textContent = pickedColor;

for(var i=0; i < squares.length; i++) {

squares[i].style.backgroundColor = colors[i];

squares[i].addEventListener("click", function() {

var clickedColor = this.style.backgroundColor;

if (clickedColor === pickedColor) {
    message.textContent = "Correct!";
    changeColors(clickedColor);
    h3.style.backgroundColor = clickedColor;
    resetButton.textContent = "PLAY AGAIN?"
    }

else {
    this.style.backgroundColor = "#776767";
    message.textContent = "Try Again!"
    }
  });
}


function changeColors(color) {

    for(var i=0; i<squares.length; i++ ) {
        squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = []

    for(var i=0; i<num; i++) {
arr.push(randomColor())

    }
    return arr;
} 


function randomColor() {

    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}