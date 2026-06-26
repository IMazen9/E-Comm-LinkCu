const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar && nav) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close && nav) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const products = [
  { brand: "Zara", name: "fit spread collar short-sleeved shirt", price: 64, image: "./assets/images/products/f1.jpg", rating: 3.5 },
  { brand: "Ravin", name: "Hawaiian shirt with a white and green floral", price: 55, image: "./assets/images/products/f2.jpg", rating: 5 },
  { brand: "Ravin", name: "SMLYSNEW men's short-sleeve floral shirt", price: 63, image: "./assets/images/products/f3.jpg", rating: 4.5 },
  { brand: "American Eagle", name: "men's white short-sleeve floral print", price: 82, image: "./assets/images/products/f4.jpg", rating: 4.5 },
  { brand: "American Eagle", name: "Aloha shirt with a pink and white floral", price: 78, image: "./assets/images/products/f5.jpg", rating: 5 },
  { brand: "American Eagle", name: "color-block corduroy shirt", price: 91, image: "./assets/images/products/f6.jpg", rating: 3.5 },
  { brand: "LC-waikiki", name: "wide-leg cropped pants with floral embroidery", price: 52, image: "./assets/images/products/f7.jpg", rating: 4.5 },
  { brand: "LC-waikiki", name: "Gracila women's long-sleeve blouse", price: 48, image: "./assets/images/products/f8.jpg", rating: 5 },
  { brand: "H&M", name: "fit spread collar short-sleeved shirt", price: 64, image: "./assets/images/products/n1.jpg", rating: 3.5 },
  { brand: "H&M", name: "Muji men's linen shirt", price: 55, image: "./assets/images/products/n2.jpg", rating: 5 },
  { brand: "Zara", name: "white long-sleeve band collar shirt", price: 63, image: "./assets/images/products/n3.jpg", rating: 4.5 },
  { brand: "Pull&Bear", name: "G-Star RAW Bristum", price: 82, image: "./assets/images/products/n4.jpg", rating: 4.5 },
  { brand: "Pull&Bear", name: "long-sleeved light blue denim shirt", price: 78, image: "./assets/images/products/n5.jpg", rating: 5 },
  { brand: "Pull&Bear", name: "Flat-Front Bermuda Shorts", price: 91, image: "./assets/images/products/n6.jpg", rating: 3.5 },
  { brand: "American Eagle", name: "America Today Howard Shirt", price: 52, image: "./assets/images/products/n7.jpg", rating: 4.5 },
  { brand: "American Eagle", name: "dark grey short-sleeve shirt with a band collar", price: 48, image: "./assets/images/products/n8.jpg", rating: 5 }
];

function buildStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  let starsMarkup = "";

  for (let i = 0; i < fullStars; i += 1) {
    starsMarkup += '<i class="fa-solid fa-star"></i>';
  }

  if (hasHalf) {
    starsMarkup += '<i class="fa-solid fa-star-half"></i>';
  }

  return starsMarkup;
}

function productCardTemplate(product) {
  return `
    <div class="pro">
      <img src="${product.image}" alt="product photo">
      <div class="des">
        <span>${product.brand}</span>
        <h5>${product.name}</h5>
        <div class="star">${buildStars(product.rating)}</div>
        <h4>${product.price}$</h4>
      </div>
      <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
    </div>
  `;
}

function renderProducts(list) {
  const productsContainer = document.getElementById("shop-products");
  const emptyState = document.getElementById("search-empty-state");

  if (!productsContainer) {
    return;
  }

  productsContainer.innerHTML = list.map(productCardTemplate).join("");

  if (emptyState) {
    emptyState.style.display = list.length === 0 ? "block" : "none";
  }
}

function filterProducts(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery)
    );
  });
}

const searchInput = document.getElementById("product-search");

if (searchInput) {
  renderProducts(products);

  searchInput.addEventListener("input", () => {
    const filteredProducts = filterProducts(searchInput.value);
    renderProducts(filteredProducts);
  });
}

