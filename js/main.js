document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    let allProducts = [];
    loader.style.display = "block";
    content.style.display = "none";
    // Fetch products from JSON
<<<<<<< HEAD
    setTimeout(() => {
        fetch('js/products.json')
            .then(response => response.json())
            .then(data => {
                loader.style.display = "none";
                content.style.display = "block";
                allProducts = data;
                displayProducts(allProducts);
            });
    }, 1000);
=======
        fetch('js/products.json')
            .then(response => response.json())
            .then(data => {

                allProducts = data;
                displayProducts(allProducts);
            });


>>>>>>> 4fae78c (fix: Improve search logic and handle empty input)
    function displayProducts(products) {
        productList.innerHTML = ''; // Clear previous list
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ราคา: ${product.price} บาท</p>`;
            productList.appendChild(card);
        });
    }

    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm === '') {
        displayProducts(allProducts);
        return;
    }
        const filteredProducts = allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    });
});