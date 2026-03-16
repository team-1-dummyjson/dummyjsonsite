/*| Create constant to input json data into |*/
/*===
const sortingEl = document.querySelector(".sorting_buttons");
/*| Fetch json data |*/
/*===
fetch(`https://dummyjson.com/products/category-list`)
  /*| Convert json to js |*/
/*===
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*| Create array of categories |*/
/*===
    data.forEach((category) => {
      sortingEl.insertAdjacentHTML(
        "beforeend",
        `
        <p>${category}</p>
        `,
      );
    });
  });


/*----------| PRODUCT-"ARTICLE" ARRAY AND DISPLAY |----------*/
/*| Create constant to input json data into |*/
const productEl = document.querySelector(".list_grid");
/*| Fetch json data |*/
fetch(`https://dummyjson.com/products?limit=0`)
  /*| Convert json to js |*/
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*| Create array of products |*/
    data.products.forEach((product) => {
      productEl.insertAdjacentHTML(
        "beforeend",
        `
            <div class="product">
             <div class="img_wrapper">
              <img src="${product.thumbnail}">
             </div>
             <div class="header">
              <p class="title">${product.title}</p>
              <p class="price">DKK ${product.price},-</p>
             </div>
             <a href="">Se Detaljer</a>
            </div>
            `,
      );
    });
  });
