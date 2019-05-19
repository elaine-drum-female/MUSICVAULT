import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import { frets , price } from '../utils/Form/fixed_categories';


import { connect } from 'react-redux';
import { fetchBrands, fetchWoods } from '../../actions/products_actions';

import CheckboxCollapse from '../utils/checkboxCollapse';
import RadiobuttonCollapse from '../utils/radiobuttonCollapse';

class Shop extends Component {

    state = {
        grid:'',
        limit:6,
        skip:0,
        filters: {
            brand: [],
            frets: [],
            wood: [],
            price: []
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchBrands());
        this.props.dispatch(fetchWoods());
    }

    handleFilters = (filters,category) => {
      const newFilters = {...this.state.filters}
      newFilters[category] = filters;

      if(category === "price"){
        let priceValues = this.handlePrice(filters);
        newFilters[category] = priceValues
    }

      this.setState({
          filters: newFilters
      })
    }

    render() {
        console.log(this.state.filters);
        const products = this.props.products;

        return (
            <div>
                <PageTop 
                    title="Browse Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CheckboxCollapse
                                initState={true}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters) => this.handleFilters(filters, 'brand')}
                            />
                            <CheckboxCollapse
                                initState={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters) => this.handleFilters(filters, 'frets')}
                            />
                            <CheckboxCollapse
                                initState={true}
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters) => this.handleFilters(filters, 'wood')}
                            />
                            <RadiobuttonCollapse
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters) => this.handleFilters(filters, 'price')}
                            />
                        </div>
                        <div className="right">
                            right
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop);