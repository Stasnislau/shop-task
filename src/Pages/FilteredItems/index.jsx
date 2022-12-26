import "./index.css";
import React from "react";
import ItemCard from "../../Components/ItemCard";
import mockClothes from "../../Components/Logo/mockClothes.jpg";

const arrayOfCards = [
  {
    name: "Mock",
    price: "50.00",
    image: mockClothes,
  },
  {
    name: "Mock2",
    price: "200",
    image: mockClothes,
  },
  {
    name: "Mock3",
    price: "50.00",
    image: mockClothes,
  },
  {
    name: "Mock4",
    price: "200",
    image: mockClothes,
  },
  {
    name: "Mock5",
    price: "50.00",
    image: mockClothes,
  },
  {
    name: "Mock6",
    price: "200",
    image: mockClothes,
  },
];
class FilteredItems extends React.Component {
  render() {
    return (
      <div className="categories">
        <div className="categories-header">{this.props.name}</div>
        <div className="categories-grid">
          {arrayOfCards.map((card) => {
            return (
              <ItemCard
                name={card.name}
                price={card.price}
                image={card.image}
                currency={this.props.currency}
                outOfStock={false}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default FilteredItems;
