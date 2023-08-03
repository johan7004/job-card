import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // components name should start with Upper case

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Pizza(props) {

  if(props.pizzaDetails.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaDetails.photoName} alt="pizza-menu" />
      <div>
        <p>{props.pizzaDetails.name}</p>
        <span>{props.pizzaDetails.ingredients}</span>
        <span>{props.pizzaDetails.price}</span>
      </div>
    </li>
  );
  // components need to return something
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h3>Our Menu</h3>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => {
            return <Pizza key={index} pizzaDetails={pizza} />;
          })}
        </ul>
      ) : (
        <p>We're still working on our menu, please come back later :)</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  // if(hour >= openHour && hour <=closeHour) alert("we are open");
  // else alert (`sorry we are closed`);
  // we must use classNames not class as it is a reserved in JS
  return (
    <footer className="footer">
      {/*new Date().toLocaleTimeString()} We are currently open*/}

      {isOpen ? (
        <Order closing={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({closing}) {
  return (
    <div className="order">
      <p>we are open until {closing}:00. Come visit us or order</p>
      <button className="btn">Order</button>
    </div>
  );
}
// React v18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode renders Twice to indentify bugs, usually used in Dev mode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18

//React.render(<App/>)
