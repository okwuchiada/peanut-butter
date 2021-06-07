import Form from './Components/form';
import ShoppingList from './Components/List';
import { useState } from "react";




function App() {

  const [listValue, getValue] = useState("");
  const [shopListItem, addItem] = useState([]);


  return (
    <div className="container">
    <header>
     <h1>Shopping List </h1>
    </header>
    <main>
      <Form getValue={getValue} shopListItem={shopListItem} addItem={addItem}   />
      
      <ShoppingList />
      <p>{listValue}</p>

    </main>

  
   </div>
  );
}

export default App;
