function checkCheckbox() { 
    var l1 = document.getElementById("check1");  
    var l2 = document.getElementById("check2");  
    var l3 = document.getElementById("check3");  
    var l4 = document.getElementById("check4"); 
    var l5 = document.getElementById("check5");  
    var l6 = document.getElementById("check6");  
    var l7 = document.getElementById("check7");  


    var res="Your selection: ";   

    if (l1.checked == true){  
    var pl1 = document.getElementById("check1").value;  
    res = res + " " +'1.' + pl1 +',';  
    }
    if (l2.checked == true){  
    var pl2 = document.getElementById("check2").value;  
    res = res + " "  +'2.' + pl2 + ',';   
    }  
    if (l3.checked == true){   
    var pl3 = document.getElementById("check3").value;  
    res = res + " " +'3.' + pl3 + ',';   
    }  
    if (l4.checked == true){  
    var pl4 = document.getElementById("check4").value;  
    res = res+ " " +'4.' + pl4 + ',';   
    }  
    if (l5.checked == true){  
    var pl5 = document.getElementById("check5").value;  
    res = res+ " " + '5.' + pl5 + ',';   
    }  
    if (l6.checked == true){  
    var pl6 = document.getElementById("check6").value;  
    res =  res+ " "  + '6.'+ pl6 + ',';   
    } 
    if (l7.checked == true){  
    var pl7 = document.getElementById("check7").value;  
    res = res+ " " +'7.' + pl7 + '.';   
    } 
    alert(res); 
    }
