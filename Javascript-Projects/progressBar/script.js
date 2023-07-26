window.addEventListener('scroll',()=>{
    //for top scroll
    const scrolltop = document.documentElement.scrollTop ||document.body.scrollTop;
    // for total scroll height
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // for scrolled percentage
    const scrollProgress = Math.floor((scrolltop/totalHeight)*100);
    //for get the element
    const progressBar = document.getElementById("progress-bar");
    // to increase by depends upon scrolled percentage
    progressBar.style.width = scrollProgress+"%";
})