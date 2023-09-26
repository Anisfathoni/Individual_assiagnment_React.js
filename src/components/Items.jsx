export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li key={item.id}>
             <input type="checkbox" checked={item.che} onChange={() => onToggleItem(item.id)} />
             {/* line-through nya masi gagal (tanya ke ka rizal kenapa hehe) */}
             <span style={  item.checked ? { texDecoration: 'line-through' } : {}}>
              {item.quantity} {item.name}
              </span>
             <button onClick={() =>onDeleteItem(item.id)}>&times;</button>
           </li>
    );
  }