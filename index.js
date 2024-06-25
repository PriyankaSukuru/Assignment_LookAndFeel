document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
        index = (i + slides.children.length) % slides.children.length;
        slides.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    function currentSlide(i) {
        showSlide(i);
    }

    setInterval(nextSlide, 5000);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentSlide(i);
        });
    });

    const checkLoginStatus = () => {
        const username = localStorage.getItem('loggedInUser');
        return username !== null;
    };

    const showLoginPopup = () => {
        alert('Please log in or sign up to add items to the cart or wishlist.');
    };

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
            if (!checkLoginStatus()) {
                showLoginPopup();
                return;
            }
            const product = event.target.closest('.product');
            const item = {
                name: product.querySelector('h3').textContent,
                price: parseFloat(product.querySelector('p').textContent.replace('$', ''))
            };
            addToCart(item);
        });
    });

    wishlistButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (!checkLoginStatus()) {
                showLoginPopup();
                return;
            }
            const product = event.target.closest('.product');
            const item = {
                name: product.querySelector('h3').textContent,
                price: parseFloat(product.querySelector('p').textContent.replace('$', ''))
            };
            addToWishlist(item);
        });
    });
});
