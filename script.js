

const container = document.querySelector(".container");

for (let i = 0; i<Math.pow(16, 2); i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("rows");
    
}


let divs = container.querySelectorAll(".rows"); 


divs.forEach(div => {
div.addEventListener("mouseover", mouseOverDiv);
});

function mouseOverDiv() {
    this.style.backgroundColor = "red";
}





