const categoryButton = document.querySelector("#buttons");
fetch(`https://dummyjson.com/products/categories`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((category) => {
      categoryButton.insertAdjacentHTML(
        "beforeend",
        `
        <a href="productlist.html?category=${category.name}">${category.name}</a>
            `,
      );
    });
  });
