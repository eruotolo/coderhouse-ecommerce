import React from 'react';
import Item from '../Item/Item.jsx';

const ItemList = ({ products }) => {
    return (
        <div className="flex flex-wrap my-[30px]">
            {products.map((prod) => (
                <Item {...prod} key={prod.id} />
            ))}
        </div>
    );
};

export default ItemList;
