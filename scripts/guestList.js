import { getGuests } from "./database.js";

export const guestList = () => {
    const guests = getGuests()
    let guestsHtml = "<ul id='guestList'>"

    for (const guest of guests) {
         guestsHtml +=
        `<li 
            data-id = "${guest.id}"
            data-type = "guest"
            data-areaId = "${guest.areaId}"
            class = "guest"
            >
                ${guest.name}
        </li>` 
    }

    guestsHtml += "</ul>"

    return guestsHtml
}