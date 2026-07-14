function foodite(params) {
  return `<div class="bg-white rounded-lg overflow-hidden">
              <div class="relative">
                <img data-food_id=" ${params.id}"
                  class="w-full cursor-pointer h-[150px] foodCart"
                  src="public/images/foods/${params.image_url}"
                  alt="food"
                />
                <img
                  class="absolute top-2 right-2 cursor-pointer"
                  src="public/images/love-active.svg"
                  alt="icon"
                />
              </div>
              <div class="flex justify-between items-center px-2 pt-2">
                <div>
                  <h4 class="text-body text-3">${params.name}</h4>
                  <strong class="text-xl">$ ${params.price}</strong>
                </div>
                <div class="bg-primary p-1.5 rounded-md ">
                  <img data-id="${params.id}" 
                    class="w-3 add-to-cart cursor-pointer"
                    src="public/images/plus.svg"
                    alt="plus icon"
                  />
                </div>
              </div>
              <div class="flex justify-between px-2 pb-2">
                <div class="flex items-center">
                  <img
                    class="w-3"
                    src="public/images/star.svg"
                    alt="star img"
                  />
                  <span class="text-body pl-1.5 text-[12px]">${params.rating}</span>
                </div>
                <div class="flex items-center">
                  <img
                    class="w-3"
                    src="public/images/clock.svg"
                    alt="clock img"
                  />
                  <span class="text-body pl-1.5 text-[12px]">${params.delivery_time}</span>
                </div>
              </div>
            </div>`;
}

export default foodite;
