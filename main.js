var boxCount = 6;
var colors = generateRandomColors(boxCount);
var boxes = document.querySelectorAll('.box');
var pickedColor = randomColor();
var rgbValue = document.querySelector('#rgbValue');
var message = document.querySelector('#status');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easyButton");
var hardbtn = document.querySelector("#hardButton");

easybtn.addEventListener("click", function () {
    boxCount = 3;
    colors = generateRandomColors(boxCount);
    pickedColor = randomColor();
    rgbValue.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        }
        else {
            boxes[i].style.display = 'none';
        }
    }
});

hardbtn.addEventListener("click", function () {
    boxCount = 6;
    colors = generateRandomColors(boxCount);
    pickedColor = randomColor();
    rgbValue.textContent = pickedColor;
    for (var x = 0; x < boxes.length; x++) {
        boxes[x].style.background = colors[i];
        boxes[x].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(boxCount);
    pickedColor = randomColor();
    rgbValue.textContent = pickedColor;
    message.textContent = '';
    this.textContent = 'change the colours';
    for (var a = 0; a < boxes.length; a++) {
        boxes[a].style.background = colors[a];
    }
    h1.style.background = 'rgb(30, 37, 37)';
});

function randomColor() {

    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(genColor) {
    var array = []
    for (var j = 0; j < genColor; j++) {
        array.push(randomCol())
    }
    return array;
}

function randomCol() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

rgbValue.textContent = pickedColor;

for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        // console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            message.textContent = "YOU WON!!";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = "black";
            message.textContent = "Try Again";
        }
    });
}

function changeColors(clrs) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = clrs;
    }
}