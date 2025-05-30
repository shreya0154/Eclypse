export default function Checkout() {
    const item = 7999
    const shipping = 200
    const tax = 1400
    const sum = item+shipping+tax;
  return (
    <div className="p-6 bg-white min-h-screen flex flex-col md:flex-row gap-8">

      <div className="md:w-2/3 w-full border rounded-md p-8">
        <h2 className="text-xl text-black font-semibold mb-4">Add Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input placeholder="First Name" type="text" className="border p-3 rounded text-black" />
          <input placeholder="Last Name" type="text" className="border p-3 rounded text-black" />
          <input placeholder="Street Address" type="text" className="border p-3 rounded col-span-2 text-black" />
          <input placeholder="Apt Number" type="text" className="border p-3 rounded text-black" />
          <input placeholder="State" className="border p-3 rounded text-black" />
          <input placeholder="Zip" className="border p-3 rounded text-black" />
        </div>
        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded text-black hover:bg-red-500 hover:text-white">Cancel</button>
          <button onClick={()=>{alert('Address Saved Successfully !')}}className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600">Save This Address</button>
        </div>
      </div>

  
      <div className="md:w-1/3 w-full bg-gray-800 p-6 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <ul className="text-sm mb-4">
          <li className="flex justify-between pt-2 pb-2"><span>Item:</span><span>₹{item}</span></li>
          <li className="flex justify-between pt-2 pb-2"><span>Shipping:</span><span>₹ {shipping}</span></li>
          <li className="flex justify-between pt-2 pb-2"><span>Tax:</span><span>₹ {tax}</span></li>
        </ul>
        <hr />
        <div className="flex justify-between mt-4 font-bold text-lg">
          <span>Total:</span><span>₹ {sum}</span>
        </div>
        <button onClick={()=>{alert('Order Placed !')}}className="bg-black text-white w-full mt-6 py-2 rounded">Place Order</button>
      </div>
    </div>
  );
}
