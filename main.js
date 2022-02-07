//hardcode values to release later
const DEFAULTPIXELCOUNT = 16; //default width of canvas
const MAXCANVASLENGTH = 128; //maximum width of canvas
const DEFAULTPRIMARYCOLOR = document.querySelector("#primaryColor").value;
const DEFAULTSECONDARYCOLOR = document.querySelector("#secondaryColor").value;

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
    console.log(document.querySelector("#secondaryColor").value);

    draw(DEFAULTPRIMARYCOLOR);
}

function createMenu() {
    clearCanvasBtn(); //clear canvas, create new dimension
    primaryColorBtn(); //select primary color


}


// MENU BUTTONS //
function clearCanvasBtn() {
    const clearBtn = document.querySelector("#clear-btn");

    clearBtn.addEventListener('click', function() {
        let input = prompt(`How many pixels would you like on a side? Max ${MAXCANVASLENGTH}`, 16);
        if (input === null)
            return;
        else if (input > MAXCANVASLENGTH) {
            alert("Error: Max length of canvas is 128")
        }
        else {
            createGrid(input);
        }
    });
}

function primaryColorBtn() {

    const primaryColor = document.querySelector("#primaryColor");

    primaryColor.addEventListener("input", function() {
        draw(primaryColor.value);
    });

    
}

function draw(color) {
    //hover effect, changes div color when mouse hovered over
    const canvasPixels = document.querySelectorAll("div.EAS-container > *");
    console.log(canvasPixels);
    canvasPixels.forEach(e => e.addEventListener('mouseover', function() {e.style.backgroundColor = color}));    
}