import React from 'react'

const Order = (props) => {
    return (
        <div>
            Sono l'ordine n° {props.id} e sono del ristorante {props.ristorante}
        </div>
    )
}

export default Order