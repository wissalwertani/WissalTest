// Simple cart interaction
document.querySelectorAll(".product-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("✅ Product added to cart!");
  });
});
