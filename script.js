const container = document.querySelector("#container");

const WIDTH = 600;


let isRandom = false;
let isDark = false;
let color = 'black';

function createGrid(numberOfGrid, isDark){


    container.innerHTML = '';
    
    for (let i = 0; i < numberOfGrid**2; i++) {
    
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = (WIDTH/numberOfGrid) + "px";    
        grid.style.height = (WIDTH/numberOfGrid) + "px"; 
        grid.style.margin = 0;
        
        if (isDark) {
            grid.style.backgroundColor = "black";
            grid.style.opacity = 0;
        }
        container.appendChild(grid);
    }

}

const setGridSize = document.querySelector(".setGridSize");

let numberOfGrid = 16;
createGrid(numberOfGrid, isDark);

setGridSize.addEventListener("click",()=>{
    
    numberOfGrid =  parseInt(prompt("Enter number of Grid: ",0));
    if (numberOfGrid > 100) {
        alert('Oops!!!, Maximum limit is 100');
        createGrid(16);
    }
    else{
        createGrid(numberOfGrid, isDark);
    }
    
})

function generateRandomRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}


container.addEventListener("mouseover",(event)=>{
    
    if (event.target.classList.contains('grid')) {
            if (isRandom) {
                event.target.style.backgroundColor = generateRandomRGBColor();
            }
            else if(isDark) {
                if(event.target.style.opacity < 1){
                    let currentOpacity = parseFloat(event.target.style.opacity); 
                    event.target.style.opacity = (currentOpacity + 0.1).toString();
                }
            }
            else{
                event.target.style.backgroundColor = color;
            }
    }
})

const random = document.querySelector(".random");
const darken = document.querySelector(".darken");
const mono = document.querySelector(".mono");

mono.addEventListener("click",()=>{
    isRandom = false;
    isDark = false;
    colorPicker.click();
    createGrid(numberOfGrid, isDark);
})

darken.addEventListener("click",()=>{
    isRandom = false;
    isDark = true;
    createGrid(numberOfGrid, isDark);
})

random.addEventListener("click",()=>{
    isRandom = true;
    isDark = false;
    createGrid(numberOfGrid, isDark);
})


const reset = document.querySelector(".reset");

reset.addEventListener("click",()=>{
    createGrid(numberOfGrid, isDark);
})

const colorPicker = document.getElementById('colorPicker');


colorPicker.addEventListener('input', function() {
    // Change the background color of the target element
    color = colorPicker.value;
    
});