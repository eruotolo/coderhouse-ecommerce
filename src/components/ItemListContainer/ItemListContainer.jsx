import React, { useEffect } from 'react';
import { getProducts } from '../../data/asyncMock.jsx';
import ItemList from '../ItemList/ItemList.jsx';

const ItemListContainer = () => {
    const [products, setProducts] = React.useState([]);
    console.log(products);

    useEffect(() => {
        getProducts()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    });

    return (
        <div className="container mx-auto">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
