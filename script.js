let btn1=document.getElementById("small");
let btn2=document.getElementById("small1");
let btn3=document.getElementById("bfire");
let btn4=document.getElementById("ranger");
let btn5=document.getElementById("yukon");

// For Fire pit Surround
let p1=document.getElementById("fprice");
let p2=document.getElementById("fdiscount");
let p3=document.getElementById("fsave");

// For Fire Pit Pellet Adapter
let p4=document.getElementById("rate3price");
let p5=document.getElementById("rate3discount");
let p6=document.getElementById("rate3save");

btn1.addEventListener("click",()=>{
    btn1.style.border="2px solid red";
    btn2.style.border="2px solid black";
    p1.innerText="€269.99";
    p2.innerText="€329.99";
    p2.style.color="#95979E"
    p2.style.textDecoration="line-through"
})

btn2.addEventListener("click",()=>{
    btn2.style.border="2px solid #E4531B";
    btn1.style.border="2px solid black";
    p1.innerText="€289.99";
    p2.innerText="€349.99";
    p2.style.color="#95979E"
    p2.style.textDecoration="line-through"
})

btn3.addEventListener("click",()=>{
    btn3.style.border="2px solid red";
    btn4.style.border="2px solid black";
    btn5.style.border="2px solid black";
    p4.innerText="€49.99";
    p5.innerText="€54.99";
    p6.innerText="Save €5.00";
    
})

btn4.addEventListener("click",()=>{
    btn4.style.border="2px solid red";
    btn3.style.border="2px solid black";
    btn5.style.border="2px solid black";
    p4.innerText="€29.99";
    p5.innerText="€49.99";
    p5.style.color="#95979E"
    p5.style.textDecoration="line-through"
    p6.innerText="Save €15.00";

})
btn5.addEventListener("click",()=>{
    btn5.style.border="2px solid red";
    btn3.style.border="2px solid black";
    btn4.style.border="2px solid black";
    p4.innerText="€79.99";
    p5.innerText="€99.99";
    p5.style.color="#95979E"
    p5.style.textDecoration="line-through"
    p6.innerText="Save €20.00";
})

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    video.style.display = 'block'; // Show the video element
    video.play(); // Start playing the 
    
  });

  