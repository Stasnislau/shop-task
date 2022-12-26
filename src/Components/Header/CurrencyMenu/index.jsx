import React from "react";
import "./index.css";
class CurrencyMenu extends React.Component {
  handleClick = (name) => {
    const tempState = [];
    this.props.currencies.forEach((element) => {
      if (element.name === name) {
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
    this.props.setCurrencies(tempState);
  };
  render() {
    return (
      <div className="currency-menu">
        {this.props.currencies.map((currency) => {
          return (
            <CurrencyButton
              name={currency.name}
              chosen={currency.chosen}
              handleClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

class CurrencyButton extends React.Component {
  render() {
    return (
      <button
        className={
          this.props.chosen ? "currency-menu-line-chosen" : "currency-menu-line"
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
export default CurrencyMenu;
