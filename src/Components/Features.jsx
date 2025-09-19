export default function Features() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 border-gray-500">
      <div className="w-full flex justify-center items-center pb-5">
        <h1 className="text-4xl font-bold">Our Features</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border-gray-800 border-2 rounded-4xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-500">Free delivery on orders over $50</p>
          </div>
          <div className="text-center p-6 border-gray-800 border-2 rounded-4xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-500">Your payment information is safe</p>
          </div>
          <div className="text-center p-6 border-gray-800 border-2 rounded-4xl">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">↩️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-500">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
