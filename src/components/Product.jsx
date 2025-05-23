export default function Product(props) {
  return  <div className="App-Product-Box">
      <h3>{props.value.name}</h3>
      <h4>${props.value.price}</h4>
      <p><button>Add to Cart</button></p>
    </div>;
}
