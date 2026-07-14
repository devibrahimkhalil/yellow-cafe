export function cartSection(item) {
  return ` <div class="p-[15px]">
            
            <div class=" overflow-y-scroll h-[calc(100vh-210px)] scrollbar-none">
                
${item.items
  .map((items) => {
    return `<div class="mb-[8px] flex border-[#ddd] border-[1px] rounded-[6px] bg-[url(../public/images/foods/${items.image_url})] bg-no-repeat bg-cover relative z-1 overflow-hidden">

                    <div class="bg-primary/45 absolute top-0 left-0 w-full h-full -z-1"></div>
                    
                    <div class="w-full px-1.5 py-1">
                        <span class="text-white">${items.name}</span>
                        <div class="flex items-center">
                            <p class="font-[700] text-[16px]">$ ${items.price}</p>
                            <div class="flex ml-auto gap-x-1 bg-primary py-1 px-1.5 text-white rounded-[8px]">
                                <span class="text-[16px] bg-black w-[20px] h-[20px] rounded-full flex justify-center items-center">-</span>
                                <span class="font-[600]">${items.quantity}</span>
                                <span class="text-[16px] bg-black w-[20px] h-[20px] rounded-full flex justify-center items-center">+</span>
                            </div>
                        </div>
                    </div>
                </div>
`;
  })
  .join(" ")}

                <div class="border-primary border-1 rounded-[6px] p-3 w-[calc(100%-40px)] absolute left-[20px] bottom-[20px]">
                  <h3 class="text-center mb-1">Total Price: <span class="text-primary">$${item.totalPrice}</span></h3>
                  <button class="block w-full py-2 rounded-[6px] cursor-pointer bg-primary text-white">Place Order Now</button>
                </div>

                
            </div>
         </div>`;
}
