const products = [
    {
        name: "Laptop",
        price: "₹50,000",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Mobile",
        price: "₹15,000",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Headphones",
        price: "₹2,000",
        image: "https://via.placeholder.com/200"
    }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    productList.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button>Add to Cart</button>
        </div>
    `;
});