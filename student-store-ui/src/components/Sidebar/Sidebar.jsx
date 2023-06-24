import * as React from "react"
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <section className={!props.isOpen ? "sidebar closed" : "sidebar open"}>
        <div className="wrapper">
          <button className="toggle-button" onClick={props.handleOnToggle}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="shopping-cart">
            <div className="cart-icons">
                <span className="cart-icon button">
                    <i className="material-icons md-48">add_shopping_cart</i>
                </span>
                <span className="cart-icon button">
                    <i className="material-icons md-48">monetization_on</i>
                </span>
                <span className="cart-icon button">
                    <i className="material-icons md-48">fact_check</i>
                </span>
            </div>
          </div>
        </div>
    </section>
  )
}