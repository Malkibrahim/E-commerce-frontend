import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    const { handleSearch } = this.props;
    return (
      <React.Fragment>
        <div className="search-box">
          <input
            className="search-box__input"
            placeholder="Search..."
            type="text"
            name="txt_search"
            id=""
          />
          <button onClick={(e) => handleSearch(e)} className="search-box__btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
