import { Component } from "react";
import "./App.css";

//Set up App as class component 
class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  //Add methods here 

  render() {
    //Add your variables here 
      //Destructure your state
      //Add a variable (products) that'll take your products data and map that into ProductCard, containing key property, and passing as properties each product in the map and the button method to addToCart 
      //Add a 
    return (
      //NOTES:
      //Add your children components that'll share the state above
      //You will have three sections
        //Products Section with a title My Garage Sale and a list of products (Product Card) that includes product name, price, add to card button, picture and description 
        //Cart Section with a Cart Title that'll list out the items added to cart, including product name and price and with the subtotal, tax and total updating each time there's a product added to the cart 
        //Checkout Section with a Checkout Title that'll be a Form tag with inputs for name, email input, credit card input, zipcode input and a buy now button. Once buy now is complete, set up a window alert that confirms purchase with total cost. If not correctly submitted, a window alert with tell you which data point is invalid. Note that once submission is successful, you'll have to reset form and clear the cart state
      //Since there are certain states we'll need to share with some or all of the children, set these states at the Parent level 
        //We will need to have a cart state to add a product once we've added to cart 
        //???total state that'll be used in the Cart component and Checkout Component (May have to just but Checkout inside the Cart component)
        /////////////////////////////////////

        //Set up App container 
      <div className="App" id="app-container">
        {/* Components/sections */}
        {/* products section that'll grab variable products*/}
        {/* <div id="product-list-container">{products}</div> */}
        {/* Cart component with a CheckOutForm Component*/}
        {/* <Cart cart={cart} />
              <CheckoutForm buyNowHandler={this.buyNow} /> */}

        {/* CSS styling test begins  */}
        <div className="products">
          <h3>Garage Sale</h3>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
        </div>
        <div className="cart">
          <h3>Cart</h3>
          <h4>Total</h4>
          <div className="checkout">
            <h3>Checkout</h3>
            <p>Buy Now</p>
          </div>
        </div>
        {/* CSS styling test ends */}

      </div>
    )
  }
};

export default App;
