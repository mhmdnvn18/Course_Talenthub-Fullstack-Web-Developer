import "./App.css";
import { useState } from "react";

let data = {
  name: "radhea 3",
  age: 21,
  style: { backgroundColor: "pink" },
};

let loggedIn = false;

function App() {
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Milk",
    },
    {
      id: 2,
      title: "Eggs",
    },
    {
      id: 3,
      title: "Vegetables",
    },
  ]);

  const [input, setInput] = useState("");

  function handleInput(event) {
    let value = event.target.value;
    setInput(value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    setProducts([
      ...products,
      {
        id: Math.random(),
        title: input,
      },
    ]);

    setInput("");
  }

  function handleAdd() {
    setCount(count + 1);
  }

  function handleKurang() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div className="card" style={data.style}>
        <p>{data.name}</p>
        <p>{count}</p>
        <button onClick={handleKurang}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <ul>
          {products.map((el) => {
            return <li>{el.title}</li>;
          })}
        </ul>

        <form onSubmit={handleSubmitForm}>
          <input
            onChange={handleInput}
            value={input}
            type="text"
            placeholder="add groceries"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );

  //? conditional renderin cara 1
  // if (!loggedIn) {
  //   return (
  //     <>
  //       <div className="card">
  //         <h1>Login dulu</h1>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div className="card" style={data.style}>
  //         <p>{data.name}</p>
  //         <p>{data.age}</p>
  //       </div>
  //     </>
  //   );
  // }
  //? conditional rendering cara 2
  // return (
  //   <>
  //     {loggedIn ? (
  //       <div className="card" style={data.style}>
  //         <p>{data.name}</p>
  //         <p>{data.age}</p>
  //       </div>
  //     ) : (
  //       <div>
  //         <h1>Log In</h1>
  //       </div>
  //     )}
  //   </>
  // );
  //? conditional renderin 3
  // return (
  //   <>
  //     {loggedIn && (
  //       <div className="card" style={data.style}>
  //         <p>{data.name}</p>
  //         <p>{data.age}</p>
  //       </div>
  //     )}
  //   </>
  // );
}

export default App;
