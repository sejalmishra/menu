import React from 'react';

const Categories = ({category, filterItem}) => {
  return (
    <div className="btn-container">
   {category.map((categoryItem , index) => {
     return (
        <button key={index} className="filter-btn" onClick={() => filterItem(categoryItem)}>{categoryItem}</button>
   )})}
   </div>
  )
  ;
};

export default Categories;
