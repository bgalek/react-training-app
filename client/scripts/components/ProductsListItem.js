import React from 'react';

export default class extends React.Component {
    render() {
        const { product } = this.props;
        return (
            <li>
                {product.name}
            </li>
        );
    }
};
