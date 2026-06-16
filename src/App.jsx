import { useState, useEffect } from "react";
import "./App.css";
import laptop from "./assets/laptop.png";
import mobile from "./assets/mobile.png";
import headphones from "./assets/headphones.png";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
function App() {

  const [search, setSearch] = useState("");
const [cartCount, setCartCount] = useState(0);
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setLoading(false); // ✅ MUST be here
    })
    .catch((err) => {
      console.log(err);
      setLoading(false); // ✅ ALSO here
    });
}, []);
const filteredProducts = products.filter(product =>
  product.title.toLowerCase().includes(search.toLowerCase())
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
      

      {loading ? (
  <h3>Loading...</h3>
) : (
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
)}
        
    </>
  );
}

export default App;