import React from "react";
import "./index.css";
class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      price: this.props.price,
      image: this.props.image,
      chosen: false,
    };
  }
  render() {
    return (
      <div className="item-card">
        <div className="item-card-image">
          <img className="item-card-image" src={this.state.image} alt="Item Image" />
        </div>
        <div className="item-card-name">{this.state.name}</div>
        <div className="item-card-price">{this.state.price}</div>
      </div>
    );
  }
}
export default ItemCard;
