import { getServices } from "./database,js";

export const servicesList = () => {
  const services = getServices();
  let servicesHTML = "<ul>";

  for (const service of services) {
    `<li 
            data-id = "${service.id}"
            data-type = "service"
            data-areaId = "${service.areaId}"
            >
                ${service.name}
        </li>`;
  }

  servicesHTML += "</ul>";

  return servicesHTML;
};
