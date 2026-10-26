const res = await fetch("https://dummyjson.com/products?limit=10");
const data = await res.json();
console.log(data.products);
console.log(data.products[0].title);
