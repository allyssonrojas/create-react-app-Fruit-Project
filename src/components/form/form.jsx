import React from "react";
import "./style.css"

function FormFruit(){
    return(
        <div>
            <h1 className="tittle">Fruits Database</h1>
            <div className="all">
                <form className="form">
                    <p>Insert the name and price of the fruit that you want to save or delete from the database.</p>
                    
                    <input className="input" type="text" 
                    placeholder="Fruit"/>

                    <input className="input" type="text" 
                    placeholder="Price"/>
                    
                    <button className="button">Save</button>
                    <button className="button">Delete</button>
                    <img className="image" src="https://images.vexels.com/media/users/3/185260/isolated/preview/f2b5568bbcd5c2352a4a25c41fe194fb-plano-de-fruta-de-pi-ntilde-a-by-vexels.png" alt=""/>
                </form>
            </div>
        </div>
    )
}

export default FormFruit;