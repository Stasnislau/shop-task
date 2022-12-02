import React from "react";
import "./index.css";
import CircleIcon from "./../Logo/CircleIcon.png";
class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      price: this.props.price,
      image: this.props.image,
      currency: this.props.currency,
      outOfStock: this.props.outOfStock,
      chosen: false,
    };
  }
  render() {
    return (
      <button
        className={
          this.state.outOfStock
            ? "out-of-stock item-card boundless-button"
            : "item-card boundless-button"
        }
        onMouseEnter={() => {
          this.setState({ chosen: true });
        }}
        onMouseLeave={() => {
          this.setState({ chosen: false });
        }}
        onClick={() => {
          this.setState({ outOfStock: !this.state.outOfStock }); // This is just for the demo
          return null; // TODO: Add functionality
        }}
      >
        <div className="item-card-image">
          <img
            className="item-card-image"
            src={this.state.image}
            alt="Item Image"
          />
          {this.state.outOfStock ? (
            <span className="out-of-stock-text">Out of stock</span>
          ) : null}
          {this.state.chosen && !this.state.outOfStock ? (
            <button className="boundless-button">
              <img
                className="item-card-icon"
                src={CircleIcon}
                alt="Circle Icon"
              />
            </button>
          ) : null}
        </div>
        <div className="item-card-name">{this.state.name}</div>
        <div className="item-card-price">
          <b>
            {this.state.currency}
            {this.state.price}
          </b>
        </div>
      </button>
    );
  }
}
export default ItemCard;
