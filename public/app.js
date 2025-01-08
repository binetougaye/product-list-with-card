// get elements
const container = document.querySelector(".products")
// 
async function getProducts() {
    try {
        const response = await fetch("./data.json")
        const getItems = await response.json()
        console.log(getItems);
        container.innerHTML = getItems?.map((item, index) => `
          <div class="product">
            <div class="image-container">
                <img class="rounded" src="${item.image.desktop}" alt="${item.name}" />
                <button class="cart-button">
                    <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart" />
                    Add to Cart
                </button>
        </div>
        <p class="category">${item.category}</p>
        <p class="name">${item.name}</p>
        <p class="price">$${item.price}</p>
</div>


       `).join("")
    } catch (error) {
        console.log(error);

    }

}
getProducts()