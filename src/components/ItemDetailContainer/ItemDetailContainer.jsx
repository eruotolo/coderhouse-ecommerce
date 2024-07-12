import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

import { db } from '../../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const docRef = doc(db, 'products', productId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProducto({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('¡No existe tal producto!');
                navigate('/*');
            }
            setLoading(false);
        };

        getProduct();
    }, [productId, navigate]);

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
