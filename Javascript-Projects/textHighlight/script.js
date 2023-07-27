const highLight = document.getElementById("highLight");
const para = document.getElementById("para");
const search = document.getElementById("search")

highLight.addEventListener("click",()=>{
    const word = para.innerText.split(' ');
    // console.log(word);

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > 8) {
            // const highLightWord = document.createElement("span");
            const highLightWord = word[i]
            // highLightWord.classList.add("lightword");
            // highLightWord.innerHTML = word[i];
            highLightWord.style.backgroundColor = "yellow";
            // word[i] = highLightWord.innerHTMLHTML;
            // word[i].outerHTML = highLightWord
        }
    }
    para.innerText = word.join(' ');
})