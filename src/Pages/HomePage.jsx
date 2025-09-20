import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CheckInbox from "../Components/CheckInbox";
import Stats from "../Components/Stats";
import Features from "../Components/Features.jsx";
import CategoryCard from "../Components/CategoryCard";
import axios from "axios";
import { domain } from "../Store/index";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(domain + "/products")
      .then((res) => {
        setProducts(res.data);
        setFeaturedProducts(res.data.slice(0, 6));
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });
    axios
      .get(domain + "/products/categories")
      .then((res) => {
        setCategories(res.data);

        Promise.all(
          res.data.map((category) =>
            axios.get(`${domain}/products/category/${category}?limit=1`)
          )
        )
          .then((results) => {
            const catProducts = {};
            results.forEach((r, idx) => {
              if (r.data.length > 0) {
                catProducts[res.data[idx]] = r.data[0].image;
              }
            });
            setCategoryProducts(catProducts);
          })
          .catch((err) => {
            toast.error("Error fetching category products");
            console.log(err);
          });
      })

      .catch((err) => {
        toast.error("Error fetching categories");
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <Features />
      {/* Categ Section */}
      <div className="py-20 px-4 catigory text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-gray-200">
              Shop by Category
            </h2>
            <p className="text-xl dark:text-gray-200">
              Find exactly what you're looking for
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category}
                category={category}
                image={categoryProducts[category]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feat Products */}
      <div className="py-20 px-4 bg-gray-50 dark:bg-gray-900 feture">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-50">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100">
              Handpicked items just for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {featuredProducts.map((el) => (
              <Card key={el.id} el={el} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-950 dark:to-green-950  text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              onClick={() => {
                Swal.fire({
                  title: "Products Page",
                  icon: "success",
                  draggable: true,
                }).then(navigate("/ProductPage"));
              }}
            >
              View All Products ({products.length} items)
            </button>
          </div>
        </div>
      </div>
      <Stats />
      <CheckInbox />
    </div>
  );
}
