let slide = document.querySelectorAll('.slide')
let slide1 = slide[0]
let slide2 = slide[1]
let slide3 = slide[2]
let index = 0
let btnRight = document.getElementById('btnRight')
let btnLeft = document.getElementById('btnLeft')






window.setInterval(function () {

    slide[index].classList.remove('slideActive')
        
    if(index == 2){
        index = -1;
    }
    slide[index+1].classList.add('slideActive');
    index = index +1;

    console.log(index)
    
}, 1900 )

console.log(index)