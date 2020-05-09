import React, { Component } from "react";

import { Link } from "react-router-dom";
class Item extends Component {
  state = {};

  render() {
    const { PageContent, handleShCard, handleDelete, handleEdit } = this.props;
    return (
      <div className="item-listing__items item-listing--3items">
        {PageContent.map((prod) => (
          <React.Fragment key={prod._id}>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: 'url("img/products/product-grey-1.jpg")',
                }}
              >
                <Link
                  to="#"
                  className="item-medium-1__action"
                  onClick={() => handleShCard(prod)}
                  //  onChange={()=>handleChangeTotal()}
                >
                  Add to Cart
                </Link>
              </div>
              <Link to={`/details/${prod._id}`}>
                <h4>{prod.data.name}</h4>
                <div className="flex-row">
                  <div>
                    <del>
                      $ {parseInt(prod.price) + parseInt(prod.discount)}
                    </del>
                    <span className="lable">${prod.price}</span>
                  </div>
                </div>
              </Link>
              <div className="crud-actions">
                <Link to={`/details/${prod._id}`}>
                  <i className="far fa-eye"></i>
                </Link>
                <Link to="/editProduct" onClick={() => handleEdit(prod)}>
                  <i className="fas fa-edit"></i>
                </Link>
                <Link to="#" onClick={() => handleDelete(prod)}>
                  <i className="fas fa-trash-alt"></i>
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}{" "}
      </div>
    );
  }
}

export default Item;
