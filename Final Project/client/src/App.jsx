import { useState, useEffect } from "react";
import "./App.css";
import CartItem from "./components/CartItem";
import CardItem from "./components/CardItem";

function App() {
  const [dataWarung, setDataWarung] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk mendapatkan data warung
  async function getData() {
    const url = "http://localhost:3000/Warung";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setDataWarung(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Mengambil data saat komponen pertama kali dimuat
  useEffect(() => {
    getData();
  }, []);

  // Fungsi untuk menambahkan item ke dalam cart
  function addToCart(Warung) {
    // Periksa jika item sudah ada dalam cart
    const existingItem = cart.find((item) => item.id === Warung.id);
  
    if (existingItem) {
      // Jika item sudah ada, tambahkan jumlahnya
      setCart(cart.map((item) =>
        item.id === Warung.id
          ? { ...item, quantity: item.quantity + 1 } // Menambahkan 1 ke jumlah
          : item
      ));
    } else {
      // Jika item belum ada, tambahkan ke cart dengan jumlah 1
      setCart([...cart, { ...Warung, quantity: 1 }]);
    }
  
    setSelectedItem(Warung);
    setShowModal(true);
  }
  function handleOrderNow() {
    alert("Pesanan Anda berhasil dipesan!");
    setCart([]); // Mengosongkan cart setelah pesanan
  }
  

  // Fungsi untuk menghapus item dari cart
  function removeFromCart(itemToRemove) {
  setCart((prevCart) => {
    return prevCart
      .map((item) =>
        item.id === itemToRemove.id
          ? { ...item, quantity: item.quantity - 1 } // Kurangi jumlah
          : item
      )
      .filter((item) => item.quantity > 0); // Hapus item jika jumlahnya 0
  });
}


  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-primary bg-gradient sticky-top">
        <div className="container d-flex">
          <a className="navbar-brand" href="#" style={{ color: "#FFFFFF" }}>
            <img
              src="/vite.svg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            HALAMAN BELANJA
          </a>
          <button
            className="btn btn-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Cart - {cart.length}
          </button>
        </div>
      </nav>

      {/* Tampilan Produk */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {dataWarung.map((Warung, index) => (
            <CardItem
              Warung={Warung}
              key={index}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Drawer Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
  {cart.map((el, i) => (
    <CartItem cart={el} key={i} removeFromCart={removeFromCart} />
  ))}


  {/* Tombol Pesan Sekarang */}
  {cart.length > 0 && (
    <button
      className="btn btn-success mt-3"
      onClick={() => handleOrderNow()}
    >
      Pesan Sekarang
    </button>
  )}
  
</div>
      </div>

      {/* Modal Konfirmasi */}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        tabIndex="-1"
        style={{
          display: showModal ? "block" : "none",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Konfirmasi</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Item <strong>{selectedItem?.foodName || "Item"}</strong> berhasil
                ditambahkan ke cart.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
