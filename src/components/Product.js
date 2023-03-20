import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

import { currencyConverter } from '../util/NumberFormatter';
import Card from './ui/Card';

const Product = ({ product, onRemoveProduct, onEditProduct }) => {
    const { id, title, description, price, category, brand, stock, thumbnail, rating } = product;

    const handleDeleteById = (id) => {
        onRemoveProduct(id);
    };
    const handleEditById = (id) => {
        onEditProduct(id);
    };

    return (
        <Card>
            <article className="product">
                <img src={thumbnail} alt={title} className="product__img" />
                <h3>{title}</h3>
                <p>Description: {description}</p>
                <p>Price: {currencyConverter('de-DE', price, 'EUR')}</p>
                <p>Brand: {brand}</p>
                <p>Category: {category}</p>
                <p>Rating: {rating}/5</p>
                <p>stock: {stock} items</p>
                <div className="user__actions">
                    <button
                        className="btn"
                        onClick={() => {
                            handleEditById(id);
                        }}>
                        <FaEdit />
                    </button>
                    <button
                        className="btn"
                        onClick={() => {
                            handleDeleteById(id);
                        }}>
                        <FaTrash />
                    </button>
                </div>
            </article>
        </Card>
    );
};

export default Product;
