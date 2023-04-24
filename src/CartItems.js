import React from "react";

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt="img" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qtn:1</div>
                </div>
                <div className="cart-item-actions">
                    {/* Button */}
                    <img alt="increase" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                    <img alt="decrease" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/07/62/09/1000_F_107620985_YEVa8uBObxyKA2DkTSiDL6llE0m0Uzqt.jpg"/>
                  
                    <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"/>
                </div>
            </div>
        )
    }
}
const styles={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        color:'#777'
    }
}
export default CartItem;