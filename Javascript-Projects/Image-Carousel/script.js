const slides = document.querySelectorAll(".slide")

let count = 0;

slides.forEach((slides,index)=>{
    slides.style.left = `${index * 100}%`
})

const goNext =()=>{
    count++
    sildeImage();
}

const goPrev =()=>{
    count--;
    sildeImage();
}

const sildeImage =()=>{
    slides.forEach((slides)=>{
        slides.style.transform = `translateX(-${count * 100}%)`
    })
}