import React from "react";
import "./index.css";
import Logo from "../Logo/BrandIcon.png";
import Arrow from "../Logo/Arrow.png";
import Cart from "../Logo/EmptyCart.png";

class HeaderElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      chosen: false,
    };
  }
  render() {
    return (
        <button className="navigation-element-button">{this.state.name}</button>
    );
  }
}
const names = ["Women", "Men", "Kids"];
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-navigation">
          {names.map((name, index) => {
            return <HeaderElement name={name} />;
          })}
          
        </div>

        <div className="brand-icon">
          <img src={Logo} alt="Brand Icon" />
        </div>
        <div className="header-action-bar">
            <button className="currency-button" > $      <img src={Arrow}/> </button>
            <button className="cart-button"> <img src={Cart}/></button>
          </div>
      </div>
    );
  }
}

export default Header;
