import React from "react";
import "./index.css";
import Logo from "../Logo/BrandIcon.png";
import Arrow from "../Logo/Arrow.png";
import Cart from "../Logo/EmptyCart.png";
import CurrencyMenu from "./CurrencyButton/index.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          name: "Women",
          chosen: false,
        },
        {
          name: "Men",
          chosen: false,
        },
        {
          name: "Kids",
          chosen: false,
        },
      ],
    };
  }
  makeChosen = (name) => {
    const tempState = [];
    this.state.elements.forEach((element) => {
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
    this.setState({
      elements: tempState,
    });
  };
  render() {
    return (
      <div className="header">
        <div className="header-navigation">
          {this.state.elements.map((element) => {
            return (
              <HeaderElement
                name={element.name}
                makeChosen={this.makeChosen}
                chosen={element.chosen}
              />
            );
          })}
        </div>

        <div className="brand-icon">
          <img src={Logo} alt="Brand Icon" />
        </div>
        <div className="header-action-bar">
          <button className="currency-button" onClick={() => {
            <CurrencyMenu />
          }}>
            {" "}
            $ <img src={Arrow} />
             
          </button>
          <button className="cart-button">
            {" "}
            <img src={Cart} />
          </button>
        </div>
      </div>
    );
  }
}
class HeaderElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={
          this.props.chosen
            ? "navigation-element-button chosen-navigation-button"
            : "navigation-element-button not-selected-navigation-button"
        }
        onClick={() => {
          console.log(this.props.chosen);
          console.log("clicked");
          this.props.makeChosen(this.props.name);
        }}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Header;
