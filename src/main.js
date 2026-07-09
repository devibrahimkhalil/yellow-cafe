import leftSidebarElements from "./sections/leftSidebar/leftSidebar";
import headerElement from "./sections/header/header";
import bannerElement from "./sections/mainSection/bener";
import allCategory from "./sections/mainSection/cecegory";
import allFoodItems from "./sections/mainSection/food";

let leftSidebar = document.getElementById("leftSidebar");
leftSidebar.innerHTML = leftSidebarElements;

let headerelement = document.getElementById("header");
headerelement.innerHTML = headerElement;

let bannerSection = document.getElementById("banner");
bannerSection.innerHTML = bannerElement;

let category = document.getElementById("category");
category.innerHTML = allCategory;

let getfoodItems = document.getElementById("foodItem");
getfoodItems.innerHTML = allFoodItems;
