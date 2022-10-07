'use strict';

function hello(){
    var x = document.querySelectorAll("#sidebar");
    console.log('abc')
    if(x[0].classList.contains('active')) {
        x[0].classList.remove('active'); 
    }else{
        x[0].classList.toggle('active'); 
    }
}