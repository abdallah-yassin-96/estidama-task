jQuery('#search-icon').click( () => {
    jQuery('.search-form').toggleClass('search-active');
} );

let slideIndex = 0;
let slider = document.querySelector('.first-slider');
let slides = document.querySelector('.first-slider-slides');
let slide = document.querySelectorAll('.first-slider-slide');
let dots = document.querySelectorAll('.dots span.first-slider-span');

const currentSlide = ( index ) => {
    if ( index > slide.length){
        index = 1;
    }else if ( index < 1 ){
        index = slide.length;
    }

    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${index - 1}00%`;
    dots[index - 1].classList.add('dot-active');

    slideIndex = index;
}

const showSlide = () => {
    slideIndex++;

    if ( slideIndex > slide.length){
        slideIndex = 1;
    }else if ( slideIndex < 1 ){
        slideIndex = slide.length;
    }

    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add('dot-active');
}

let interval = setInterval( () => {
    showSlide();
}, 17000);

//-----------------------------
let slideIndex1 = 0;
let slider1 = document.querySelector('.second-slider');
let slides1 = document.querySelector('.second-slider-slides');
let slide1 = document.querySelectorAll('.second-slider-slide');
let dots1 = document.querySelectorAll('.dots span.second-slider-span');

const currentSlide1 = ( index ) => {
    if ( index > slide1.length){
        index = 1;
    }else if ( index < 1 ){
        index = slide1.length;
    }

    for (let i = 0; i < dots1.length; i++) {
        const element = dots1[i];
        element.classList.remove("dot-active");
    }

    slides1.style.left = `-${index - 1}00%`;
    dots1[index - 1].classList.add('dot-active');

    slideIndex1 = index;
}

const showSlide1 = () => {
    slideIndex1++;

    if ( slideIndex1 > slide1.length){
        slideIndex1 = 1;
    }else if ( slideIndex1 < 1 ){
        slideIndex1 = slide1.length;
    }

    for (let i = 0; i < dots1.length; i++) {
        const element = dots1[i];
        element.classList.remove("dot-active");
    }

    slides1.style.left = `-${slideIndex1 - 1}00%`;
    dots1[slideIndex1 - 1].classList.add('dot-active');
}

let interval1 = setInterval( () => {
    showSlide1();
}, 5000);
//-------------------















let index1 = 0;
const heading = jQuery('#video-heading');
const slide1_statments = [
    'Effectively Handle Scarce Water Resources with Sustainable Agriculture Technologies and Systems',
    'Global Expertise to Adapt the Good Agriculture Practices',
    'Together Towards Food Security',
    'Sustainable Agriculture Made Easy Than Ever',
    'Informed Agriculture Investment Consultation and Services'
];
setInterval( () => {
    heading.fadeOut( () => {
        heading.html(slide1_statments[index1]);
        index1++;
        if(index1 == ( slide1_statments.length - 1 )){
            index1 = 0;
        }
        
    } );
    heading.fadeIn();
}, 3000);