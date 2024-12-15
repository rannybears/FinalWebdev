// Populate cart details from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartDetails();

function updateCartDetails() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");

    // Clear existing items
    cartItemsContainer.innerHTML = "";

    // Calculate total and add items to DOM
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.textContent = `${item.name} - ₱${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemDiv);
    });

    cartTotalContainer.textContent = `Total: ₱${total.toFixed(2)}`;
}

// Handle form submission
const checkoutForm = document.getElementById("checkoutForm");
checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(checkoutForm);
    const customerDetails = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        paymentMethod: formData.get("payment") // Dropdown value
    };

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Simulate order placement
    alert(`Thank you, ${customerDetails.name}! Your order has been placed.`);

    // Clear cart and reset form
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDetails();
    checkoutForm.reset();

    // Redirect to thank you page
    window.location.href = "thankyou.html";
});
