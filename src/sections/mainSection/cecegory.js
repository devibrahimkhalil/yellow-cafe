import { categorylist } from "../../../data/data";
import { foodCategory } from "../../components/foodCategory";

let categoryHeader = `<h2 class="text-4 font-[500] py-3">Explore Categories</h2> `;

let foodcate = categorylist.map(function (items) {
  return foodCategory(items);
});

let categoryItems = `<div class="grid grid-cols-5 gap-x-4"> ${foodcate.join(" ")}  </div>`;

let allCategory = categoryHeader + categoryItems;
export default allCategory;
