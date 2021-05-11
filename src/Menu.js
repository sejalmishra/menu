import React from 'react';

const Menu = ({menuItems}) => {
  return <div className='section-center'>
    
      {menuItems.map((menuItem) => {
        const {id, title, price, img, desc} = menuItem;
        return <article key={id} className='menu-item'>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
            <header>
              <h3>{title}</h3>
              <h3 className='price'>${price}</h3>
              </header>
          <p className='item-text'>{desc}</p>
          </div>
        </article>
      })} 
  </div>;
};

export default Menu;
