/* IMAGE SLIDER */

const slides = document.querySelectorAll(".slide");
const enableSlideshow = document.getElementById("enableSlideshow");
const slideshowState = document.getElementById("slideshowState");
slideshowState.classList.add("greenText");
let slideIdx = 0;
let intervalID = null;
let isSlideshowEnabled = true;


enableSlideshow.addEventListener("click", () => {
    if(isSlideshowEnabled){
        slideshowState.classList.remove("greenText");
        slideshowState.classList.add("redText");
        slideshowState.textContent = "off";
        clearInterval(intervalID);

    }else{
        slideshowState.classList.remove("redText");
        slideshowState.classList.add("greenText");
        slideshowState.textContent = "on";
        intervalID = setInterval(nextSlide, 5000);
    }

    isSlideshowEnabled = !isSlideshowEnabled;
})

   
document.addEventListener("DOMContentLoaded", initSlider)

function initSlider(){
    if(slides.length > 0){
        slides[slideIdx].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 5000);
    }

}

function showSlide(index){
    if(index >= slides.length){
        slideIdx = 0;
    }else if(index < 0){
        slideIdx = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIdx].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalID);
    slideshowState.classList.remove("greenText");
    slideshowState.classList.add("redText");
    slideshowState.textContent = "off";
    slideIdx--;
    showSlide(slideIdx);
}

function nextSlide(){
    slideIdx++;
    showSlide(slideIdx);
}