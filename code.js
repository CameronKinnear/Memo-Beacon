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
            UpdateBeacon();
            return;
        }

        // If too many elements in queue
        if (iconQueue.length >= 3) {
            const popped = iconQueue.shift();
            popped.classList.toggle("selected");
        }

        // Add button to queue
        iconQueue.push(buttons[i]);
        UpdateBeacon();
        console.log(iconQueue);
    })
}

// Updates the webpage to display the currently selected beacon icons
function UpdateBeacon() {
    let lenQueue = iconQueue.length;

    const selectedIcons = document.getElementsByClassName("beacon-icon");
    console.log(selectedIcons);
    let lenSelected = selectedIcons.length;

    // Remove all the icons from the website to be replaced
    for (let i = 0; i < lenSelected; i++) {
        selectedIcons[i].remove();
    }

    // Add all the icons from the queue back to the page
    for (let i = 0; i < lenQueue; i++) {
        let newBeaconIcon = document.createElement("img");
        newBeaconIcon.src = iconQueue[i].getAttribute('data-src');
        console.log(iconQueue[i].src);
        newBeaconIcon.className = "beacon-icon";
        document.querySelector(".beacon-display").appendChild(newBeaconIcon);
        
    }
}