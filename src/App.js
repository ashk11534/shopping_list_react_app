import { useState } from "react";
import "./Fontawesome";

export default function App() {
  return (
    <div className="App">
      <RootDiv />
    </div>
  );
}
function RootDiv() {
  return (
    <div className="parent-root">
      <ParentDiv />
    </div>
  );
}
function ParentDiv() {
  const [isShowAddForm, setShowAddForm] = useState(false);
  function handleShowAddForm() {
    setShowAddForm((cur) => !cur);
  }
  function handleHideAddForm() {
    setShowAddForm(false);
  }
  return (
    <div className="main">
      {isShowAddForm && <AddFoodForm onHandleHideAddForm={handleHideAddForm} />}
      <MainNav />
      <MainContent onHandleShowAddForm={handleShowAddForm} />
    </div>
  );
}
function MainNav() {
  return (
    <div className="main-nav">
      <div className="sort-by">
        <label htmlFor="cars">Sort by: </label>
        <select name="sort-food" id="sort-food">
          <option value="price">Price</option>
          <option value="food_name">Food name</option>
        </select>
      </div>
      <div className="buy-and-cart-btn">
        <button className="cart-btn">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cart-count">
            <p>0</p>
          </div>
        </button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>
  );
}

function MainContent({ onHandleShowAddForm }) {
  return (
    <div className="main-content">
      <div className="left-side">
        <ItemList icon_type="add" />
        <AddItemBtn onHandleShowAddForm={onHandleShowAddForm} />
      </div>
      <div className="right-side">
        {/* <EmptyCart /> */}
        <ItemList icon_type="delete" />
      </div>
    </div>
  );
}

function ItemList({ icon_type }) {
  return (
    <div className="item-list">
      <Item icon_type={icon_type} />
      <Item icon_type={icon_type} />
      <Item icon_type={icon_type} />
      <Item icon_type={icon_type} />
      <Item icon_type={icon_type} />
    </div>
  );
}

function AddItemBtn({ onHandleShowAddForm }) {
  return (
    <div className="add-item-btn">
      <button onClick={onHandleShowAddForm}>Add Food</button>
    </div>
  );
}
function Item({ icon_type }) {
  return (
    <div className="shopping-item">
      <div className="item-image">
        <img src="images/burger.jpg" alt="" />
      </div>
      <div className="details">
        <div className="name-price">
          <h4>Burger</h4>
          <p>Price: 300 tk.</p>
        </div>
        <div className="add-btn">
          {icon_type === "add" ? (
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          ) : (
            <div className="add-btn">
              <button>
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src="images/empty-cart.png" alt="" />
      <p>Empty Cart</p>
    </div>
  );
}

function AddFoodForm({ onHandleHideAddForm }) {
  return (
    <div className="add-food-form">
      <form action="">
        <input
          type="text"
          name="input_food_name"
          id="input_food_name"
          placeholder="Enter food name"
        />
        <input
          type="text"
          name="input_image_link"
          id="input_image_link"
          placeholder="Enter image link"
        />
        <input
          type="number"
          name="input_food_price"
          id="input_food_price"
          placeholder="Enter food price"
          min="0"
        />
        <div className="new-food-btn">
          <button className="new-food-add-btn">Add</button>
          <button className="new-food-cancel-btn" onClick={onHandleHideAddForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
