class Slyder{
    constructor()
    {
        this.slide = document.querySelectorAll('.slide')
        this.slide1 = this.slide[0]
        this.slide2 = this.slide[1]
        this.slide3 = this.slide[2]
        this.index = 0
        this.timerSlide = 1500
        this.btnRight = document.getElementById('btnRight')
        this.btnLeft = document.getElementById('btnLeft')
        this.btnPause = document.getElementById('btnPause')
        this.navSlide = document.querySelectorAll('.btnSlide')
        this.btnSld1 = this.navSlide[0]
        this.btnSld2 = this.navSlide[1]
        this.btnSld3 = this.navSlide[2]
        this.btnSld4 = this.navSlide[3]

    }
    listenAll()
    {
        this.btnSld1.addEventListener('click', ()=>{this.btnNavSlide(0); this.reTime()} )
        this.btnSld2.addEventListener('click', ()=>{this.btnNavSlide(1); this.reTime()} )
        this.btnSld3.addEventListener('click', ()=>{this.btnNavSlide(2); this.reTime()} )
        this.btnRight.addEventListener('click', ()=>{this.nextSlide(); this.reTime()})
        this.btnLeft.addEventListener('click', ()=>{this.previousSlide(); this.reTime()})
        this.btnPause.addEventListener('click',()=>{this.playPause(); this.reTime()})
    }

    
    nextSlide() 
    {
        this.slide[this.index].classList.remove('slideActive')
        if(this.index == 2){
            this.index = -1
        }
        this.index = this.index +1
        this.slide[this.index].classList.add('slideActive') 
        this.colorBtnSlide()
    }
    
    previousSlide()
    {
        this.slide[this.index].classList.remove('slideActive')
        if (this.index == 0) {
            this.index = 3
        }
        this.index =this.index -1
        this.slide[this.index].classList.add('slideActive')
        this.colorBtnSlide()
        this.colorBtnSlide()

    }

    startSlide()
    {
        
        this.intervalSlide = window.setInterval(()=>{this.nextSlide()}, this.timerSlide)
        
    }

    playPause()
    {
        if (this.btnPause.classList.contains('play')) {
            this.btnPause.classList.remove('play')
            clearInterval(this.intervalSlide)
            this.btnPause.classList.add('pause')

        } else {
            this.btnPause.classList.remove('pause')
            this.startSlide()
            this.btnPause.classList.add('play')
        }
    }
    reTime()
    {
        clearInterval(this.intervalSlide);
        if (this.btnPause.classList.contains('play')){
            this.startSlide();
        }
    }

    btnNavSlide(NumberSlide) 
    {
        this.slide[this.index].classList.remove('slideActive');
        this.slide[NumberSlide].classList.add('slideActive');
        this.index = NumberSlide;
        this.colorBtnSlide()

        
    }
    colorBtnSlide()
    {
        this.navSlide[0].style.backgroundColor= "black"
        this.navSlide[1].style.backgroundColor= "black"
        this.navSlide[2].style.backgroundColor= "black"
    
        this.navSlide[this.index].style.backgroundColor= "white"
        
       
        
    }


    


}


let slyde = new Slyder()
slyde.listenAll()
slyde.startSlide()







