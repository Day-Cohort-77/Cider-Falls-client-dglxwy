import { getServices } from "./database.js";
import { getAreas } from "./database.js";

export const servicesList = () => {
  const services = getServices();
  let servicesHTML = "<section >"

  for (const service of services) {
    servicesHTML += `<div class="servicesx"
            data-id = "${service.id}"
            data-type = "service"
            data-areaId = "${service.areaId}"
            data-service = "${service.type}"
            >
                ${service.type}
        </div>`;
  }

  servicesHTML += "</section>";

  return servicesHTML;
};

document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "service") {
    const serviceType = event.target.dataset.service;
    const services = getServices();
    const areas = getAreas();
    let areaNames = [];

    // Find the clicked service
    const clickedService = services.find(service => service.type === serviceType);

    // Check if service.areaId is an array or single number
    if (Array.isArray(clickedService.areaId)) {
      // Handle multiple areas
      for (const area of areas) {
        if (clickedService.areaId.includes(area.id)) {
          areaNames.push(area.name);
        }
      }
    } else {
      // Handle single area
      const area = areas.find(area => area.id === clickedService.areaId);
      areaNames.push(area.name);
    }

    window.alert(`${serviceType} is available in ${areaNames.join(", ")}`);
  }
});
//FOR (LET I=O: I < AREA.ID; I++)
//Array.PUSH(AREA)