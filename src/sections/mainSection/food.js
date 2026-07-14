import { fooditems } from "../../../data/data";
import { cartSection } from "../../components/cartSection";
import { emptyCartElement } from "../../components/emptyCart";
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

let modalSections = document.getElementById("modal");
let getfoodItems = document.getElementById("foodItem");
let cartArea = document.getElementById("cart-area");
cartArea.innerHTML = emptyCartElement;
let cartItems = [];

getfoodItems.addEventListener("click", function (e) {
  // modal add start
  let getattrbute = e.target.getAttribute("data-food_id");
  let findfoodid = fooditems.find(function (params) {
    return params.id == getattrbute;
  });

  let gettarget = e.target.classList.contains("foodCart");
  if (gettarget == true) {
    modalSections.innerHTML = modalSection(findfoodid);
  }
  // modal add end
  //  add to cart start
  let targetBtn = e.target.classList.contains("add-to-cart");

  if (targetBtn == true) {
    let itemId = e.target.getAttribute("data-id");

    let getDataFromDataBase = fooditems.find((item) => {
      return item.id == itemId;
    });
    let findExist = cartItems.find((item) => {
      return item.id == getDataFromDataBase.id;
    });

    if (findExist == undefined) {
      cartItems = [...cartItems, { ...getDataFromDataBase, quantity: 1 }];
      showCartItems(cartItems);
    }

    console.log(cartItems);
  }

  //  add to cart end
});

// remove modal start
modalSections.addEventListener("click", function (e) {
  let gettarget = e.target.classList.contains("remove");
  if (gettarget == true) {
    modalSections.innerHTML = " ";
  }
});
// remove modal end
// show cartItem into cart
function showCartItems(cartItems) {
  let totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  let cartItemObj = {
    items: cartItems,
    totalPrice: totalPrice,
  };
  if (cartItems.length == 0) {
    cartArea.innerHTML = emptyCartElement;
  } else {
    cartArea.innerHTML = cartSection(cartItemObj);
  }
}

export default allFoodItems;
