import { fooditems } from "../../../data/data";
import foodite from "../../components/foodItems";
import { modalSection } from "../../components/modal";

// fooditems section starat

let foodHeading = `<h2 class="text-4 font-[500] py-3 mt-4">Foods & Drinks</h2>`;

let fooddetals = fooditems.map(function (items) {
  return foodite(items);
});

let foodparent = `<div class="grid grid-cols-4 gap-4 mb-[100px]">${fooddetals.join("")}</div>`;

let allFoodItems = foodHeading + foodparent;

// fooditems section end

// modal add start

let modalSections = document.getElementById("modal");
let getfoodItems = document.getElementById("foodItem");

getfoodItems.addEventListener("click", function (e) {
  let gettarget = e.target.classList.contains("foodCart");
  if (gettarget == true) {
    modalSections.innerHTML = modalSection;
  }
});
// modal add end
// remove modal start
modalSections.addEventListener("click", function (e) {
  let gettarget = e.target.classList.contains("remove");
  if (gettarget == true) {
    modalSections.innerHTML = " ";
  }
});

// remove modal end
export default allFoodItems;
