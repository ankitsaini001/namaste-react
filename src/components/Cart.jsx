import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { clearCart, removeItems } from "../Utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const removeCartItems = () => {
    dispatch(removeItems(item.card.info.id));
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 pt-2">Cart Page</h1>

        {cartItem.length === 0 ? (
          <div className="text-center mt-20 text-gray-500">
            <img
              src="/empty-cart.svg"
              alt="Empty cart"
              className="mx-auto w-48 h-48 opacity-60"
            />
            <p className="mt-4 text-lg">Your cart is empty. Add some items! 🛒</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto w-full">
              <table className="min-w-full text-sm text-left border border-gray-200">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Item</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItem.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">
                        <img
                          src={CDN_URL + item.card.info.imageId}
                          alt={item.card.info.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {item.card.info.name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-green-700">
                        ₹
                        {item.card.info.finalPrice
                          ? item.card.info.finalPrice / 100
                          : item.card.info.price / 100}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="text-red-600 hover:underline"
                          onClick={()=>dispatch(removeItems(item.card.info.id))}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Clear Cart Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleClearCart}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
