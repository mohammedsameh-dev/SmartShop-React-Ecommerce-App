import { Link as ScrollLink } from "react-scroll";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-950 dark:to-blue-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Shop Smart, Live Better
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
          Discover amazing products from top brands at unbeatable prices. Your
          one-stop destination for everything you need.
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <ScrollLink to="feture" smooth={true} duration={500}>
            <button className="bg-white border-2 dark:border-0 dark:bg-cyan-900 text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-transparent hover:text-white dark:hover:bg-transparent dark:hover:border-2 dark:hover:text-white hover:scale-105 transition-all shadow-lg">
              Start Shopping
            </button>
          </ScrollLink>
          <ScrollLink to="catigory" smooth={true} duration={500}>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white dark:hover:bg-cyan-900 dark:hover:border-cyan-900 hover:text-blue-600 transition-all hover:scale-105 shadow-lg">
              Browse Categories
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
