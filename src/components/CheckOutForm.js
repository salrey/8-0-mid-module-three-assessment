import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class CheckOutForm extends Component {
    constructor() {
        super()
        this.state = {
            first: "",
            last:  "",
            email: "",
            creditcard: "",
            zipcode: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { first, last, email, creditcard, zipcode } = this.state;

        const total = this.props.total

        if (!((first && last && email) !== "")) {
            window.alert("Input is not valid")
        } else if (creditcard.length !== 16) {
            window.alert("Input is not valid \n Credit card number is not valid")
        } else if (zipcode.length !== 5) {
            window.alert("Input is not valid \n Zip code is not valid")
        } else {
            window.alert(`Purchase complete. You will be charged ${formatPrice(total)}`)
        }
    }

    render() {
        const { first, last, email, creditcard, zipcode } = this.state;
        return (
            <form onSubmit={this.handleSubmit} id="checkout">
                <h3>Checkout</h3>
                <label htmlFor="first">First Name</label>
                <input onChange={this.handleChange} type="text" name="first" id="first" value={first}/>
                
                <label htmlFor="last">Last Name</label>
                <input onChange={this.handleChange} type="text" name="last" id="last" value={last}/>
    
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} type="email" name="email" id="email" value={email}/>
    
                <label htmlFor="creditcard">Credit Card</label>
                <input onChange={this.handleChange} type="tel" size="16" name="creditcard" id="creditcard" value={creditcard}/>
    
                <label htmlFor="zipcode">Zip Code</label>
                <input onChange={this.handleChange} type="tel" size="5" name="zipcode" id="zipcode" value={zipcode} />
    
                <button>Buy Now</button>
                
            </form>
        )
    }
}

export default CheckOutForm;