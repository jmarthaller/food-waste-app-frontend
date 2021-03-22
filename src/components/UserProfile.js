import React from 'react';


function UserProfile({ currentUser,  pickupsState, setPickupHistory, handleDeletePickup}) {
    const filteredPickupsById = pickupsState.filter((pickup) => {
        return pickup.user_id === currentUser.id
    })

    function onDeletePickup(pickupId) {
        console.log(pickupId)
        fetch(`https://frozen-shelf-16862.herokuapp.com/pickups/${pickupId}`, {
            method: "PATCH", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ "available": true, "user_id": null }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              handleDeletePickup(pickupId);
            })
    }


    const mappedPickupsToUser = filteredPickupsById.map((pickup) => {
        return (
            <div className="past-order">
                <h3>{pickup.item}</h3>
                <p>${pickup.price}</p>
                <img src={pickup.image} alt={pickup.item} className="food-img"/>
                <button onClick={() => onDeletePickup(pickup.id)} className="cancel-res-btn">Cancel Reservation</button>
            </div>
        )
    })
    
    
    return (
        <div className="welcome-div">
            <h1>Welcome, {currentUser.username}!</h1>
            {mappedPickupsToUser.length > 0 ?
            <div>
                <h4>Here are your past orders:</h4>
                <div className="past-orders-div">
                    {mappedPickupsToUser}
                </div>
            </div>
            :  
            <h4>You have no past orders!</h4>
            }
    
        </div>
    )
}

export default UserProfile;