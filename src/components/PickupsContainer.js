import React from 'react';
import PickupsTile from './PickupsTile'

function PickupsContainer({ pickups, makeUnavailable }) {

    const pickupsList = pickups.map((pickup) => {
        return <PickupsTile 
        key={pickup.id}
        id={pickup.id}
        item={pickup.item}
        price={pickup.price}
        userId={pickup.user_id}
        restaurantId={pickup.restaurant_id}
        image={pickup.image}
        available={pickup.available}
        makeUnavailable= {makeUnavailable}
        />
    })

    return (
        <div>
            {pickupsList}
        </div>
    )
}

export default PickupsContainer;