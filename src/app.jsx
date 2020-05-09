import React, { Component } from "react";
import { Route, Switch, Redirect, Link, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import List from "./productList";
import AddProduct from "./addProduct";

import EditProduct from "./editProduct";
import Details from "./Details";
import Login from "./login";
class App extends Component {
  state = {
    cardAmount: 0,
    cardItem: null,
    item: {
      _id: "",
      userId: "",
      data: {
        name: "",
        description: "",
        lang: {
          id: 1,
          langName: "eng",
        },
      },
      price: 0,
      discount: 0,
      imgUrl: ["img/products/product-grey-1.jpg"],
      categoryTpe: "",
    },
  };
  handleShoppingCard = (item) => {
    const newState = { ...this.state };
    const count = newState.cardAmount + 1;
    this.setState({ cardAmount: count });
    this.setState({ cardItem: item });
    console.log(item);
    console.log(this.state.cardItem);

    // console.log(this.state.cardAmount);
  };
  handleEdit = (itm) => {
    debugger;
    if (localStorage.getItem("userId") != itm.userId) {
      alert("You not authorized");
    } else {
      console.log(itm.id);
      const item = { ...this.state.item };
      item._id = itm._id;
      item.data.name = itm.data.name;
      item.data.description = itm.data.description;
      item.price = itm.price;
      item.discount = itm.discount;
      item.userId = itm.userId;

      item.categoryTpe = itm.categoryTpe;

      this.setState({ item });
      console.log(this.state.item);
    }
  };
  // handleChangeTotal=()=>{
  //   const arr = [...this.state.cardArray];
  //   var sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i].price;
  //   }
  //   this.setState({ total: sum });
  // }
  render() {
    return (
      // <div className="container">
      <React.Fragment>
        <NavBar
          cardAmount={this.state.cardAmount}
          cardItem={this.state.cardItem}
        />
        <BrowserRouter>
          <Switch>
            <Route
              path="/list"
              render={() => (
                <List
                  handleShCard={this.handleShoppingCard}
                  handleEdit={this.handleEdit}
                />
              )}
            />
            <Route
              path="/editProduct"
              render={(props) => (
                <EditProduct {...props} item={this.state.item} />
              )}
            />
            <Route path="/login" component={Login} />

            <Route path="/addProduct" component={AddProduct} />
            <Route
              path="/details/:id"
              render={(props) => <Details {...props} />}
            />
            <Redirect from="/" exact to="/list" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
