var h1=document.querySelector(".box h1")
var i=document.querySelector(".inner")
var btn=document.querySelector("button")
var s=document.querySelector("span")

var a=0
btn.addEventListener("click",()=>{
  
  
let raju=setInterval(() => {
  a++

  i.style.width=a+"%"
  s.innerHTML=a+"%"
   btn.style.pointerEvents="none"
   btn.style.opacity="0.5"
  // console.log(a)



}, 5);
setTimeout(() => {
  
  clearInterval(raju)
  h1.innerText="downloded"
}, 500);
})

