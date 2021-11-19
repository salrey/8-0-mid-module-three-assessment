import formatPrice from "../helpers/formatPrice";

const Cart = (props) => {

    let subTotal = 0
    props.cart.length && props.cart.forEach((product) => subTotal += product.price)
    const tax = subTotal * .05
    const total = subTotal + tax

    return (
        <div className="cart">
            <h3>Cart</h3>
            <ul>{props.cart.map((product) => <li key={product.id} >{product.name} {formatPrice(product.price)}</li>)}</ul>
            <h4>Subtotal: {formatPrice(subTotal)}</h4>
            <h4>Tax: {formatPrice(tax)}</h4>
            <h4>Total: {formatPrice(total)}</h4>
        </div>
    )
}

export default Cart;