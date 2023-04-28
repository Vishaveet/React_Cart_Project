import React from "react";
import CartItem from "./CartItems";
const Cart=(props)=>{

        const {products}=props;
        return (
            <div className="cart">
                {products.map((product)=>{
                     return (
                      <CartItem 
                       product={product}
                       key={product.id}
                       onIncreaseQuantity={props.onIncreaseQuantity}
                       onDecreaseQuantity={props.onDecreaseQuantity}
                       OnDeleteProduct={props.OnDeleteProduct}
                       />
                     )
                })}
            </div>
        )
}

export default Cart;