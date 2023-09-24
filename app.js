


const leftbtn=document.querySelector(".l-btn");
const rightbtn=document.querySelector(".r-btn");




rightbtn.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide');
    conet.scrollLeft +=1100;
    event.preventDefault();
});



leftbtn.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide');
    conet.scrollLeft -=1100;
    event.preventDefault();
});


// ........................
const leftbtn1=document.querySelector(".l-btn1");
const rightbtn1=document.querySelector(".r-btn1");




rightbtn1.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide1');
    conet.scrollLeft +=1100;
    event.preventDefault();
});


leftbtn1.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide1');
    conet.scrollLeft -=1100;
    event.preventDefault();
});

///------------------------------------------------------------

const leftbtn2=document.querySelector(".l-btn2");
const rightbtn2=document.querySelector(".r-btn2");

rightbtn2.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide2');
    conet.scrollLeft +=1100;
    event.preventDefault();
});



leftbtn2.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide2');
    conet.scrollLeft -=1100;
    event.preventDefault();
});
//-------------------------------------------------------------------
const leftbtn3=document.querySelector(".l-btn3");
const rightbtn3=document.querySelector(".r-btn3");

rightbtn3.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide3');
    conet.scrollLeft +=1100;
    event.preventDefault();
});



leftbtn3.addEventListener('click',function(event){
    console.log("done")
    const conet=document.querySelector('.product-slide3');
    conet.scrollLeft -=1100;
    event.preventDefault();
});
