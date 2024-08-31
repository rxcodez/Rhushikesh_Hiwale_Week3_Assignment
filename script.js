function clickimg(smallimg) {
    var fullimg = document.getElementById("imagebox");
    fullimg.src = smallimg.src;
}

const cartIcon = document.querySelector('.cart-content');
const cartBox = document.querySelector('.cart-box');
const addCart = document.querySelector('.add-to-cart');
const qtyLabel = document.querySelector('.quantity-label');
const productContent = document.querySelector('.product-content');
const cartEmpty = document.querySelector('.cart-is-empty');

cartIcon.addEventListener('click', () => {
    cartBox.classList.toggle('display');
});

addCart.addEventListener('click', () => {
    qtyLabel.style.display = "block";

    const productName = document.querySelector('.content h2').textContent;
    const productPrice = document.querySelector('.price').textContent;
    const productImage = document.querySelector('.main-image img').src;

    console.log("Product Name: ", productName);
    console.log("Product Price: ", productPrice);
    console.log("Product Image: ", productImage);

    let html = `
        <img src="${productImage}" alt="Product Image">
        <div class="p-details">
            <p class="p-text">${productName}</p>
            <p class="p-price">${productPrice}</p>
        </div>
    `;

    productContent.style.display = "flex";
    productContent.innerHTML = html;

    cartEmpty.style.display = 'none';
});