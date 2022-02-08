//hardcode values to release later
const DEFAULTPIXELCOUNT = 16; //default width of canvas
const MAXCANVASLENGTH = 128; //maximum width of canvas

main();


function main() {
    createGrid(DEFAULTPIXELCOUNT);
    createMenu();
}

function createGrid(pixelCount) {
    const canvas = document.querySelector(".EAS-container");

    //creates divs within canvas
    canvas.style.gridTemplateColumns = `repeat(${pixelCount}, minmax(0, 1fr))`;
    canvas.style.gridTemplateRows = `repeat(${pixelCount}, minmax(0, 1fr))`;
    totalPixelCount = pixelCount * pixelCount;
    for(let i = 0; i < totalPixelCount; i++) {
        canvas.appendChild(document.createElement('div'));
    }

    //set canvas color to secondaryColor
    const canvasPixels = document.querySelectorAll("div.EAS-container > *");
    canvasPixels.forEach(e => e.style.backgroundColor = document.querySelector("#secondaryColor").value);
    //console.log(document.querySelector("#secondaryColor").value);

    draw();
}

function createMenu() {
    clearCanvasBtn(); //clear canvas, create new dimension
    toolPicker(); //adds .addEventListener to tools to draw() with new color when selected
}


// MENU BUTTONS //
function clearCanvasBtn() {
    const clearBtn = document.querySelector("#clear-btn");

    //creates new canvas
    clearBtn.addEventListener('click', function() {
        let input = prompt(`How many pixels would you like on a side? Max ${MAXCANVASLENGTH}`, 16);
        if (input === null)
            return;
        else if (input > MAXCANVASLENGTH || input <= 0) {
            alert(`Error: Canvas length must be within 1 and ${MAXCANVASLENGTH}`)
        }
        else {
            createGrid(input);
        }
    });
}

function toolPicker() {
    const pencil = document.querySelector("#pencil");
    const eraser = document.querySelector("#eraser");
    const primaryColor = document.querySelector("#primaryColor");
    const secondaryColor = document.querySelector("#secondaryColor");

    //adds event listeners that activate upon selection of new tool or color to call draw()
    pencil.addEventListener("click", function() {draw()});
    eraser.addEventListener("click", function() {draw()});
    primaryColor.addEventListener("input", function() {draw()});
    secondaryColor.addEventListener("input", function() {draw()});
}

// DRAWING FUNCTIONS //

function draw() {
    const pencil = document.querySelector("#pencil");
    const eraser = document.querySelector("#eraser");
    const primaryColor = document.querySelector("#primaryColor").value;
    const secondaryColor = document.querySelector("#secondaryColor").value;

    let color = null;

    /*
    console.log(pencil.checked);
    console.log(eraser.checked);
    
    console.log(pencil.value);
    console.log(eraser.value);
    */

    //checks which tool is selected (pencil/eraser = primary/secondary) for color
    if (pencil.checked)
        color = primaryColor;
    else if (eraser.checked)
        color = secondaryColor;
    else
        return;
    
    //console.log(color);

    //hover effect, changes div color when mouse hovered over
    const canvasPixels = document.querySelectorAll("div.EAS-container > *");
    canvasPixels.forEach(e => e.addEventListener('mouseover', function() {e.style.backgroundColor = color}));    
}

// JUST FOR FUN //
footer();
function footer() {
    const footerText = document.querySelector(".footer-text");
    const seeTheCode = document.querySelector("#see-the-code");

    const uwu = document.createTextNode("( ⁄u⁄w⁄u⁄ )");

    seeTheCode.addEventListener("mouseover", function() {
        footerText.appendChild(uwu);
    });
    seeTheCode.addEventListener("mouseout", function() {
        footerText.removeChild(uwu);
    });
}

//mouseover, mouseout