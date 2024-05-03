

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
        div.style.flex = `0 1 calc(6.25% - 1.82px)`;
    }
}



newGridButton.addEventListener("click", () => {
    let userInput = prompt("Enter a Grid Number: ");
    userInput = Number(userInput);

    if (userInput > 100) {
        return alert ("100 is the max. Enter a lower Number");
    }   if (userInput) {
            newGrid(userInput);
            mouseOverDiv();
    
        }
});

function newGrid (userInput) {
    const gridLayout = 100 / userInput; 
    let divs = container.querySelectorAll(".rows"); 
    divs.forEach(div => {container.removeChild(div);})
    
    for (let j = 0; j < Math.pow(userInput, 2); j++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("rows");
        div.style.flex = `0 1 calc(${gridLayout}% - 1.82px)`;
    }  
}

function incrementVariable (number) {
    number -= 0.1;
    return number = parseFloat(number.toFixed(1));
    }

function mouseOverDiv() {

let opacityValue = 1;

let divs = container.querySelectorAll(".rows"); 
    divs.forEach(div => {
        div.addEventListener("mouseenter", () => {
           
                    let red = Math.floor(Math.random()*255);
                    let green = Math.floor(Math.random()*255);
                    let blue = Math.floor(Math.random()*255);
                    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                    opacityValue = incrementVariable(opacityValue)
                    div.style.opacity = opacityValue;
                    console.log(opacityValue);
        });
    });
}  

 



  