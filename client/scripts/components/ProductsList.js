import React from 'react';

import ProductsListItem from './ProductsListItem'

export default class extends React.Component {
    renderProducts() {
        const { products } = this.props;
        return products.map(product => <ProductsListItem product={product} key={product.id} />)
    }

    render() {
        return (
            <ul>
                {this.renderProducts()}
            </ul>
        );
    }
};
