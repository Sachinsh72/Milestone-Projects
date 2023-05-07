const button = document.getElementById("btn");

var index = 0;

button.addEventListener("click", changeColor)

function changeColor (){
    var color = ["red", "green", "orange", "yellow", "blue","pink"];
    
    document.body.style.backgroundColor = color[index++];

    if(index > color.length - 1)
    index = 0;
}

