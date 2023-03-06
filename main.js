var mouseEvent = "empty";
var lastPositionX, lastPositionY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthLine = 1;
    canvas.addEventListener("mousedown", myMouseDown);
    // função myMouseDown
    