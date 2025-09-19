import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function MyFooter() {
  return (
    <div className="text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-900 dark:to-gray-950 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Store</h3>
            <p className="text-gray-100 dark:text-gray-400 mb-4">
              Your trusted partner for quality products and exceptional service.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 text-lg ">
              <a
                href="https://www.linkedin.com/in/mohammed-sameh-533b482a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-100 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/mohammedsameh-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-100 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://wa.me/+201554810489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-100 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition-colors"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/ProductPage"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/CartPage"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Your Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 dark:text-gray-400 hover:text-blue-950 dark:hover:text-white transition-colors"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-100 dark:text-gray-400">
            &copy; 2025 Our Store. All rights reserved. Made By{" "}
            <a
              href="https://www.linkedin.com/in/mohammed-sameh-533b482a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Mohammed
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
