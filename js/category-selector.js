document.querySelectorAll('.navigation-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        document.querySelectorAll('.goods-list').forEach((product) => {
            if (product.classList.contains(category)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });
});