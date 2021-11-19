import formatPrice from "../helpers/formatPrice"

const ProductCard = (props) => {
    const { name, price, description, img } = props.product
    
    return (
        <div className="product-item-container">
            <h4>{name}</h4>
            <p>Price: {formatPrice(price)}</p>
            <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
            <img className="product-image" src={img} alt={name} />
            <p>{description}</p>
        </div>
    )
}

export default ProductCard;