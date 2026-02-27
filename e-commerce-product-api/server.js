const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/products", (req, res) => {
  res.status(200).json(products);
});


app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    return res.status(404).json({ message: "not found" });
  }

  res.status(200).json(product);
});


app.get("/products/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName.toLowerCase();
  const result = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].category.toLowerCase() === categoryName) {
      result.push(products[i]);
    }
  }

  res.status(200).json(result);
});


app.post("/products", (req, res) => {
  const newProduct = {};

  if (products.length > 0) {
    newProduct.id = products[products.length - 1].id + 1;
  } else {
    newProduct.id = 1;
  }

  newProduct.name = req.body.name;
  newProduct.category = req.body.category;
  newProduct.price = req.body.price;
  newProduct.stock = req.body.stock;
  newProduct.rating = req.body.rating;

  products.push(newProduct);

  res.status(201).json(newProduct);
});


app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let index = -1;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return res.status(404).json({ message: "not found" });
  }

  const Product = {};
  Product.id = id;
  Product.name = req.body.name;
  Product.category = req.body.category;
  Product.price = req.body.price;
  Product.stock = req.body.stock;
  Product.rating = req.body.rating;

  products[index] = Product;

  res.status(200).json(products[index]);
});


app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);
  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    return res.status(404).json({ message: "not found" });
  }

  product.stock = req.body.stock;
  res.status(200).json(product);
});


app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);
  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    return res.status(404).json({ message: "not found" });
  }

  product.price = req.body.price;
  res.status(200).json(product);
});


app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});











