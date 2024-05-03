

const container = document.querySelector(".container");
const buttonContainer = document.querySelector("#buttonContainer");
const newGridButton = document.createElement("button");


buttonContainer.appendChild(newGridButton);
newGridButton.textContent = "Create New Grid"


initialGrid();
mouseOverDiv();


function initialGrid () {

    for (let i = 0; i<Math.pow(16, 2); i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("rows");
    }
}



newGridButton.addEventListener("click", () => {
    let userInput = prompt("Enter a Grid Number: ");
    userInput = Number(userInput);
    if (userInput > 100) {
        return alert ("100 is the max. Enter a lower Number");
    }
    if (userInput) {
        newGrid(userInput);
        mouseOverDiv();
    }
});


function newGrid (userInput) {
    
    let divs = container.querySelectorAll(".rows"); 
    divs.forEach(div => {container.removeChild(div);})
    
    for (let j = 0; j < Math.pow(userInput, 2); j++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("rows");
    }


}


function mouseOverDiv() {

let divs = container.querySelectorAll(".rows"); 
divs.forEach(div => {
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red";
});
});

} 