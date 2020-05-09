import React, { Component } from "react";

import { GetAll } from "./services/product";
import { Link, BrowserRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    cardArray: [],
    flag: false,
    total: 0
  };
  async componentDidMount() {
    const { data } = await GetAll();
    console.log(data);
  }

  handleClickCard = () => {
    const opposite = !this.state.flag;
    this.setState({ flag: opposite });
    const arr = [...this.state.cardArray];
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i].price);
    }
    this.setState({ total: sum });
  };
  handleTotal = () => {};
  render() {
    const { cardAmount, cardItem } = this.props;
    //const cardArray =[];
    if (cardItem && !this.state.cardArray.includes(cardItem)) {
      this.state.cardArray.push(cardItem);
    }
    console.log(this.state.cardArray);
    return (
      <React.Fragment>
        <div className="header">
          <div className="header__upper">
            <div className="container">
              <ul className="list list--hr list--hr-separator">
                <li className="list__item">
                  <span className="info">
                    <i className="info__icon far fa-dot-circle"></i>
                    <span className="info__data">
                      1234 Street Name, City Name
                    </span>
                  </span>
                </li>
                <li className="list__item">
                  <a href="#" className="info">
                    <i className="info__icon fab fa-whatsapp"></i>
                    <span className="info__data">123-456-7890</span>
                  </a>
                </li>
                <li className="list__item">
                  <a href="#" className="info">
                    <i className="info__icon far fa-envelope"></i>
                    <span className="info__data">mail@domain.com</span>
                  </a>
                </li>
              </ul>
              <ul className="list list--hr">
                <li className="list__item">
                  <a href="#" className="link">
                    <i className="link__icon fas fa-angle-right"></i>
                    About Us
                  </a>
                </li>
                <li className="list__item">
                  <a href="#" className="link">
                    <i className="link__icon fas fa-angle-right"></i>
                    Contact Us
                  </a>
                </li>
                <li className="list__item">
                  <div className="dropdown ">
                    <div className="dropdown__header">
                      <a href="#" className="link">
                        <img className="flag flag-us" src="" alt="" />
                        English
                      </a>
                      <i className="fas fa-angle-down"></i>
                    </div>

                    <div className="dropdown__body">
                      <ul className="dropdown__items list">
                        <li className="dropdown__item list__item">
                          <a href="#" className="link">
                            <img className="flag flag-us" src="" alt="" />
                            English
                          </a>
                        </li>
                        <li className="dropdown__item list__item">
                          <a href="#" className="link">
                            <img className="flag flag-es" src="" alt="" />
                            Español
                          </a>
                        </li>
                        <li className="dropdown__item list__item">
                          <a href="#" className="link">
                            <img className="flag flag-fr" src="" alt="" />
                            Française
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__middle container">
            <a href="#" className="header__logo-box">
              <img className="header__logo" src="img/logo.png" alt="" />
            </a>
            <div className="header__user-options">
              <BrowserRouter>
                <Link to="/login" className="link">
                  Login
                </Link>
              </BrowserRouter>
              <div className="dropdown">
                <div className="dropdown__header">
                  <div
                    className="image image--small image--circle"
                    style={{ backgroundImage: 'url("img/PersonalImage.png")' }}
                  ></div>
                </div>
                <div className="dropdown__body"></div>
              </div>

              <div
                onClick={this.handleClickCard}
                className={
                  this.state.flag
                    ? "dropdown dropdown--left dropdown--opened"
                    : "dropdown dropdown--left  "
                }
              >
                <div className="dropdown__header">
                  <div
                    className="image image--small"
                    style={{
                      backgroundImage: ' url("img/icons/icon-cart-big.svg")'
                    }}
                  >
                    <div className="notification notification--danger">
                      {cardAmount}
                    </div>
                  </div>
                </div>
                {/* {hcccccccccccccccccccccccccccccccf} */}
                <div className="dropdown__body ">
                  <ul
                    className="dropdown__items list list--vr-separator "
                    //onClick={this.handleClickCard}
                  >
                    {this.state.cardArray.map(item => (
                      <React.Fragment>
                        <li className="dropdown__item list__item">
                          <div className="item-small-1">
                            <div className="item-small-1__data">
                              <a href="" className="item-small-1__title">
                                {item.data.name}
                              </a>
                              <span className="item-small-1__description">
                                {item.data.description}
                              </span>
                            </div>
                            <div className="item-small-1__image-box">
                              <a
                                href="#"
                                className="item-small-1__image image"
                                style={{
                                  backgroundImage:
                                    ' url("img/products/product-1.jpg")'
                                }}
                              ></a>
                              <a href="#" className="item-small-1__action">
                                <i className="fas fa-times"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                  <div className="separator"></div>
                  <div className="block">
                    <span className="lable">Total:</span>
                    <span onChange={this.handleTotal} className="lable">
                      ${this.state.total}
                    </span>
                  </div>
                  <div className="block list list--hr">
                    <a className="list-item btn btn--gray" href="">
                      View Cart
                    </a>
                    <a className="list-item btn btn--primary" href="">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__lower container">
            <nav className="nav">
              <ul className="nav__items list list--hr">
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav__item dropdown ">
                  <a className="nav__link dropdown__header" href="#">
                    Products
                  </a>
                  <div className="dropdown__body">
                    <ul className=" list">
                      <li className="list__item">
                        <a className="nav__inner-link" href="#">
                          Product Listing
                        </a>
                      </li>
                      <li className="list__item">
                        <a className="nav__inner-link" href="#">
                          Add Product
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
