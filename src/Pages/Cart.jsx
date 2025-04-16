import React from 'react'
import { useCart } from 'react-use-cart'
import './Cart.css'
import { Button } from 'react-bootstrap';

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
    totalItems
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <div className="container cart-page">
        <h1>Cart</h1>
        <p>Cart ({totalUniqueItems}) items ({totalItems})</p>
        <table class = "table">
          <tbody>
            {items.map((item)=>{
              return(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.size}</td>
                <td>
                <Button className="btn-option" variant="dark" onClick={() => updateItemQuantity(item.id, (item.qty ?? 0) - 1)}>-</Button>
                <Button className="btn-option" variant="dark" onClick={() => updateItemQuantity(item.id, (item.qty ?? 0) + 1)}>+</Button>
                <Button className="btn-option" variant="dark" onClick={() => removeItem(item.id)}>&times;</Button>
                </td>
                <td>{(item.price ?? 0)*(item.qty ?? 0)}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
        <h3>Amount: {cartTotal}</h3>
      </div>
      
          
      {/* <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
            >
             
            </button> -
            <button
              onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default Cart