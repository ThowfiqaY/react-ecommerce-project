import { useState } from "react";
import "./App.css";
import laptop from "./assets/laptop.png";
import mobile from "./assets/mobile.png";
import headphones from "./assets/headphones.png";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
function App() {

  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState("All");

  const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Laptop",
    image: laptop
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    category: "Mobile",
    image: mobile
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    category: "Headphones",
    image: headphones
  }
];

  const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(search.toLowerCase()) &&
  (category === "All" || product.category === category)
);

  return (
    <>
     <Navbar />
      <h2 className="cart">Cart: {cartCount}</h2>

      <input
  className="search"
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="filter-buttons">
  <button onClick={() => setCategory("All")}>All</button>
  <button onClick={() => setCategory("Laptop")}>Laptop</button>
  <button onClick={() => setCategory("Mobile")}>Mobile</button>
  <button onClick={() => setCategory("Headphones")}>Headphones</button>
</div>

      <div className="container">
  {filteredProducts.map(product => (
    <ProductCard
      key={product.id}
      product={product}
      cartCount={cartCount}
      setCartCount={setCartCount}
    />
  ))}
</div>
        
    </>
  );
}

export default App;