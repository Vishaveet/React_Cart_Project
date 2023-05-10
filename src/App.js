import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";
import firebase from "firebase/compat/app";
// import * as firebase from "firebase";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [

      ],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot)=>{
    //   // console.log(snapshot);

    //   // snapshot.docs.map((doc)=>{
    //   //    return console.log(doc.data());
    //   // });
    //   const products=snapshot.docs.map((doc)=>{
    //     const data=doc.data();

    //     data['id']=doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products,
    //     loading:false
    //   })
    // })
    this.db
      .collection('products')
      // .where('price','==',999)
      // .where('title','==','watch')
      .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {
        // console.log(snapshot);

        // snapshot.docs.map((doc)=>{
        //    return console.log(doc.data());
        // });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading: false
        })
      })
  }

  handleIncreaseQuantity = (product) => {
    // console.log('Hey please inc the quantity',product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty +=1;
    // this.setState({
    //     products:products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty += 1
      })
      .then(() => {
        console.log('update successfully');
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }
  handleDecreaseQuantity = (product) => {
    // console.log('hey please dec the quantity',product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -=1;
    // this.setState({
    //     products:products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty -= 1
    })
      .then(() => {
        console.log('update successfully')
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }
  handleDeleteProduct = (id) => {
    // const {products}=this.state;

    // const item=products.filter((item)=>item.id!==id); //[{}]

    // this.setState({
    //     products:item
    // })
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log('Deleted successfully')
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  }
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 9999,
        qty: 4,
        title: "Washing Machine"
      })
      .then((docRef) => {
        console.log('Product has been added', docRef);
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{fontSize:20,padding:20,margin:5}}>Add a Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          OnDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}


export default App;

