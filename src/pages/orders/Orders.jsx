import React from 'react'
import Order from '../../components/Order'

const orders = [
    {
        id: 1,
        ristorante: "Zangaloro"
    },
    {
        id: 2,
        ristorante: "Archestrato"
    },
    {
        id: 3,
        ristorante: "Braciera"
    },
    {
        id: 4,
        ristorante: "Tabernula"
    },
]

const Orders = () => {
    return (
        <>
            {orders.map((order) =>
                <Order
                    key={order.id}
                    id={order.id}
                    ristorante={order.ristorante}
                />
            )}
        </>
    )
}

export default Orders