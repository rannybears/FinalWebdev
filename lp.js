    // Initialize the cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartUI();

    // Function to add items to the cart
    function addToCart(itemName, itemPrice) {
        const existingItem = cart.find(item => item.name === itemName);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1 });
        }
        saveCart();
        updateCartUI();
        alert(`${itemName} has been added to your cart!`);
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Open the cart popup
    function openCartPopup() {
        const cartPopup = document.getElementById("cart-popup");
        cartPopup.style.display = "block";
        updateCartUI();
    }

    // Close the cart popup
    function closeCartPopup() {
        const cartPopup = document.getElementById("cart-popup");
        cartPopup.style.display = "none";
    }

    // Remove an item from the cart
    function removeFromCart(itemName) {
        cart = cart.filter(item => item.name !== itemName);
        saveCart();
        updateCartUI();
    }

    // Update the cart UI
    function updateCartUI() {
        const cartItemsContainer = document.getElementById("cart-items");
        const cartTotalContainer = document.getElementById("cart-total");

        // Clear the current cart display
        cartItemsContainer.innerHTML = "";

        // Calculate total and populate items
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;

            // Create cart item div
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            // Add item name, price, and quantity
            itemDiv.innerHTML = `
                <span>${item.name} - ₱${item.price.toFixed(2)} x ${item.quantity}</span>
                <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });

        // Update total
        cartTotalContainer.textContent = `Total: ₱${total.toFixed(2)}`;

        // Update cart button count
        const cartButton = document.querySelector(".cart-button");
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartButton.textContent = `Cart (${totalItems})`;
    }

    function checkout() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            // Redirect to the checkout page
            window.location.href = "checkout.html";
        }
    }
