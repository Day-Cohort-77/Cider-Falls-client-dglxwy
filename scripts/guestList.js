import { getGuests } from "./database";

export const guestList = () => {
    const guests = getGuests()
    let guestsHTML = "<ul>"

    for (const guest of guests) {
        `<li 
            data-id = "${guest.id}"
            data-type = "guest"
            data-areaId = "${guest.areaId}"
            >
                ${guest.name}
        </li>` 
    }

    guestsHTML += "</ul>"

    return guestsHTML
}