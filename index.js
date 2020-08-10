// var myImage = document.getElementById("eneimage");
// var ArrayImage = ["IMAGE/ene7.png", "IMAGE/ene5.png", "IMAGE/ene8.png"];
// var imageIdex = 0;

// function changeImage() {
//     myImage.setAttribute("src", ArrayImage[imageIdex]);
//     imageIdex++;

//     if (imageIdex >= ArrayImage.length) {
//         imageIdex = 0;
//     }
// }

// setInterval(changeImage, 3000);



const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();



var myImage = document.getElementById("arianaimage");
var ArrayImage = ["IMAGE/ariana8.png", "IMAGE/ariana5.png", "IMAGE/ariana7.png"];
var imageIdex = 0;

function changeImage() {
    myImage.setAttribute("src", ArrayImage[imageIdex]);
    imageIdex++;

    if (imageIdex >= ArrayImage.length) {
        imageIdex = 0;
    }
}

setInterval(changeImage, 3000);









