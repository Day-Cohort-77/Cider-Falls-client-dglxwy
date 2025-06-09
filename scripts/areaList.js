import { getAreas } from "./database.js";

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
