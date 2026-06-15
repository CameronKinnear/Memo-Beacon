let buttons = document.getElementsByClassName('grid-button');

console.log("JavaScript is successfully connected!");
console.log(buttons);

const iconQueue = [];

for (let i = 0; i < buttons.length; i++) {
    console.log("add event listener");
    buttons[i].addEventListener("click", () => {
        buttons[i].classList.toggle("selected");
        // Add to queue to keep track of oldest selected button

        // If element already in queue
        if (iconQueue.includes(buttons[i])) {
            console.log("spliced");
            const index = iconQueue.indexOf(buttons[i]);
            iconQueue.splice(index, 1);
            return;
        }

        // If too many elements in queue
        if (iconQueue.length >= 3) {
            const popped = iconQueue.shift();
            popped.classList.toggle("selected");
        }

        // Add button to queue
        iconQueue.push(buttons[i]);
        console.log(iconQueue);
    })
}