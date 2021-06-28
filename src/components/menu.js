import React from 'react';

const Menu = ({items}) => {
    return (
        <div className='menu'>
            {items.map(item => {
                const {id ,title, price,img,desc}= item
                return(
                <div className='box' key={id}>
                    <div className='image'>
                        <img src={img} alt={title} />
                    </div>
                    <div className='content'>
                        <h4>{title}</h4>
                        <span>{price}</span>
                        <p>{desc}</p>
                    </div>
                </div>);
            })}
        </div>
    );
};

export default Menu;