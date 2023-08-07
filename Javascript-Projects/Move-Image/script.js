const moveCarton = document.getElementById("image");
let x = 0;
let y = 0;
const speed = 10;
let windowWidth = window.innerWidth;
// console.log(windowWidth);
const windowHeight = window.innerHeight;
// console.log(windowHeight);

document.addEventListener("keydown",(e) =>{
    if(e.key == "ArrowUp"){
        y -= speed;
        // console.log(y);
        if(y <= -windowHeight/2){
            y = windowHeight/2;
        }
    }else if(e.key == "ArrowDown"){
        y += speed;
        // console.log(y);
        if(y >= windowHeight/2){
            y = -windowHeight/2;
        }
    }else if(e.key == "ArrowRight"){
        x += speed;
        // console.log(x);
        if(x >= windowWidth/2){
            x = -windowWidth/2;
        }
    }else if(e.key == "ArrowLeft"){
        x -= speed;
        // console.log(x);
        if(x <= -windowWidth/2){
            x = windowWidth/2;
        }
    }

    image.style.transform = `translate(${x}px, ${y}px)`;

})