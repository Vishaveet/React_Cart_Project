import React from "react";

const CartItem = (props) => {

    const { title, price, qty } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        OnDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} alt="img" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty:{qty}</div>

                <div className="cart-item-actions">
                    {/* Button */}
                    <img alt="increase" className="action-icons"
                        onClick={() => onIncreaseQuantity(product)}
                        src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                    <img alt="decrease" className="action-icons"
                        onClick={() => onDecreaseQuantity(product)}
                        src="https://as2.ftcdn.net/v2/jpg/01/07/62/09/1000_F_107620985_YEVa8uBObxyKA2DkTSiDL6llE0m0Uzqt.jpg" />

                    <img alt="delete" className="action-icons"
                        onClick={() => OnDeleteProduct(product.id)}
                        src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" />
                </div>
            </div>
        </div>
    )
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        color: '#777'
    }
}
export default CartItem;