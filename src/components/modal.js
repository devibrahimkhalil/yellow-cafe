export function modalSection(params) {
  return `<div class="bg-black/35 w-full h-screen fixed top-0 left-0">
        <div class="w-[800px] rounded-[15px] bg-white flex mx-auto mt-[80px] overflow-hidden">
            <img class="w-[40%] object-cover h-[260px] " src="public/images/foods/${params.image_url}" alt="food">
            <div class="w-[60%] p-[30px]">
                <h3 class="text-2xl font-[600] text-primary">${params.name}</h3>
                <div class="flex">
                    <div class="flex items-center mr-3">
                        <img class="w-3" src="public/images/star.svg" alt="star img">
                        <span class="text-body pl-1.5 text-[12px]">${params.rating}</span>
                    </div>
                    <div class="flex items-center">
                        <img class="w-3" src="public/images/clock.svg" alt="clock img">
                        <span class="text-body pl-1.5 text-[12px]">${params.delivery_time}</span>
                    </div>
                </div>
                <p>Category: <span class="text-primary">${params.category}</span></p>
                <p class="text-body py-3">${params.description}</p>

                <div class="flex gap-x-2">
                    <button class="bg-primary px-4 py-2 rounded-[6px] text-white cursor-pointer" type="button">Add to cart - <span class="font-[600]">$${params.price}</span></button>
                    <button class="bg-black px-4 py-2 rounded-[6px] text-white cursor-pointer remove" type="button">Cancel</button>
                </div>
            </div>
        </div>
    </div>`;
}
