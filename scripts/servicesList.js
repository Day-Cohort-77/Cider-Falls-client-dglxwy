import { getServices } from "./database.js";
import { getAreas } from "./database.js";

export const servicesList = () => {
  const services = getServices();
  let servicesHTML = "<ul>";

  for (const service of services) {
    servicesHTML += `<li 
            data-id = "${service.id}"
            data-type = "service"
            data-areaId = "${service.areaId}"
            data-service = "${service.type}"
            >
                ${service.type}
        </li>`;
  }

  servicesHTML += "</ul>";

  return servicesHTML;
};

document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "service") {
    const serviceType = event.target.dataset.service;
    let areas = getAreas();
    let areaService = [];
    for (const area of areas) {
      if (area.id === parseInt(event.target.dataset.areaId))
        
        areaService.push(area.name);
      if (areaService.length > 0;) {
        window.alert(`${serviceType} is available in: ${areaService.join(', ')}`);
        //window.alert(`${serviceType} is available in ${area.name}`)

      } else {
        window.alert(`${serviceType} is available in ${area.name}`);
      }
    break;
    }

  }
}
)

//FOR (LET I=O: I < AREA.ID; I++)
//Array.PUSH(AREA)