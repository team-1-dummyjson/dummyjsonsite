/*----------| NEW PRODUCTS |----------*/
/*| Create constant to input json data into |*/
const NewProductEl = document.querySelector("#new_products");
/*| Fetch json data |*/
fetch(`https://dummyjson.com/products/category/beauty`)
  /*| Convert json to js |*/
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*| Create array of products |*/
    data.products.forEach((product) => {
      NewProductEl.insertAdjacentHTML(
        "beforeend",
        `
        <a href="product.html?id=${product.id}">    
        <div class="product">
              <img src="${product.thumbnail}">
              <p class="title">${product.title}</p>
            </div>
            `,
      );
    });
  });

/*----------| RECOMMENDED PRODUCTS |----------*/
/*| Create constant to input json data into |*/
const RecProductEl = document.querySelector("#for_you");
/*| Fetch json data |*/
fetch(`https://dummyjson.com/products/category/beauty`)
  /*| Convert json to js |*/
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*| Create array of products |*/
    data.products.forEach((product) => {
      RecProductEl.insertAdjacentHTML(
        "beforeend",
        `
        <a href="product.html?id=${product.id}">    
        <div class="product">
              <img src="${product.thumbnail}">
              <p class="title">${product.title}</p>
            </div>
            `,
      );
    });
  });

/*----------| POPULAR PRODUCTS |----------*/
/*| Create constant to input json data into |*/
const popProductEl = document.querySelector("#popular");
/*| Fetch json data |*/
fetch(`https://dummyjson.com/products/category/beauty`)
  /*| Convert json to js |*/
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*| Create array of products |*/
    data.products.forEach((product) => {
      popProductEl.insertAdjacentHTML(
        "beforeend",
        `
        <a href="product.html?id=${product.id}">    
        <div class="product">
              <img src="${product.thumbnail}">
              <p class="title">${product.title}</p>
            </div>
            `,
      );
    });
  });
