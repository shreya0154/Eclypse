
import { useEffect, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCart = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/cart');
        const data = await res.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map(item => (
            <li key={item.id} className="border p-4 rounded shadow">
              <div className="font-semibold">{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: ₹{item.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
