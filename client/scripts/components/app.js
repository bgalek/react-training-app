import React from 'react';

import ProductList from './ProductsList'

export default class App extends React.Component {
    render() {
        const products = [
            {
                id: 12,
                name: "Some name",
                price: {
                    value: "123.50",
                    curency: "zł"
                }
            }
        ];

        return (
            <div className="app">
                <h1>App</h1>
                <ProductList products={products} />
            </div>
        );
    }
};
