import React from "react";
import Header from "../Components/Header";
import FilteredItems from "../Pages/FilteredItems";
class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
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
      chosenCategory: "Women",
      currencies: [
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
      Cart: [],
    };
  }
  setCategories = (newState) => {
    this.setState({
      categories: newState,
    });
  };
  setCurrencies = (newState) => {
    this.setState({
      currencies: newState,
    });
  };
  render() {
    return (
      <div>
        <Header
          categories={this.state.categories}
          setCategories={this.setCategories}
          currencies={this.state.currencies}
          setCurrencies={this.setCurrencies}
        />
        <FilteredItems
          name={
            this.state.categories.find((element) => element.chosen === true)
              ? this.state.categories.find((element) => element.chosen === true)
                  .name
              : "All"
          }
          currency={
            this.state.currencies.find((element) => element.chosen === true)
              .name[0]
          }
        />
      </div>
    );
  }
}
export default Pages;
