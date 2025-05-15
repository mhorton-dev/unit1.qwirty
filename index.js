function createProductCard(){
    const card = document.createElement("li");
    card.classList.add("product");
    card.innerHTML = `
    <h2>Product Name</h2>
    <figure>
        <img
        src="https://picsum.photos/250/300"
        alt="placeholder product image"
        />
    </figure>
    <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
        corporis laboriosam nihil tempore esse, veniam sit vitae beatae
        natus debitis quae cumque sequi. Architecto dolore laudantium ad
        provident assumenda quae!
    </p>
    <footer>
        <dl class="price">
            <dt>Price:</dt>
            <dd>$27.99</dd>
        </dl>
        <button class="material-symbols-sharp">add_shopping_cart</button>
    </footer>
    `;
    return card;
}

const $products = document.querySelector(".products");
const $cards = Array(15).fill(0).map(_ => createProductCard());
$products.replaceChildren(...$cards);