/**
 * This script provides the data used in the ECTM room map.
 * Data is contained in a server side json file
 * 
 * Bram den Ouden - 20-04-2022
 */


fetch("rooms.json")
    .then(response => response.json())
    .then(data => docReady(data))


function docReady(data) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        console.log('loaded')
        ready(data)
    } else {
        console.log("waiting for DOM")
        document.addEventListener('DOMContentLoaded', function () {
            ready(data)
        }, false);
    }
}



function ready(data) {
    console.log('ready')
    console.log(data)
    // sort data by ascending room number
    data.sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : -1)) // Only required if no image like floorplan is used

    // get template for room
    const roomTemplate = document.querySelector("#room-template");

    // loop over each room in the dataset and append them to the floor
    data.forEach(room => {
        let clone = roomTemplate.content.cloneNode(true);
        clone.querySelector(".room").setAttribute('data-id', room.id);
        clone.querySelector(".room-title").innerText = `${room.floor}.${room.id}`;
        let memberContainer = clone.querySelector(".room-members");

        // loop over each roommember and add them to the room
        room.members.forEach(member => {
            let li = document.createElement('li');
            if (member.url !== undefined) {
                let a = document.createElement('a');
                a.setAttribute('href', member.url || "#");
                a.setAttribute('target', "_blank");
                a.text = member.name;
                li.appendChild(a);
            } else {
                li.innerText = member.name;
            }
            memberContainer.appendChild(li);
        });

        // actually add the room to the floor
        const floor = document.querySelector(`.row[data-id='${room.floor}']`);
        floor.appendChild(clone);

    })
}