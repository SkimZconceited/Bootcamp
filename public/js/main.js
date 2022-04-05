const server = 'http://localhost:3000';
var x = true;
var res="Your selection: ";  

var c1 = document.getElementById("check1");
var c2 = document.getElementById("check2");
var c3 = document.getElementById("check3");
var c4 = document.getElementById("check4");
var c5 = document.getElementById("check5");
var c6 = document.getElementById("check6");
var c7 = document.getElementById("check7");

function func1() {
    if (x) {
        c1.disabled = true;
        c2.disabled = true;
        c3.disabled = true;
        c4.disabled = true;
        c5.disabled = true;
        c6.disabled = true;
        x = false;
        console.log(x);
    } else {
        c1.disabled = false;
        c2.disabled = false;
        c3.disabled = false;
        c4.disabled = false;
        c5.disabled = false;
        c6.disabled = false;
        x = true;
        console.log(x);
    }
}

function func2() {
    if ((c1.checked == true) ||
        (c2.checked == true) ||
        (c3.checked == true) ||
        (c4.checked == true) ||
        (c5.checked == true) ||
        (c6.checked == true)) {
        c7.disabled = true;
    }
    if ((c1.checked == false) &&
        (c2.checked == false) &&
        (c3.checked == false) &&
        (c4.checked == false) &&
        (c5.checked == false) &&
        (c6.checked == false)) {
        c7.disabled = false;
    }
} 

function checkCheckbox() { 
if (c1.checked == true){  
var pl1 = document.getElementById("check1").value;  
res = res + " " +'1.' + pl1 +',';  
}
if (c2.checked == true){  
var pl2 = document.getElementById("check2").value;  
res = res + " "  +'2.' + pl2 + ',';   
}  
if (c3.checked == true){   
var pl3 = document.getElementById("check3").value;  
res = res + " " +'3.' + pl3 + ',';   
}  
if (c4.checked == true){  
var pl4 = document.getElementById("check4").value;  
res = res+ " " +'4.' + pl4 + ',';   
}  
if (c5.checked == true){  
var pl5 = document.getElementById("check5").value;  
res = res+ " " + '5.' + pl5 + ',';   
}  
if (c6.checked == true){  
var pl6 = document.getElementById("check6").value;  
res =  res+ " "  + '6.'+ pl6 + '.';   
} 
if (c7.checked == true){  
var pl7 = document.getElementById("check7").value;  
res = res+ " " +'7.' + pl7 + '.';   
} 
alert(res); 
}