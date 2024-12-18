function CartItem({ cart }) {
  return (
    <div className="d-flex p-2 gap-2 border rounded-4">
      <img
        src={cart.imageUrl}
        alt="Warung-poster"
        style={{
          width: "80px",
          height: "100px",
          objectFit: "cover",
        }}
        className="rounded-4"
      />
      <div>
        <h5 className="card-foodName">{cart.foodName}</h5>
        <p className="card-text">
          {cart.price} -{" "}
          <span className="badge text-bg-warning">{cart.genre}</span>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
