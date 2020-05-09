import React from "react";
const Category = (props) => {
  const { categories, handleCatFilter } = props;
  return (
    <div>
      <h5>Categories</h5>
      <ul className="list list--vr-separator">
        {categories.map((cat) => (
          <li
            onClick={() => handleCatFilter(cat._id)}
            key={cat.id}
            className="link list__item"
          >
            <i className="link__icon fas fa-angle-right"></i>
            {cat.name}
          </li>
        ))}
        <li onClick={() => handleCatFilter(0)} className="link list__item">
          <i className="link__icon fas fa-angle-right"></i>
          All
        </li>
      </ul>
    </div>
  );
};

export default Category;
