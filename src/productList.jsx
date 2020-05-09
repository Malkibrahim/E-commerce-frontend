import React, { Component } from "react";
import {
  GetAll,
  Delete,
  CategoryFilter,
  Search,
  SortByName,
  SortByHighPrice,
  SortByLowPrice,
} from "./services/product";
import Pagination from "./pagination";

import { Link } from "react-router-dom";
import Item from "./item";
import { GetItemById, GetAllCategories } from "./services/categories";

import Category from "./category";
import Tags from "./tags";
class List extends Component {
  state = {
    products: [],
    categories: [],
    currentPage: 1,
    pageSize: 6,
    cardContent: 0,
    term: "",
    searchResArr: [],
  };
  async componentDidMount() {
    const { data } = await GetAll();
    this.setState({ products: data.products });
    const dataCat = await GetAllCategories();
    this.setState({ categories: dataCat });
    console.log(this.state.categories);
  }
  handleChangePages = (No) => {
    this.setState({ currentPage: No });
    console.log(this.state.currentPage);
  };
  handleDelete = async (item) => {
    debugger;
    if (localStorage.getItem("userId") != item.userId) {
      alert("You not authorized");
    } else {
      const originalData = [...this.state.products];
      const newState = { ...this.state };
      const newPoduct = newState.products.filter((i) => i._id !== item._id);
      console.log(newPoduct);
      this.setState({ products: newPoduct });
      console.log(this.state.products);
      try {
        await Delete(item._id);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          alert("already deleted");
        }
        this.setState({ products: originalData });
      }
    }
  };
  // handleSearch = (e) => {
  //   // this.setState({ term: e.target.value });
  //   // const res = [...this.state.products];
  //   // console.log(res);
  //   // res = Search(this.state.term);

  //   console.log("res");
  // };
  handleSorting = async (e) => {
    debugger;
    console.log(e.target.value);
    let products;
    const target = e.target.value;
    switch (target) {
      case "2":
        products = await SortByLowPrice();

        break;
      case "3":
        products = await SortByHighPrice();
        break;

      case "4":
        products = await SortByName();

        break;
      default:
        products = await SortByName();

        break;
    }
    // const menu = this.state.products.sort(function (a, b) {
    //   var nameA = a.name;
    //   var nameB = b.name;
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }

    //   return 0;
    // });
    this.setState({ products });
  };
  handleCatFilter = async (id) => {
    debugger;
    if (id === 0) {
      const { data } = await GetAll();
      this.setState({ products: data.products });
    } else {
      const data = await CategoryFilter(id);
      this.setState({ products: data });
    }
  };

  render() {
    // this.componentDidMount();

    const { handleShCard, handleEdit } = this.props;
    const start = (this.state.currentPage - 1) * this.state.pageSize;
    const PageContent = this.state.products.slice(
      start,
      start + this.state.pageSize
    );

    // console.log(PageContent);
    return (
      <React.Fragment>
        <div className="container">
          <section className="filters">
            {/* <Search handleSearch={this.handleSearch} /> */}
            <Category
              categories={this.state.categories}
              handleCatFilter={this.handleCatFilter}
            />
            <Tags />
          </section>
          <section className="item-listing">
            <div className="item-listing__tools">
              <select
                onChange={(e) => this.handleSorting(e)}
                className="form-control"
                name=""
                id=""
              >
                <option value="1">Featured</option>
                <option value="2">Price low to high</option>
                <option value="3">Price high to low</option>
                <option value="4">Name</option>
              </select>
              <Link to="/addProduct" className="action-btn" href="#">
                <i className="fas fa-plus"></i>
              </Link>
            </div>
            <Item
              PageContent={PageContent}
              handleShCard={handleShCard}
              handleDelete={this.handleDelete}
              handleEdit={handleEdit}
            />
            <Pagination
              numberOfItems={this.state.products.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              changePages={this.handleChangePages}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default List;
