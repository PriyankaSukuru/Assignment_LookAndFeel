document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartTableBody = document.querySelector('#cart-table tbody');
    const totalPriceElement = document.getElementById('total-price');

    const renderCartItems = () => {
        cartTableBody.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const itemTotalPrice = item.price * (item.quantity || 1);
            totalPrice += itemTotalPrice;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity || 1}</td>
                <td>$${itemTotalPrice.toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;
            cartTableBody.appendChild(row);
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    };

    const removeItemFromCart = (index) => {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems();
    };

    cartTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            removeItemFromCart(index);
        }
    });

    renderCartItems();
});
