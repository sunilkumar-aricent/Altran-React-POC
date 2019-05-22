import React, { Component } from 'react'
import '../SearchProducts/SearchProducts.scss'
import axios from 'axios'

class SearchProducts extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    // componentWillMount(keyword) {
    //     axios.get('http://localhost:8080/api/products/sql?keyword=' + keyword)
    //         .then(res => {
    //             const products = res.data;
    //             console.log(products)
    //             this.setState({ products });
    //         })
    // }
    search() {
        axios.get('http://localhost:8080/api/products/sql?keyword=' + 
        encodeURIComponent(document.getElementById("search-icon").value))
            .then(res => {
                const products = res.data;
                console.log(products)
                this.setState({ products });
            })
            console.log(this.products)
}

    render() {
        return (<div className="search-box-container">
            <form onSubmit={this.search}>
                <input className="search-box" type="textBox" placeholder="Search..." />
                <input id="search-icon" type="image" src="/search-icon.png" alt="Submit"/>
                </form>
        </div>)
    }
}

export default SearchProducts