import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: 'HTML',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'CSS',
    quantity: 2,
    checked: false,
  },
  {
    id: 3,
    name: 'Javascript',
    quantity: 3,
    checked: false,
  },
];


export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id ));
  }

  function handleToggleItem(id) {
    // harusnya item saja tapi gagal
    setItems((items) => items.map((items) => (items.id === id ? { ...items, checkede: !items. checked } : items)));
  }

  function handleClearItem() {
    setItems([]);
  }


  return (
    <div className="app">
    <Header />
    <Form onAddItem={handleAddItem} />
    <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItem}/>
    <Footer items={items} />
    </div>
  );
}











