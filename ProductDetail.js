import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './productsData';

function ProductsDetail() {
    const {id} = useParams();
    const product = productsData.find(prod => prod.id === Number(id));
    console.log(product)
    return (
       <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
       </div>
    )
}

export default ProductsDetail;