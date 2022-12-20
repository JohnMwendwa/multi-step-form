import React, { useState } from "react";

import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: string) => {
    const idx = Math.floor(Math.random() * 1000);

    setItems([...items, { product: item, id: idx, quantity: 1 }]);
  };
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
