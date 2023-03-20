import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const NewProduct = ({ btnText = 'add product', onAddNewProduct, onUpdateProduct, editableProduct }) => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        category: 'smartphones',
        stock: '',
        brand: 'Apple'
    });
    const [show, setShow] = useState(false);

    useEffect(() => {
        editableProduct &&
            setProduct({
                title: editableProduct.title,
                description: editableProduct.description,
                price: editableProduct.price,
                category: editableProduct.category,
                stock: editableProduct.stock,
                brand: editableProduct.brand
            });
    }, [editableProduct]);

    const handleChange = (e) => {
        e.stopPropagation();
        setProduct((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editableProduct) {
            onUpdateProduct({ id: editableProduct.id, ...product });
        } else {
            onAddNewProduct({ id: uuidv4(), ...product });
        }

        setProduct({
            title: '',
            description: '',
            price: '',
            category: 'smartphones',
            stock: '',
            brand: 'Apple'
        });
    };

    return (
        <div>
            <button
                className="btn"
                onClick={() => {
                    setShow(!show);
                }}>
                {show ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            {show && (
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__control">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" onChange={handleChange} value={product.title} required />
                    </div>
                    <div className="form__control">
                        <label htmlFor="description">Description: </label>
                        <textarea name="description" onChange={handleChange} value={product.description}></textarea>
                    </div>
                    <div className="form__control">
                        <label htmlFor="price">price: </label>
                        <input type="number" name="price" onChange={handleChange} value={product.price} required />
                    </div>
                    <div className="form__control">
                        <label htmlFor="stock">stock: </label>
                        <input type="number" name="stock" onChange={handleChange} value={product.stock} required />
                    </div>
                    <div className="form__control">
                        <span>Brand: </span>

                        <input type="radio" name="brand" onChange={handleChange} value="Apple" checked={product.brand === 'Apple'} />
                        <label htmlFor="Apple">Apple</label>

                        <input type="radio" name="brand" onChange={handleChange} value="Samsung" checked={product.brand === 'Samsung'} />
                        <label htmlFor="Samsung">Samsung</label>
                    </div>
                    <div className="form__control">
                        <span>Category: </span>

                        <select name="category" id="category" value={product.category} onChange={handleChange}>
                            <option value="Samrtphones">Samrtphones</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Fragnances">Fragnances</option>
                        </select>
                    </div>
                    <button>{editableProduct ? 'Edit Product' : btnText}</button>
                </form>
            )}
        </div>
    );
};

export default NewProduct;
