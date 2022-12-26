import React from "react";
import "./index.css";
import Logo from "../Logo/BrandIcon.png";
import Arrow1 from "../Logo/Arrow1.png";
import Arrow2 from "../Logo/Arrow2.png";
import Cart from "../Logo/EmptyCart.png";
import CurrencyMenu from "./CurrencyMenu/";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isCartOpen: false,
    };
    console.log(this.props.categories);
  }
  handleClick = (name) => {
    const tempState = [];
    this.props.categories.forEach((element) => {
      if (element.name === name) {
        if (element.chosen) {
          tempState.push({
            name: element.name,
            chosen: false,
          });
        } else
          tempState.push({
            name: element.name,
            chosen: true,
          });
      } else {
        tempState.push({
          name: element.name,
          chosen: false,
        });
      }
    });
    this.props.setCategories(tempState);
  };
  render() {
    return (
      <div className="header">
        <div className="header-navigation">
          {this.props.categories.map((category) => {
            return (
              <HeaderElement
                name={category.name}
                handleClick={this.handleClick}
                chosen={category.chosen}
              />
            );
          })}
        </div>

        <div className="brand-icon">
          <img src={Logo} alt="Brand Icon" />
        </div>
        <div className="header-action-bar">
          <button
            className="currency-button"
            onClick={() => {
              this.setState({ isOpen: !this.state.isOpen, isCartOpen: false });
            }}
          >
            {this.state.isOpen ? <CurrencyMenu currencies={this.props.currencies} setCurrencies={this.props.setCurrencies} /> : null}
            {this.props.currencies.find(
              (currency) => currency.chosen === true
            ).name[0]} {this.state.isOpen ? <img src={Arrow2}  alt="arrow" />  : <img src={Arrow1}  alt="arrow" />}
          </button>
          <button className="cart-button">
            {" "}
            <img src={Cart} alt="cart" />
          </button>
        </div>
      </div>
    );
  }
}
class HeaderElement extends React.Component {
  render() {
    return (
      <button
        className={
          this.props.chosen
            ? "navigation-element-button chosen-navigation-button"
            : "navigation-element-button not-selected-navigation-button"
        }
        onClick={() => {
          this.props.handleClick(this.props.name);
        }}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Header;
