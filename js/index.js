let button = document.getElementById("button-test");
button.addEventListener("click", (e) => {
    let linkNode = document.getElementsByTagName("link")[0];
    if (linkNode.href.includes('light'))
        linkNode.href = "css/dark.css"
    else
        linkNode.href = "css/light.css"        
});

