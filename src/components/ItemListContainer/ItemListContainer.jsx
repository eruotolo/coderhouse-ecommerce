import React, { useEffect } from 'react';
import { getProductByCategory, getProducts } from '../../data/asyncMock.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

const ItemListContainer = () => {
    const [products, setProducts] = React.useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setLoading(true);
        const dataProductos = categoryId ? getProductByCategory(categoryId) : getProducts();
        dataProductos
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div className="container mx-auto">
            {loading ? (
                <div className="flex justify-center items-center h-[70vh]">
                    <PropagateLoader color="#172983" />
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
