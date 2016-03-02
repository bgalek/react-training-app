import React from "react";
import TestUtils from "react-addons-test-utils";
import ProductsList from "../../components/ProductsList";

describe('ProductsList', function () {
    it('should render 5 elements when given 5 products', function () {
        //given:
        const productsData = [1, 2, 3, 4, 5].map(it => {
            return {
                id: it,
                name: "Some name",
                price: {value: "123.50", currency: "zł"}
            }
        });

        //when
        const component = TestUtils.renderIntoDocument(<ProductsList products={productsData}/>);

        //then
        const tag = TestUtils.findRenderedDOMComponentWithTag(component, 'ul');
        assert.lengthOf(tag.childNodes, 5)
    })
});
