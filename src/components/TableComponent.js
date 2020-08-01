import React, {Component} from 'react';
import axios from "axios";

class TableComponent extends Component {
    state = {
        tables: []
    };

    componentDidMount() {
        axios.get('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/getTables')
            .then(res => this.setState({ tables: res.data }));
    };
    render() {
        var  cart = this.props.cart;
        return (
            <div>
                <select onChange={(e) => cart.tableId = e.target.value}>
                    {this.state.tables.map((table) => {
                        return (<option key={table.id} value={table.id}>{table.number}</option>);
                    })}
                </select>
            </div>
        );
    }
}

export default TableComponent;
