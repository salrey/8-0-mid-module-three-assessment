import { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import productData from "./data/productData";


//Set up App as class component 
class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      products: productData,
    }
  }

  //Add methods here 
  handleAddToCart = (product) => {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product]
    })
  }

  handleFormReset = () => {
    this.setState({
      cart:[]
    })
  }

  render() {
    //Add your variables here 
      //Destructure your state
      const { cart } = this.state
      //Add a variable (products) that'll take your products data and map that into ProductCard, containing key property, and passing as props each product in the map and the button method to addToCart (which will update the cart State above and get passed as a prop to the Cart component) 
      const products = this.state.products.map((product) => {
        return (
          <ProductCard 
            key={product.id}
            product={product}
            handleAddToCart={this.handleAddToCart}
          />
        )
      })
    return (
      //NOTES:
      //Add your children components that'll share the state above
      //You will have three sections
        //Products Section with a title My Garage Sale and a list of products (Product Card) that includes product name, price, add to card button, picture and description 
        //Cart Section with a Cart Title that'll list out the items added to cart, including product name and price and with the subtotal, tax and total updating each time there's a product added to the cart 
        //Checkout Section with a Checkout Title that'll be a Form tag with inputs for name, email input, credit card input, zipcode input and a buy now button. Once buy now is complete, set up a window alert that confirms purchase with total cost. If not correctly submitted, a window alert with tell you which data point is invalid. Note that once submission is successful, you'll have to reset form and clear the cart state
      //Since there are certain states we'll need to share with some or all of the children, set these states at the Parent level 
        //We will need to have a cart state to add a product once we've added to cart 
        //
      //FINAL NOTE: To reset everything:
        // Consider adding a new method here (pass to Cart => pass to CheckOutForm), so that'll reset form fields and clear the cart state
        /////////////////////////////////////

        //Set up App container 
      <div className="App" id="app-container">
        <div className="products" id="product-list-container">
          <h3>Garage Sale</h3>
          {products}
        </div>

         <Cart cart={cart} handleFormReset={this.handleFormReset} />
      </div>
    )
  }
};

export default App;
