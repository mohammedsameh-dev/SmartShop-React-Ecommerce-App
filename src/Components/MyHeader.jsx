import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store";
import Logo from "../assets/store-2017.svg";
export default function MyHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/LoginPage");
  };
  return (
    <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap gap-5 items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CarrySite
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/LoginPage">
            <button
              type="button"
              className="btn btn-primary btn-outline rounded-2xl w-20"
            >
              Login
            </button>
          </Link>
          <Link to="/LoginPage">
            <button
              type="button"
              className="btn btn-error btn-outline rounded-2xl ml-2 w-20"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
            text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
          rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row 
          md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 
          dark:border-gray-700 w-full"
          >
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-blue-700 rounded-sm 
                md:bg-transparent  md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ProductPage"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
                dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/CartPage"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
                dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
                dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Userspage"
                className=" py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
                dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hidden md:block"
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
