import React from 'react'
import { useCart } from 'react-use-cart'
import './Cart.css'

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
  const total = 0.00;
  const amount = 0.00;

  return (
    <>
      <h1>Cart ({totalUniqueItems}) items ({totalItems})</h1>
      <table class = "table">
        <tbody>
          {items.map((item)=>{
            return(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
              <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
              <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
              </td>
              <td>{(item.price ?? 0)*(item.quantity ?? 0)}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
          <h3>Amount: {cartTotal}</h3>
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