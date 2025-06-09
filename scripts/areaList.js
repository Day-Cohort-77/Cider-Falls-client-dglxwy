import { getAreas } from "./database.js";
import { getGuests } from "./database.js";

export const areasList = () => {
  const areas = getAreas();
  let areasHTML = "<ul id = 'areaList'>";

  for (const area of areas) {
   areasHTML +=
    `<li 
            data-id = "${area.id}"
            data-type = "area"
            data-location = "${area.location}"
           class="area" >
                ${area.name}
        </li>`;
  }

  areasHTML += "</ul>";

  return areasHTML;
};

document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "area") {
    const guests= getGuests()
    const guestarray = []
    for (const guest of guests) {
      if (guest.areaId === parseInt(event.target.dataset.id)) {
        guestarray.push(guest)
      }
    }
    window.alert(` There are ${guestarray.length} guests in this park`)
  }
}
)

  
