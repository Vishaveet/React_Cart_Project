import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state={
       products:[
        {
            price:99,
            title:'Watch',
            qty:1,
            img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:1
        },
        {
            price:999,
            title:'Moblie phone',
            qty:1,
            img:'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id:2
        },
        {
            price:9999,
            title:'Laptop',
            qty:1,
            img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id:3
        }
        
       ]
    }
}
handleIncreaseQuantity=(product)=>{
    console.log('Hey please inc the quantity',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
    console.log('hey please dec the quantity',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty -=1;
    this.setState({
        products:products
    })
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;

    const item=products.filter((item)=>item.id!==id); //[{}]

    this.setState({
        products:item
    })
}
getCartCount= ()=>{
  const {products}=this.state;
  let count=0;
    products.forEach((product)=>{
      count +=product.qty;
    });
  return count;
}
getCartTotal= ()=>{
  const {products}=this.state;

  let cartTotal=0;
  products.forEach((product)=>{
    cartTotal=cartTotal+product.qty*product.price;
  })
  return cartTotal;
}
  render(){
    const {products}=this.state;
   return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      OnDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
    </div>
   );
  }
}


export default App;
