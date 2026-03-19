/*----------| Read page URL and create const of category |----------*/
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("TEST", id);

/*----------| PRODUCT "ARTICLE" |----------*/
/*| Create constant to input json data into |*/
const product = document.querySelector("#product_card");
/*| Fetch json data |*/
fetch(`https://dummyjson.com/products/${id}`)
  /*| Convert json to js |*/
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*| Create card from fetched json data |*/
    product.innerHTML = `
    <div class="img_wrapper">
    <img src="${data.thumbnail}">
    </div>
    <div class=product_info>
    <h1>${data.title}</h1>
    <p class="brand">${data.brand}</p>
    <p class="price">DKK ${data.price},-</p>
    <p class="description">${data.description}</p>
    <div class="add2cart_wrapper">
    <a class="button add2cart">Læg i Kurv</a>
    </div>
    </div>
    `;
    /*----------| DYMANIC PAGE HEADING |----------*/
    /*| Create constant page heading |*/
    const pageHeading = document.querySelector(".page_heading");
    pageHeading.insertAdjacentHTML("beforeend", ` <a href="productlist.html?category=${data.category}">${data.category}</a> > <a href="product.html?id=${data.id}">${data.title}</a>`);

    /*----------| SIMILAR PRODUCTS ARRAY |----------*/
    /*| Create constant to input json data into |*/
    const similarProduct = document.querySelector("#recommendation_feed");
    /*| Fetch json data |*/
    fetch(`https://dummyjson.com/products/category/${data.category}?limit=0`)
      /*| Convert json to js |*/
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        /*| Create array of products |*/
        data.products.forEach((product) => {
          similarProduct.insertAdjacentHTML(
            "beforeend",
            `
            <a href="product.html?id=${product.id}">
              <div class="product">
                <div class="img_wrapper">
                  <img src="${product.thumbnail}">
                </div>
                <p class="title">${product.title}</p>
              </div>
            </a>
        `,
          );
        });
      });
  });
