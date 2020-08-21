import React, {Component} from 'react';
import axios from "axios";

class ProductsComponent extends Component {
    state = {
        categories: [],
        products: []
    };
    componentDidMount() {
        axios.get('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/getCategories')
            .then(
                res => {
                    this.setState({ categories: res.data });
                }
                )

        axios.get('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/getProducts')
            .then(res => this.setState({ products: res.data }));


    };
    render() {
        return this.state.categories.map((category) => (
            <div key={category.id}>
                    <h2 >{category.name}</h2>
                {this.state.products.map((product) => {
                    if(product.categoryID === category.id){
                        return (
                            <div key={product.id}>
                                <h4 className="d-block">
                                    {product.name} - {product.price}
                                </h4>
                                <p>
                                    {product.notes}
                                </p>
                                <button value={product.id} onClick={e =>  this.props.AddProductToCart(e.target.value, product.price)}>Aggiungi all'ordine</button>
                            </div>
                        )
                    } else {
                        return (
                           null
                        )
                    }
                })}
            </div>
        ));
    }
}

export default ProductsComponent;
