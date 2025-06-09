import { guestList } from "./guestList.js";
import { areasList } from "./areaList.js";
import { servicesList } from "./servicesList.js";

const mainAreaGrid = document.querySelector("#area");
const mainGuests = document.querySelector("#guest");
const mainServices = document.querySelector("#services");
const areaHTML = `
<h2>Areas</h2>
<article class="details">
    <section class="areaList">
        ${areasList()}
    </section>`
const guestHtml = `
    <section class="guestList">
        <h3>Guests</h2>
        ${guestList()}
    </section>`;
const serviceHTML = `
<h4>Services</h4>
<article class="details">
    <section class="servicesList">
        ${servicesList()}
    </section>
</article>`


mainAreaGrid.innerHTML = areaHTML;
mainGuests.innerHTML = guestHtml;
mainServices.innerHTML = serviceHTML;


