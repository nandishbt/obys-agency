function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});











// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


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






tl.from("#page1" , {
    y:1300,
    opacity:0,
    delay:3,
    duration:1,
    
   
})

tl.to("#loader" ,{
    // opacity:0,
    display:'none',
    // delay:3
   
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



function page2shery(){
    Shery.imageEffect(".image-box", {
        style: 5,
        debug: {"a":{"value":4.12,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.0333865736866836},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.56,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
      });
}

page2shery()
loaderanimation()

cursor()

locomotive()


