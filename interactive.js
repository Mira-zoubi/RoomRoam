var slider=document.querySelector(".images");//the box that contains the images
var images = document.querySelectorAll(".sliderImages"); //every image
var imagesLength = images.length;
let index=0;

function slideImages() {
    index++;
    if(index >= imagesLength){
        index = 0;
    }
let imageWidth = images[0].clientWidth;  
    slider.style.transform = `translateX(${-imageWidth * index}px)`; 

    slideImages.style.borderRadius="18px";
}

setInterval(slideImages, 2100);


function staySticky(){

    var headingElements=document.querySelectorAll(".container1");

    if(window.scrollY>70){
   
  headingElements.forEach(elements => {
 elements.style.backgroundColor="White";
            
        });
       
    }
    else{
      headingElements.forEach(elements => {
 elements.style.backgroundColor="";
            
        });
    }
    
        }
        window.addEventListener('scroll', staySticky);
      


function addToLoved(){
var popupMessage=document.querySelectorAll(".popUpMessage");

popupMessage.forEach((element)=> {
    element.style.transform="scale(1) translateX(220px) translateY(0px)";
    element.style.transition=" transform 4s ease 0";

});

var overlay=document.querySelector(".overlay");
overlay.style.display="block";

}
function closeaddtoLoved(){
var closeButton=document.getElementById("closeButton");
var popUpMessage=document.querySelectorAll(".popUpMessage");
var overlay=document.querySelector(".overlay");
popUpMessage.forEach((element)=> {
    element.style.transform="scale(0)";
});
overlay.style.display="none";
}


// function slideforward(){
// var allImages = document.querySelector(".tophotelsimagesWhole");
//     var widthNum = allImages.clientWidth;

   
//     allImages.style.transform = `translateX(-${widthNum}px)`;
//     allImages.style.transition="transform 0.4s ease ";
    


//     var backsliderButton=document.getElementById("backsliderButton");
//     backsliderButton.style.display="block";


// }