import React from "react";
import _ from "lodash";
const Paginatio = props => {
  // debugger;
  const { numberOfItems, pageSize, currentPage, changePages } = props;
  const numberOfPages = numberOfItems / pageSize;
  console.log(numberOfPages);
  console.log(numberOfItems);
  console.log(pageSize);

  var arr = _.range(1, numberOfPages + 1);
  // for (let i = 1; i <= numberOfPages; i++) {
  //   arr.push(i);
  // }
  return (
    <div className="paging">
      {arr.map(i => (
        <div
          key={i}
          className={
            i === currentPage ? "paging__number active" : "paging__number"
          }
          onClick={() => changePages(i)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default Paginatio;
