const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
button1.onclick = function() { set1() };
button2.onclick = function() { set2() };
let type;
const set1 = () => {
    button1.style.backgroundColor = "#aab8da";
    button2.style.backgroundColor = ""
    type = "terrain";
}
const set2 = () => {
    button2.style.backgroundColor = "#aab8da";
    button1.style.backgroundColor = "";
    type = "numbers";
}

let hex1 = document.getElementById('hex1');
let hex2 = document.getElementById('hex2');
let hex3 = document.getElementById('hex3');
let hex4 = document.getElementById('hex4');
let hex5 = document.getElementById('hex5');
let hex6 = document.getElementById('hex6');
let hex7 = document.getElementById('hex7');
let hex8 = document.getElementById('hex8');
let hex9 = document.getElementById('hex9');
let hex10 = document.getElementById('hex10');
let hex11 = document.getElementById('hex11');
let hex12 = document.getElementById('hex12');
let hex13 = document.getElementById('hex13');
let hex14 = document.getElementById('hex14');
let hex15 = document.getElementById('hex15');
let hex16 = document.getElementById('hex16');
let hex17 = document.getElementById('hex17');
let hex18 = document.getElementById('hex18');
let hex19 = document.getElementById('hex19');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let num7 = document.getElementById('num7');
let num8 = document.getElementById('num8');
let num9 = document.getElementById('num9');
let num10 = document.getElementById('num10');
let num11 = document.getElementById('num11');
let num12 = document.getElementById('num12');
let num13 = document.getElementById('num13');
let num14 = document.getElementById('num14');
let num15 = document.getElementById('num15');
let num16 = document.getElementById('num16');
let num17 = document.getElementById('num17');
let num18 = document.getElementById('num18');
let num19 = document.getElementById('num19');

hex1.onclick = function() {changeColor(hex1)};
hex2.onclick = function() {changeColor(hex2)};
hex3.onclick = function() {changeColor(hex3)};
hex4.onclick = function() {changeColor(hex4)};
hex5.onclick = function() {changeColor(hex5)};
hex6.onclick = function() {changeColor(hex6)};
hex7.onclick = function() {changeColor(hex7)};
hex8.onclick = function() {changeColor(hex8)};
hex9.onclick = function() {changeColor(hex9)};
hex10.onclick = function() {changeColor(hex10)};
hex11.onclick = function() {changeColor(hex11)};
hex12.onclick = function() {changeColor(hex12)};
hex13.onclick = function() {changeColor(hex13)};
hex14.onclick = function() {changeColor(hex14)};
hex15.onclick = function() {changeColor(hex15)};
hex16.onclick = function() {changeColor(hex16)};
hex17.onclick = function() {changeColor(hex17)};
hex18.onclick = function() {changeColor(hex18)};
hex19.onclick = function() {changeColor(hex19)};  
num1.onclick = function() { changeNumbers(num1) };
num2.onclick = function() { changeNumbers(num2) };
num3.onclick = function() { changeNumbers(num3) };
num4.onclick = function() { changeNumbers(num4) };
num5.onclick = function() { changeNumbers(num5) };
num6.onclick = function() { changeNumbers(num6) };
num7.onclick = function() { changeNumbers(num7) };
num8.onclick = function() { changeNumbers(num8) };
num9.onclick = function() { changeNumbers(num9) };
num10.onclick = function() { changeNumbers(num10) };
num11.onclick = function() { changeNumbers(num11) };
num12.onclick = function() { changeNumbers(num12) };
num13.onclick = function() { changeNumbers(num13) };
num14.onclick = function() { changeNumbers(num14) };
num15.onclick = function() { changeNumbers(num15) };
num16.onclick = function() { changeNumbers(num16) };
num17.onclick = function() { changeNumbers(num17) };
num18.onclick = function() { changeNumbers(num18) };
num19.onclick = function() { changeNumbers(num19) }; 

let number1 = 0;

const changeColor = (hex) => {
    if(type === "terrain"){
        switch(number1){
            case 0: hex.style.setProperty("--z", 0); hex.style.setProperty("--color", "#bb6b4b"); hex.style.fontFamily = "b9";
            break;
            case 1: hex.style.setProperty("--z", 0); hex.style.setProperty("--color", "#ecb831"); hex.style.fontFamily = "w6";
            break;
            case 2: hex.style.setProperty("--z", 0); hex.style.setProperty("--color", "#595250"); hex.style.fontFamily = "o7";
            break;
            case 3: hex.style.setProperty("--z", 0); hex.style.setProperty("--color", "#7fa13e"); hex.style.fontFamily = "s3";
            break;
            case 4: hex.style.setProperty("--z", 0); hex.style.setProperty("--color", "#6b6b2c"); hex.style.fontFamily = "w8";
            break;
            case 5: hex.style.setProperty("--z", 10); hex.style.setProperty("--color", "#b69044"); number1 = -1; hex.style.fontFamily = "d0";
            break;
        } 
        number1++
    }
}

let number2 = 0; 
const changeNumbers = (num) => {
    if(type === "numbers"){
        switch(number2){
            case 0: num.innerHTML = '2'; num.style.color = ""; 
            break;
            case 1: num.innerHTML = '3'; num.style.color = "";  
            break;
            case 2: num.innerHTML = '4'; num.style.color = "";
            break;
            case 3: num.innerHTML = '5'; num.style.color = ""; 
            break;
            case 4: num.innerHTML = '6'; num.style.color = "red";
            break;
            case 5: num.innerHTML = '8'; num.style.color = "red";
            break;
            case 6: num.innerHTML = '9'; num.style.color = "";
            break;
            case 7: num.innerHTML = '10'; num.style.color = "";
            break;
            case 8: num.innerHTML = '11'; num.style.color = "";
            break;
            case 9: num.innerHTML = '12'; number2 = -1;
            break;
        } 
        number2++
    }
}

export {
hex1,hex2,hex3,hex4,hex5,hex6,hex7,hex8,hex9,hex10,hex11,hex12,hex13,hex14,hex15,hex16,hex17,hex18,hex19,num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12,num13,num14,num15,num16,num17,num18,num19
}