// Fake product list
const products = [
  {id: 1, name: "Notebook", price: 20},
  {id: 2, name: "Gift Box", price: 50},
  {id: 3, name: "Poster Print", price: 30},
  {id: 4, name: "Custom Mug", price: 40}
];

let cart = [];

// Render products
const productList = document.getElementById("product-list");
if(productList){
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3>
                     <p>${p.price} QAR</p>
                     <button onclick="addToCart(${p.id})">Add to Cart</button>`;
    productList.appendChild(div);
  });
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

function renderCart(){
  const cartItems = document.getElementById("cart-items");
  if(!cartItems) return;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `<p>${item.name} - ${item.price} QAR 
      <button onclick="removeFromCart(${index})">x</button></p>`;
  });
  document.getElementById("cart-total").innerText = total;
}

function removeFromCart(i){
  cart.splice(i,1);
  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

function toggleCart(){
  document.getElementById("cart").classList.toggle("open");
}

function checkout(){
  alert("✅ Payment simulated. Order placed successfully!");
  cart = [];
  document.getElementById("cart-count").innerText = 0;
  renderCart();
}
