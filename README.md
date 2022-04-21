<p align="center">
    <a href="http://ectm.tudelft.nl/" target="_blank">
        <img src="tudelft_logo.svg" height="80px" >
    </a>
    <h1 align="center">ECTM room map</h1>
    <br>
</p>

Recently the master students of the ECTM group all received a personal office. This great event makes it a bit more difficult to find our colleagues, which is why this room map was made.

The result is hosted via github pages on [https://bdenouden.github.io/ECTM-room-map/](https://bdenouden.github.io/ECTM-room-map/).

## Structure
The room map retrieves its data from a [JSON file](/rooms.json) containing the individual rooms and their members. The minimally required fields for a room definition are `id`, `floor` and `members`.

The `id` is the building room number, `floor` the building floor number and `members` is a list of objects where each object is a unique member of that room.

When defining a member object the `url` property can be omitted. This will result in a non-clickable member. If the `url` property is provided a member can be clicked and the user will be redirected to the provided url on a new tab.

```JSON
{
    "id": "460",
    "floor": "LB01",
    "members": [
        {
            "name": "Social room",
            "url": "#"
        }
    ]
}

```

## Dependencies
The room map depends on the [minicss](https://minicss.org/) framework version 3.0.1 and is included using rawgit.

## Disclaimer
This project is not supported by the TU Delft. It is created by a MSc student in the TU Delft ECTM group. The room map is intended to be used within this research group to easily find collegues among different offices. 