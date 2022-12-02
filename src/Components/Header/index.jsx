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
      chosen: this.props.chosen,
      changeChosen: this.props.changeChosen,
    };
  }
  render() {
    return (
      <button
        className={
          this.state.chosen
            ? "navigation-element-button chosen-navigation-button"
            : "navigation-element-button"
        }
        onClick={() => {
          this.state.changeChosen(this.state.name);
        }}
      >
        {this.state.name}
      </button>
    );
  }
}
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
  changeChosen = (name) => {
    const newElements = [];
    this.state.elements.map((element, index) => {
      if (element.name === name) {
        if (element.chosen) {
          newElements.push({
            name: element.name,
            chosen: false,
          });
        } else {
          newElements.push({
            name: element.name,
            chosen: true,
          });
        }
      } else {
        newElements.push({
          name: element.name,
          chosen: false,
        });
      }
    });
    this.setState({ elements: newElements });
    console.log(this.state.elements);
  };
  render() {
    return (
      <div className="header">
        <div className="header-navigation">
          {this.state.elements.map((name, index) => {
            return (
              <HeaderElement
                name={this.state.elements[index].name}
                chosen={this.state.elements[index].chosen}
                changeChosen={this.changeChosen}
              />
            );
          })}
        </div>

        <div className="brand-icon">
          <img src={Logo} alt="Brand Icon" />
        </div>
        <div className="header-action-bar">
          <button className="currency-button">
            {" "}
            $ <img src={Arrow} />{" "}
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

export default Header;
