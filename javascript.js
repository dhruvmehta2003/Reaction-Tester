var start = new Date().getTime();

function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for(var i =0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shapeAppear() {

    document.getElementById("shape").style.backgroundColor = randomColor();

    if (Math.random() > 0.5 ){
        var radius = Math.random()*400 + 50;
        document.getElementById("shape").style.borderRadius = radius +"px";
    }
    else{
        document.getElementById("shape").style.borderRadius = "0";
    }
    var top = Math.random() * 400;
    document.getElementById("shape").style.top = top + "px";

    var left = Math.random() * 1000;
    document.getElementById("shape").style.left = left + "px";

    var width = Math.random() * 300 + 50;
    document.getElementById("shape").style.width = width + "px";

    var height = Math.random() * 400 + 50;
    document.getElementById("shape").style.height = height + "px";


    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function delay() {
   setTimeout(shapeAppear,Math.random()*2000);
}

delay();

document.getElementById("shape").onclick = function() {

    var end = new Date().getTime();
    var timeTaken = end - start;
    timeTaken = timeTaken/1000;
    // alert(timeTaken);

    document.getElementById("shape").style.display = "none";
    document.getElementById("a").innerHTML = timeTaken + "s";

    // shapeAppear();

    delay();
}