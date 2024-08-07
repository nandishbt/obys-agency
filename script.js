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
//     document.addEventListener("mousemove",(det)=>{

//     gsap.to("#cursor",{
//         x:det.x,
//         y:det.y
//     })
// })

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    // width: '2vw',
    // height: '2vw',
    // border-radius: '50%',
    // border: '1px solid #fff',
    // background:'transparent'
    
    
  });

Shery.makeMagnet('nav h5,i' , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}


function video(){
    var vd = document.querySelector("#video-control")
    

}



function page2shery(){
    Shery.imageEffect(".image-box", {
        style: 6,
        // debug:true,
       
        
        Config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,
            "range":[-9999999,9999999]},"aspect":{"value":1.0333865736866836},"ignoreShapeAspect":{"value":true},
            "shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
            "shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},
            "infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},
            "durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},
            "maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},
            "noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.15,"range":[0,10]},
            "metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.02,
                "range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":14.5,"range":[0,100]}},
        gooey:true,
        // preset: "/preset.json"
        
      });
}

function vdc(){
    var vdC = document.querySelector("#video-container")
    var vdCt = document.querySelector("#video-control")
    var vid = document.querySelector("#video-container video")
    var msf = document.querySelector(".mousefollower")

    vdC.addEventListener("mouseenter",()=>{
        // msf.style.display = 'none';

      vdC.addEventListener("mousemove",(det)=>{
        gsap.to(".mousefollower" ,{
            opacity:0
        })

        gsap.to("#video-control",{
            x:det.x - 1400,
            y:det.y -70,
        })
      })
    })

    var flag = 0;
vdC.addEventListener("click",()=>{

    if(flag ===0){
        var imge = document.querySelector("#video-container img")
        vdCt.innerHTML = `<i class="ri-pause-line"></i>`
        imge.style.display= 'none';
        vid.play()
        

        flag = 1;
    }

    else{
        var imge = document.querySelector("#video-container img")
        vdCt.innerHTML = `<i class="ri-play-fill"></i>`
        imge.style.display= 'initial'
        vid.pause()

        flag = 0;
    }
   
})

vdC.addEventListener("mouseleave",()=>{
    // vdC.addEventListener("mousemove",()=>{
        // msf.style.opacity = 1;
        // msf.style.display = 'initial';
        gsap.to(".mousefollower" ,{
            opacity:1
        })
      gsap.to("#video-control",{
          x:'70%',
          y:'-15%'
      })
    })
  
}

vdc()

video()
page2shery()
loaderanimation()

cursor()

locomotive()


