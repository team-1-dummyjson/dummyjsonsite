/*----------| Read page URL and create const of category |----------*/
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log("TEST", category);

/*----------| DYMANIC PAGE HEADING |----------*/
/*| Create constant page heading |*/
const pageHeading = document.querySelector(".page_heading");
pageHeading.insertAdjacentHTML("beforeend", ` <a href="productlist.html?category=${category}">${category}</a>`);

/*----------| PRODUCT-"ARTICLE" ARRAY AND DISPLAY |----------*/
/*| Create constant to input json data into |*/
const productEl = document.querySelector(".list_grid");
/*| Fetch json data |*/
fetch(`https://dummyjson.com/products/category/${category}?limit=0`)
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
          <a class="button" href="product.html?id=${product.id}">Se Detaljer</a>
          </div>
        `,
      );
    });
  });
