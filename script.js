const container = document.querySelector("#container");

const WIDTH = 600;

function createGrid(numberOfGrid){
    for (let i = 0; i < numberOfGrid**2; i++) {
    
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = (WIDTH/numberOfGrid) + "px";    
        grid.style.height = (WIDTH/numberOfGrid) + "px"; 
        grid.style.margin = 0;
        
        container.appendChild(grid);
    }

}

const resetGrid = document.querySelector(".resetGrid");

createGrid(16);

resetGrid.addEventListener("click",()=>{
    container.innerHTML = '';
    const numberOfGrid =  parseInt(prompt("Enter number of Grid: ",0));
    if (numberOfGrid > 100) {
        alert('Oops!!!, Maximum limit is 100');
        createGrid(16);
    }
    else{
        createGrid(numberOfGrid);
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

        event.target.style.backgroundColor = generateRandomRGBColor();
    }
})




