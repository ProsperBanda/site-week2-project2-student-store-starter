import * as React from "react";
import "./Sidebar.css";
import Cart from "../Cart/Cart";

export default function Sidebar(props) {
  const handleFormChange = (e) => {
    console.log("clicked");
    const inputName = e.target.name;
    const inputValue = e.target.value;
    props.handleOnCheckoutFormChange(inputName, inputValue);
  };

  return (
    <section className={!props.isOpen ? "sidebar closed" : "sidebar open"}>
      <div className="wrapper">
        <button className="toggle-button" onClick={props.handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>

        {props.isOpen && (
          <>
            <div className="shopping-cart">
              <div className="open">
                <h3>
                  Shopping Cart
                  <span className="button">
                    <i className="material-icons md-48">add_shopping_cart</i>
                  </span>
                </h3>
                <div className="notification">
                  <Cart
                    products={props.products}
                    cartItems={props.cartItems}
                    handleAddProduct={props.handleAddProduct}
                    handleRemoveProduct={props.handleRemoveProduct}
                  />
                </div>
                <div className="checkout-form">
                  <h3>
                    Payment Info
                    <span className="button">
                      <i className="material-icons md-48">monetization_on</i>
                    </span>
                  </h3>
                  <div className="input-field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        name="name"
                        value={props.name}
                        className="checkout-form-input"
                        type="text"
                        placeholder="Student Name"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="input-field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        value={props.email}
                        name="email"
                        className="checkout-form-input"
                        type="email"
                        placeholder="student@codepath.org"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label className="checkbox">
                        <input name="termsAndConditions" type="checkbox" />
                        <span className="label">
                          I agree to the
                          <a href="#terms-and-conditions">
                            {" "}
                            terms and conditions
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>
                  <p className="is-danger"></p>
                  <div className="field">
                    <div className="control">
                      <button
                        className="button checkout-button"
                        onClick={props.handleOnSubmitCheckoutForm}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
                <div className="checkout-success">
                  <h3>
                    Checkout Info
                    <span className="icon button">
                      <i className="material-icons md-48">fact_check</i>
                    </span>
                  </h3>
                  {/* {props.Receipt ? }
                  <div className="content">
                    <p>
                      A confirmation email will be sent to you so that you can
                      confirm this order. Once you have confirmed the order, it
                      will be delivered to your dorm room.
                    </p>
                  </div> */}
                  {props.Receipt ? (
                    <div className="content">
                      <p>{props.Receipt.receipt.lines[0]}</p>
                      <p>{props.Receipt.receipt.lines[1]}</p>
                      <p>{props.Receipt.receipt.lines[2]}</p>
                      <p>{props.Receipt.receipt.lines[3]}</p>
                    </div>
                  ) : (
                    <div className="content">
                      <p>
                        A confirmation email will be sent to you so that you can
                        confirm this order. Once you have confirmed the order,
                        it will be delivered to your dorm room.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
