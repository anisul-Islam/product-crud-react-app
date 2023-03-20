import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewProduct from './NewProduct';

import Product from './Product';

const BASE_URL = 'http://localhost:3001/products';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [editableProduct, setEditableProduct] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            const result = await response.data;
            setProducts(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const addNewProduct = (product) => {
        setProducts((prevProducts) => {
            return [...prevProducts, product];
        });
    };

    const removeProduct = (selectedId) => {
        const filterProducts = products.filter((product) => product.id !== selectedId);
        setProducts(filterProducts);
    };

    const editProduct = (selectedId) => {
        const filterProducts = products.find((product) => product.id === selectedId);
        setEditableProduct(filterProducts);
    };

    const updateProduct = (updatedProduct) => {
        const productIndex = products.findIndex((product) => product.id === updatedProduct.id);
        const splicedProducts = [...products];
        splicedProducts.splice(productIndex, 1, updatedProduct);
        setProducts(splicedProducts);
    };

    const renderProductsElement = products && products.map((product) => <Product key={product.id} product={product} onRemoveProduct={removeProduct} onEditProduct={editProduct} />);

    return (
        <div>
            <NewProduct onAddNewProduct={addNewProduct} editableProduct={editableProduct} onUpdateProduct={updateProduct} />
            <section className="products">{renderProductsElement}</section>
        </div>
    );
};

export default Products;
