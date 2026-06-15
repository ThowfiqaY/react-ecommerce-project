function ProductCard({ product, setCartCount, cartCount }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="150" />

      <h2>{product.name}</h2>

      <p>₹{product.price}</p>

      <button onClick={() => setCartCount(cartCount + 1)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;