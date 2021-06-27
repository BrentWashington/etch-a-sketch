const container = document.getElementById("container");

createGrid(16, 16);

// Creates a sketching grid
function createGrid(rows, cols) {
    // Assign the inputted rows/columns to the CSS variables
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", cols);
    // Create and add the grid squares
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

const squares = document.getElementsByClassName("grid-item");
for (let i = 0; i < squares.length; i++) {
    /* 
    Change every square to a random color whenever the mouse cursor
    hovers over it
    */
    squares[i].addEventListener("mouseover", function (event) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        event.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
    });
}