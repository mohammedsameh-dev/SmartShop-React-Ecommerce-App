import { useCartItem } from "../Store";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
export default function CartPage() {
  const { item: cartItems, removeItemFromCart, clearCart } = useCartItem();
  const total = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <>
      <div className="min-h-screen bg-gray-200 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-gray-100 shadow-2xl dark:bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            🛒 Your Cart
          </h2>

          {!cartItems || cartItems.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">
              Your cart is empty.
            </p>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between hover:bg-gray-300/80 dark:bg-gray-900/80 dark:hover:bg-blue-950/50 p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-300">
                            ${item.price} × {item.quantity}
                          </p>
                        </div>
                      </div>
                      <button
                        className="btn btn-error btn-outline"
                        onClick={() => {
                          removeItemFromCart(item.id);
                          toast.success("Item removed!");
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="w-full lg:w-1/3 bg-gray-50 hover:bg-gray-300/80  p-6 rounded-lg shadow-2xl dark:bg-gray-900/80 dark:hover:bg-blue-950/50 ">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    Order Summary
                  </h3>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-2">
                    <span>Subtotal</span>
                    <span>${parseFloat(total).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-2">
                    <span>Shipping</span>
                    <span>$10</span>
                  </div>
                  <hr className="my-2 border-gray-300 dark:border-gray-600" />
                  <div className="flex justify-between font-bold text-gray-900 dark:text-white text-lg">
                    <span>Total</span>
                    <span>${(total + 10).toFixed(2)}</span>
                  </div>
                  <button
                    className="btn btn-warning btn-outline w-full mt-4 mb-2"
                    onClick={() => {
                      clearCart();
                      toast.success("Cart cleared!");
                    }}
                  >
                    Clear Cart
                  </button>
                  <button
                    className="btn btn-success btn-outline w-full mt-2"
                    onClick={() => {
                      clearCart();
                      Swal.fire({
                        title: "Payment Done Successfully",
                        icon: "success",
                        draggable: true,
                      });
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
