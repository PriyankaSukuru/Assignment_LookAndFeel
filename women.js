document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const wishlistButtons = document.querySelectorAll('.add-to-wishlist');

    const addToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Item added to cart!');
    };

    const addToWishlist = (item) => {
        let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
        wishlistItems.push(item);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        alert('Item added to wishlist!');
    };

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const item = {
                name: product.querySelector('h3').textContent,
                price: parseFloat(product.querySelector('p').textContent.replace('$', '')),
                image: product.querySelector('img').src
            };
            addToCart(item);
        });
    });

    wishlistButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const item = {
                name: product.querySelector('h3').textContent,
                price: parseFloat(product.querySelector('p').textContent.replace('$', '')),
                image: product.querySelector('img').src
            };
            addToWishlist(item);
        });
    });
});
