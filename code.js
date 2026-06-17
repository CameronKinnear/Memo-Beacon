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
        console.log();
        UpdateBeacon();
        console.log(iconQueue);
    })
}

// Updates the webpage to display the currently selected beacon icons
function UpdateBeacon() {
    let lenQueue = iconQueue.length;
    console.log("Length of queue" + lenQueue);

    const selectedIcons = document.getElementsByClassName("beacon-icon");
    let lenSelected = selectedIcons.length;
    console.log("Length of selected " + lenSelected);

    // Remove all the icons from the website to be replaced
    if (lenSelected != 0) {
        for (let i = 0; i < lenSelected; i++) {
            selectedIcons[i].remove();
            console.log('removed');
        }
    }
    
    // Add all the icons from the queue back to the page
    for (let i = 0; i < lenQueue; i++) {
        let newBeaconIcon = document.createElement("img");
        newBeaconIcon.src = iconQueue[i].querySelector('.grid-button img').src;
        newBeaconIcon.className = "beacon-icon";
        document.querySelector(".beacon-display").appendChild(newBeaconIcon);
    }

    console.log("New length of selected " + selectedIcons.length);
}