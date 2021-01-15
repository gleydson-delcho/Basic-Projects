
var red, redOff, blue, blueOff, green, greenOff, yellow, yellowOff, purple, purpleOff;

function onLight() { 
    var selectRed = document.getElementsByClassName('red'); 
    var colorRed = Array.prototype.filter.call(selectRed, (selectRed) => 
        selectRed.nodeName === 'DIV'); 
    const red = colorRed.filter((red) =>
        red.style.boxShadow = "0 0 30px #fc5050, 0 0 40px #fc5050, 0 0 80px #fc5050"); 
}

function onLight1 () {
    var selectBlue = document.getElementsByClassName('blue');
    var colorBlue = Array.prototype.filter.call(selectBlue, (selectBlue) => 
        selectBlue.nodeName === 'DIV');
    const blue = colorBlue.filter((blue) => 
        blue.style.boxShadow = "0 0 30px #8af0fd, 0 0 40px #8af0fd, 0 0 80px #8af0fd");
}

function onLight2 () {
    var selectGreen = document.getElementsByClassName('green');
    var colorGreen = Array.prototype.filter.call(selectGreen, (selectGreen) => 
        selectGreen.nodeName === 'DIV');
const green = colorGreen.filter((green) => 
    green.style.boxShadow = "0 0 30px #0ab113, 0 0 40px #0ab113, 0 0 80px #0ab113");
}

function onLight3 () {
    var selectYellow = document.getElementsByClassName('yellow');
    var colorYellow = Array.prototype.filter.call(selectYellow, (selectYellow) =>
        selectYellow.nodeName === 'DIV');
    const yellow = colorYellow.filter((yellow) => 
        yellow.style.boxShadow = "0 0 30px #b2f744, 0 0 40px #b2f744, 0 0 80px #b2f744" );
}

function onLight4 (){
    var selectPurple = document.getElementsByClassName('purple');
    var colorPurple = Array.prototype.filter.call(selectPurple, (selectPurple) => 
        selectPurple.nodeName === 'DIV');
const purple = colorPurple.filter((purple) =>  
    purple.style.boxShadow = "0 0 30px #fd72f6, 0 0 40px #fd72f6, 0 0 80px #fd72f6");
}

function offLight () {
    var selectRed = document.getElementsByClassName('red'); 
    var colorRed = Array.prototype.filter.call(selectRed, (selectRed) => selectRed.nodeName === 'DIV'); 
    const red = colorRed.filter((red) => red.style.boxShadow = "");    
}

function offLight1 () { 
    var selectBlue = document.getElementsByClassName('blue'); 
    var colorblue = Array.prototype.filter.call(selectBlue, (selectBlue) => 
        selectBlue.nodeName === 'DIV'); 
    const blue = colorblue.filter((blue) =>blue.style.boxShadow = "");   
}
function offLight2 () { 
    var selectGreen = document.getElementsByClassName('green'); 
    var colorGreen = Array.prototype.filter.call(selectGreen, (selectGreen) => 
        selectGreen.nodeName === 'DIV') 
    const green = colorGreen.filter((green) => green.style.boxShadow = "" );    
}
function offLight3 () {
    var selectYellow = document.getElementsByClassName('yellow'); 
    var colorYellow = Array.prototype.filter.call(selectYellow,(selectYellow) => 
        selectYellow.nodeName === 'DIV');
    const yellow = colorYellow.filter((yellow) =>yellow.style.boxShadow = "");    
}

function offLight4 () {
    var selectPurple = document.getElementsByClassName('purple'); 
    var colorPurple = Array.prototype.filter.call(selectPurple,(selectPurple) => 
        selectPurple.nodeName === 'DIV');
    const purple = colorPurple.filter((purple) => purple.style.boxShadow = "");    
}

var click = false;
function interval(){
    const notClick = !click;
    if(notClick){
        red = setInterval(onLight, 500)
        redOff = setInterval(offLight, 1000)   
        blue = setInterval(onLight1, 1000)
        blueOff =setInterval(offLight1, 1500)   
        green = setInterval(onLight2, 1500)
        greenOff = setInterval(offLight2, 2000)   
        yellow = setInterval(onLight3, 2000)
        yellowOff = setInterval(offLight3, 2500)   
        purple = setInterval(onLight4, 2500)
        purpleOff = setInterval(offLight4, 3000) 

        click = true;
    }
}

function offInterval() {
    clearInterval(red)
    clearInterval(redOff)
    clearInterval(blue)
    clearInterval(blueOff)
    clearInterval(green)
    clearInterval(greenOff)
    clearInterval(yellow)
    clearInterval(yellowOff)
    clearInterval(purple)
    clearInterval(purpleOff)

    click = false;
}