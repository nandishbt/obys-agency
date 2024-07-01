
function loaderanimation(){
var count = 0;
var c = document.querySelector("#count")
// var body = document.querySelector("body")
// body.style.overflow="hidden"




var a = setInterval(()=>{
    count++;
    if(count === 100){
        clearInterval(a);
      
        
       
    }
    
    c.textContent = count;
},35)

var tl = gsap.timeline()

tl.from(".fix h1,h2" , {
    y:100,
    dealy:.8,
    opacity:0,
    duration:.5,
    stagger: .2
})

tl.to(".fix h2" , {
     animation: "blink infinite 2s"
})


tl.to("#loader" ,{
    opacity:0,
    // display:'none',
    delay:3
   
})



tl.from("#page1" , {
    y:1300,
    opacity:0,
    duration:1,
    
   
})

tl.from("nav i,h5", {
    opacity:0,
    y:-100,
    stagger:.1
})

tl.from(".hero h1",{
    y:120,
    stagger:.1
})



}


function cursor(){
    document.addEventListener("mousemove",(det)=>{

    gsap.to("#cursor",{
        x:det.x,
        y:det.y
    })
})

Shery.makeMagnet('nav h5,i' , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}


var vd = document.querySelector("#video-control")
var flag = 0;
vd.addEventListener("click",()=>{

    if(flag ===0){
        var imge = document.querySelector("#video-container img")
        vd.innerHTML = `<i class="ri-pause-line"></i>`
        imge.style.display= 'none'

        flag = 1;
    }

    else{
        var imge = document.querySelector("#video-container img")
        vd.innerHTML = `<i class="ri-play-fill"></i>`
        imge.style.display= 'initial'

        flag = 0;
    }
   
})


loaderanimation()

// cursor()


