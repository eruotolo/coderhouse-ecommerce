import React, { useEffect } from 'react';
//import { getProductByCategory, getProducts } from '../../data/asyncMock.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

import { db } from '../../config/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = React.useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = React.useState(true);

    console.log(db);

    useEffect(() => {
        setLoading(true);

        const getData = async () => {
            const coleccion = collection(db, 'products');
            const queryRef = !categoryId
                ? coleccion
                : query(coleccion, where('categoria', '==', categoryId));

            const response = await getDocs(queryRef);

            console.log(response);

            const productos = response.docs.map((doc) => {
                const newItem = {
                    ...doc.data(),
                    id: doc.id,
                };
                return newItem;
            });

            console.log(productos);
            setProducts(productos);
            setLoading(false);
        };
        getData();

        // const dataProductos = categoryId ? getProductByCategory(categoryId) : getProducts();
        // dataProductos
        //     .then((data) => setProducts(data))
        //     .catch((err) => console.log(err))
        //     .finally(() => setLoading(false));
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
