//to search the input text 
const para = document.getElementById("para");
const search = document.getElementById("search");

search.addEventListener("click", ()=>{
    let input = document.getElementById("input").value;

    if(input !== ""){
        let regExp = new RegExp(input, 'gi');
        para.innerHTML = para.textContent.replace(regExp, "<span>$&</span>")
    }
})

// to highlight the character greater than 8 
const highLight = document.getElementById("highLight");

highLight.addEventListener("click",()=>{
    para.innerHTML = para.innerText.split(' ').map(word=>{
        return word.length > 8 ? `<span style = 'background-color: yellow'>${word}</span>`:word
    }).join(' ');
});