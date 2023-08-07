const moveCarton = document.getElementById("cartoon");
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
        if(y <= -windowHeight){
            y = windowHeight;
        }
    }else if(e.key == "ArrowDown"){
        y += speed;
        if(y >= windowHeight){
            y = -windowHeight;
        }
    }else if(e.key == "ArrowRight"){
        x += speed;
        if(x >= windowWidth){
            x = -windowWidth;
        }
    }else if(e.key == "ArrowLeft"){
        x -= speed;
        if(x <= -windowWidth){
            y = windowWidth;
        }
    }

    cartoon.style.transform = `translate(${x}px, ${y}px)`;

})