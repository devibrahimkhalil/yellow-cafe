function foodCategory(items) {
  return `<div class="food-category">
              <img src="public/images/${items.img}"alt="category" />
              <span>${items.title}</span>
            </div>`;
}
export { foodCategory };
