import React, {Component} from 'react';
import axios from 'axios';


class CartComponent extends Component {
    sendOrder = () => {
        axios.post('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/createOrder', {
            tableId: this.props.cart.tableId,
            productsID: this.props.cart.productsID.join(','),
            total: '1000',
            completed: false,
            payed: false
        })
    };
    render() {
        return (
            <div>
                <button onClick={this.sendOrder}>Completa ordine</button>
            </div>
        );
    }
}

export default CartComponent;
