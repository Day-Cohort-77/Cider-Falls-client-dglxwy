import { guestList } from "./guestList.js";
import { areasList } from "./areaList.js";

const mainAreaGrid = document.querySelector("#area");
const mainGuests = document.querySelector("#guest");
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


mainAreaGrid.innerHTML = areaHTML;
mainGuests.innerHTML = guestHtml;

