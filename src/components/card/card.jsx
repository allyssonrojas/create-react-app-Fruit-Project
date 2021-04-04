import React from "react"
import "./style.css"

function CardFruit(){
    return(
        <div className="allCards">
            <div className="formm">
                <h1 className="titlee">Description</h1>
                    <div className="informationn">
                        <p className="namee">Name :</p>
                        <p className="nameFruitt"></p>
                        <p className="pricee">Price :</p>
                        <p className="priceFruitt"></p>
                        <button className="buttonn">Update</button>
                        <button className="buttonn">Delete</button>
                    </div>
             </div>
     </div>

    )
}
export default CardFruit;