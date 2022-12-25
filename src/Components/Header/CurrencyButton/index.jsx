import React from "react";
import "./index.css";
class CurrencyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          name: "$ USD",
          chosen: true,
        },
        {
          name: "€ EUR",
          chosen: false,
        },
        {
          name: "¥ JPY",
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
      <div className="currency-menu">
        {this.state.elements.map((element) => {
          return (
            <CurrencyButton
              name={element.name}
              makeChosen={this.makeChosen}
              chosen={element.chosen}
            />
          );
        })}
      </div>
    );
  }
}
class CurrencyButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className={this.props.chosen ? "currency-menu-line-chosen" : "currency-menu-line-not-chosen"}
        onClick={() => {
          this.props.makeChosen(this.props.name);
        }}
      >
        {this.props.name}
      </button>
    );
  }
}
export default CurrencyMenu;
