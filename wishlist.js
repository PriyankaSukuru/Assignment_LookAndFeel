document.addEventListener('DOMContentLoaded', () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const wishlistTableBody = document.querySelector('#wishlist-table tbody');

    const renderWishlistItems = () => {
        wishlistTableBody.innerHTML = '';

        wishlistItems.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;
            wishlistTableBody.appendChild(row);
        });
    };

    const removeItemFromWishlist = (index) => {
        wishlistItems.splice(index, 1);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        renderWishlistItems();
    };

    wishlistTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            removeItemFromWishlist(index);
        }
    });

    renderWishlistItems();
});
