import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Moblie phone',
            qty:1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =()=>{
        // this.state.qty=1;
        console.log('test',this.state);

        // setState form 1
        // this.setState({
        //     qty:this.state.qty+1
        // })
        // setState form 2 if prevState required use this 

        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        })
    }
    decreaseQuantity=()=>{

        const {qty}=this.state;

        if(qty===0){
            return ;
        }
        console.log('test1',this.state);
        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        })
    }
    render(){
        const { price ,title,qty }=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="data:image/jpeg;base64,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" alt="img" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                
                <div className="cart-item-actions">
                    {/* Button */}
                    <img alt="increase" className="action-icons"
                    onClick={this.increaseQuantity}
                    src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                    <img alt="decrease" className="action-icons"
                    onClick={this.decreaseQuantity}
                    src="https://as2.ftcdn.net/v2/jpg/01/07/62/09/1000_F_107620985_YEVa8uBObxyKA2DkTSiDL6llE0m0Uzqt.jpg"/>
                  
                    <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"/>
                </div>
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