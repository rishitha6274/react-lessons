export default function Product({value}) {
  return  <div className="App-Product-Box">
      <h3>{value.name}</h3>
      <h4>${value.price}</h4>
      <p><button>Add to Cart</button></p>
    </div>;
}


