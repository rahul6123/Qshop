let productsWrapper = document.getElementById("productsWrapper");

async function fetchProducts() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    displayProducts(data);
  } catch (error) {
    console.log(error);
    productsWrapper.innerHTML = `<h2>Something went wrong🤪</h2>`;
  }
}
fetchProducts();

function displayProducts(allproducts) {
  allproducts.map((product) => {
    //! creating elements dynamically
    let card = document.createElement("article");
    let productImage = document.createElement("img");
    let productTitle = document.createElement("h3");
    let productPrice = document.createElement("p");
    let btn = document.createElement("button");

    productTitle.textContent = product.title;
    productPrice.textContent = `Rs.${product.price}`;
    btn.textContent = "add to cart";

    //! setting attribute dynamically
    card.setAttribute("class", "productCard");
    productImage.setAttribute("src", product.image);

    card.append(productImage, productTitle, productPrice, btn);
    productsWrapper.append(card);
  });
}
