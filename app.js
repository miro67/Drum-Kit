function musal(){
let y = document.querySelector("#myAudio");
document.querySelector(".w").addEventListener("click" ,()=>{
      y.setAttribute('src','sounds/tom-1.mp3');
      y.play();
})
document.querySelector(".a").addEventListener("click" ,()=>{
   y.setAttribute('src','sounds/tom-2.mp3');
   y.play();
})
document.querySelector(".s").addEventListener("click" ,()=>{
   y.setAttribute('src','sounds/tom-3.mp3');
   y.play();
})
document.querySelector(".d").addEventListener("click" ,()=>{
   y.setAttribute('src','sounds/tom-4.mp3');
   y.play();
})
document.querySelector(".j").addEventListener("click" ,()=>{
   y.setAttribute('src','sounds/crash.mp3');
   y.play();
})
document.querySelector(".k").addEventListener("click" ,()=>{
   y.setAttribute('src','sounds/kick-bass.mp3');
   y.play();
})
document.querySelector(".l").addEventListener("click" ,()=>{
   y.setAttribute('src','sounds/snare.mp3');
   y.play();
})
};
musal();