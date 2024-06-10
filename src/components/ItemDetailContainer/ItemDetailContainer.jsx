import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import { PropagateLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    console.log(productId);

    useEffect(() => {
        getProductById(productId)
            .then((data) => setProducto(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    console.log(producto);
    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-[70vh]">
                    <PropagateLoader color="#172983" />
                </div>
            ) : (
                <ItemDetail {...producto} />
            )}
        </>
    );
};

export default ItemDetailContainer;
