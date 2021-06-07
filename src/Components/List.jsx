import React from "react"




function ShoppingList({addList}){

    return(

        <div className="list-info">
        <div id="list-entry">
{addList}
        </div>

    </div>
    )
}

export default ShoppingList;