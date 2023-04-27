import React from "react";
import CartItem from "./CartItems";
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
           products:[
            {
                price:99,
                title:'Watch',
                qty:1,
                img:'',
                id:1
            },
            {
                price:999,
                title:'Moblie phone',
                qty:1,
                img:'',
                id:2
            },
            {
                price:9999,
                title:'Laptop',
                qty:1,
                img:'',
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
    render(){
        const {products}=this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                     return (
                      <CartItem 
                       product={product}
                       key={product.id}
                       onIncreaseQuantity={this.handleIncreaseQuantity}
                       onDecreaseQuantity={this.handleDecreaseQuantity}
                       OnDeleteProduct={this.handleDeleteProduct}
                       />
                     )
                })}
            </div>
        )
    }
}
export default Cart;