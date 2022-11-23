import "./index.css";
import React from "react";
import ItemCard from "../../Components/ItemCard";
import mockClothes from "../../Components/Logo/mockClothes.jpg";

const arrayOfCards = [
  {
    name: "Mock",
    price: 100,
    image: mockClothes,
  },
  {
    name: "Mock2",
    price: 200,
    image: mockClothes,
  },
];
class Categories extends React.Component {
  render() {
    return (
      <div className="Categories">
        <div className="Categories-grid">
          {arrayOfCards.map((card) => {
            <ItemCard name={card.name} price={card.price} image={card.image} />;
          })}
          {console.log(arrayOfCards)}
        </div>
      </div>
    );
  }
}
export default Categories;
