import React, { Component } from "react";
import { Add } from "./services/product";
import { GetAllCategories } from "./services/categories";
class AddProduct extends Component {
  state = {
    item: {
      userId: null,
      data: {
        name: "",
        description: "",
        lang: {
          id: "",
          langName: "",
        },
      },
      price: 0,
      discount: 0,
      imgUrl: "",
      categoryType: "",
    },
    categories: [],
  };
  async componentDidMount() {
    const categories = await GetAllCategories();
    this.setState({ categories });
    console.log(this.state.categories);
  }
  handleChangeFLevel = (e) => {
    const item = { ...this.state.item };
    // const data = { ...item.data };
    item[e.target.name] = e.target.value;

    this.setState({ item });
    console.log(this.state.item);
  };
  handleChange = (e) => {
    const item = { ...this.state.item };
    // const data = { ...item.data };
    if (e.target.name == "discount" || e.target.name == "price") {
      const val = parseInt(e.target.value);
      item.data[e.target.name] = val;
    } else {
      item.data[e.target.name] = e.target.value;
    }
    item.userId = localStorage.getItem("userId");
    this.setState({ item });
    //  console.log(this.state.item.data);
  };
  handleAdd = async (e) => {
    debugger;
    e.preventDefault();

    console.log(this.state.item);

    const data = await Add(this.state.item);
    console.log(data);
    this.props.history.push("/list");
  };
  handleCancel = () => {
    this.props.history.push("/list");
  };
  render() {
    return (
      <React.Fragment>
        <div className=" container">
          <form className="add-product" action="">
            <div className="add-product__images slider">
              <div className="add-product__image-actions">
                <div className="add-product__image-action">
                  <a href="#">
                    <i className="fas fa-plus-square"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-edit"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </div>
              </div>
              <div className="slider__items">
                <div
                  className="slider__item active"
                  style={{
                    backgroundImage: "url(img/products/product-grey-7.jpg)",
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url(img/products/product-grey-7.jpg)",
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url(img/products/product-grey-7.jpg)",
                  }}
                ></div>
              </div>
              <div className="slider__indicators">
                <span className="slider__indicator active"></span>
                <span className="slider__indicator"></span>
                <span className="slider__indicator"></span>
              </div>
            </div>
            <div className="add-product__data">
              <div className="form-controls">
                <section className="tabs">
                  <div className="tabs__headers">
                    <div className="tabs__header active">English</div>
                    <div className="tabs__header">Arabic</div>
                  </div>
                  <div className="tabs__bodies">
                    <div className="tabs__body active">
                      <div className="form-group invalid">
                        <label htmlFor="">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id=""
                          onChange={this.handleChange}
                          //  value={}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea
                          className="form-control"
                          name="description"
                          id=""
                          cols="30"
                          rows="4"
                          onChange={this.handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="tabs__body ">
                      <div className="form-group invalid">
                        <label htmlFor="">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          cols="30"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    onChange={this.handleChangeFLevel}
                    className="form-control"
                    type="text"
                    name="price"
                    id=""
                  />
                </div>
                <div className="add-product__discount">
                  <div className="form-group">
                    <label htmlFor="">Satus</label>
                    <div className="form-group__radios">
                      <div className="form-group__radio">
                        <input type="radio" name="" id="" />
                        <span>On Sale</span>
                      </div>
                      <div className="form-group__radio">
                        <input type="radio" name="" id="" />
                        <span>Not On Sale</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Discount</label>
                    <input
                      onChange={this.handleChangeFLevel}
                      className="form-control"
                      type="text"
                      name="discount"
                      id=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Payment Types</label>
                  <div className="form-group__checkboxs">
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Direct Bank Transfare</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Cheque Payment</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Paypal</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Visa</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Mastercard</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>On Dilivery</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Category</label>
                  <select
                    onChange={this.handleChangeFLevel}
                    className="form-control"
                    name="categoryType"
                    id=""
                  >
                    {this.state.categories.map((cat) => (
                      <option name="categoryType" value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="taged-textbox form-group">
                  <label className="taged-textbox__lable" htmlFor="">
                    Tags
                  </label>
                  <div className="taged-textbox__data">
                    <div className="taged-textbox__tags">
                      <div className="taged-textbox__tag">
                        <span>tag1</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag2</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag3</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag4</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag5</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag6</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag7</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag8</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag9</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag10</span>
                        <a className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                    </div>
                    <div className="taged-textbox__clear">
                      <a href="#">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                  </div>
                  <input
                    className="taged-textbox__textbox form-control"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="add-product__actions">
                  <button onClick={this.handleCancel} className="btn btn--gray">
                    Cancel
                  </button>
                  <button onClick={this.handleAdd} className="btn btn--primary">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="footer">
          <div></div>

          <div></div>

          <div></div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddProduct;
