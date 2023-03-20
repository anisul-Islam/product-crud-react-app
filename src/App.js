import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Products from './components/Products';
import NewProduct from './components/NewProduct';

const BASE_URL = 'http://localhost:3001/products';

const App = () => {
    return (
        <div>
            <Products />
        </div>
    );
};

export default App;
