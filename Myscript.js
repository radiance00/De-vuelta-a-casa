$(document).ready(function () {
    console.log("Dark souls")
    const nameInput = document.getElementById("fname");
    const btnnext = document.getElementById("fname");
    btnnext.addEventListener("click" , function(){
        const email = "radiacepro64@gmail.com";
        const nameInputvalue = nameInput.value;
        const subject = "chimichangas";
        const body = `Correo de Resident Evil enviado a: ${nameInputvalue}`;

     window.location.href = `mailto:radiacepro64@gmail.com${email}?subject=${subject}&body=${body},`;
    });
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

    const nextSlide = document.querySelector(".btn-next");

    let curSlide = 0;

    let maxSlide = slides.length - 1;

    nextSlide.addEventListener("click", function () {
    
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }


        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });


    const prevSlide = document.querySelector(".btn-prev");

    prevSlide.addEventListener("click", function () {
    
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

})