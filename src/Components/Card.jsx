import toast, { Toaster } from "react-hot-toast";
import { useCartItem } from "../Store";

export default function Card({ el }) {
  const { AddItemToCart } = useCartItem();

  const productAdded = () => {
    toast.success("Product Added Successfully");
    AddItemToCart(el);
  };

  return (
    <div className="card bg-white dark:bg-gray-800 dark:hover:bg-blue-950 w-80 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Toaster />
      <figure className="px-6 pt-6">
        <img
          src={el.image}
          alt={el.title}
          className="rounded-xl w-40 h-40 object-contain"
        />
      </figure>

      <div className="card-body items-center text-center space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">
          {el.title}
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {el.category}
        </span>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
          {el.description}
        </p>

        <p className="text-xl font-bold text-blue-600">${el.price}</p>

        <div className="card-actions mt-3">
          <button
            className="btn btn-outline btn-primary rounded-xl px-6"
            onClick={productAdded}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
