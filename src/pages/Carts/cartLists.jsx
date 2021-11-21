import React from 'react'
import CartItems from './cartItems'

export default function CartLists({carts}) {
    return (
        <div className='container-fluid'>
            {carts.map((item,index)=> <CartItems key={index} items={item} />) }
        </div>
    )
}
