export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-950 dark:to-blue-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">20+</h3>
            <p className="text-xl opacity-90">Products</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">4</h3>
            <p className="text-xl opacity-90">Categories</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">10K+</h3>
            <p className="text-xl opacity-90">Happy Customers</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">24/7</h3>
            <p className="text-xl opacity-90">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
