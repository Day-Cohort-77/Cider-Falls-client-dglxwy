import { getAreas } from "./database";

export const areasList = () => {
  const areas = getAreas();
  let areasHTML = "<ul>";

  for (const area of area) {
    `<li 
            data-id = "${area.id}"
            data-type = "area"
            data-location = "${area.location}"
            >
                ${area.name}
        </li>`;
  }

  areasHTML += "</ul>";

  return areasHTML;
};
