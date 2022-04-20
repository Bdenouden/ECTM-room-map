const data = [
    {
        "id": "480",
        "floor": "LB01",
        "members": [
            {
                "name": "Bram den Ouden",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1345",
            },
            {
                "name": "Michael Chengshang",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1293",
            },
            {
                "name": "Samantha Rice",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1356",
            },
            {
                "name": "Weiping Jiao",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1362",
            },
        ],
    },
    {
        "id": "450",
        "floor": "LB01",
        "members": [
            {
                "name": "Tom Salden",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1347",
            },
            {
                "name": "Hanxing Meng",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1281",
            },
            {
                "name": "Rami Younis",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1283",
            },
            {
                "name": "Esad Beydilli",
                "url": "http://ectm.tudelft.nl/Education/bio.php?id=1280",
            },
        ],
    },
    {
        "id": "420",
        "floor": "LB01",
        "members": [{ "name": "Dummy room" }],
    },
    {
        "id": "430",
        "floor": "LB01",
        "members": [{ "name": "Dummy room" }],
    },
    {
        "id": "440",
        "floor": "LB01",
        "members": [{ "name": "Dummy room" }],
    },
    {
        "id": "460",
        "floor": "LB01",
        "members": [{ "name": "Social room" }],
    },
    {
        "id": "140",
        "floor": "EKL01",
        "members": [{ "name": "Flex room" }]
    },
    {
        "id": "150",
        "floor": "EKL01",
        "members": [{ "name": "Flex room" }]
    },
]

document.addEventListener('DOMContentLoaded', function () {
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
}, false);
