//hardcode values to release later
const pixelCount = 16; //default width of canvas
const MAXCANVASLENGTH = 128; //maximum width of canvas

main();


function main() {
    createGrid(pixelCount);
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

    //hover effect, changes div color when mouse hovered over
    const canvasPixels = document.querySelectorAll("div.EAS-container > *");
    canvasPixels.forEach(e => e.addEventListener('mouseover', function() {e.classList.add("hoveredDiv")}));

}

function createMenu() {
    //clear canvas button
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

            //removes any hoveredDiv classes if already applied (for reset button), IF cancel is not pressed
            const canvasPixels = document.querySelectorAll("div.EAS-container > *");
            canvasPixels.forEach(e => e.classList.remove("hoveredDiv"));
        }
    });
}