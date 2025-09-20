import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { domain, useUserStore } from "../Store";
import { useEffect } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { users, setUsers } = useUserStore();

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (localUsers.length > 0) {
      setUsers(localUsers);
    } else {
      axios
        .get(domain + "/users")
        .then((res) => {
          setUsers(res.data);
          localStorage.setItem("users", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (data) => {
    const user = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      username: data.username,
      email: data.email,
      password: data.password,
    };

    const emailExists = users.find((u) => u.email === data.email);
    if (emailExists) {
      toast.error("Email already exists ❌");
      return;
    }

    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("Registration successful 🎉");

    setTimeout(() => {
      navigate("/LoginPage");
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-dvh">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="dark:bg-gray-800 bg-gray-200 shadow-lg flex flex-col gap-5 justify-center w-3/4 min-w-70 lg:w-1/3 p-5 rounded-3xl">
          <h1 className="text-3xl">Create New Account</h1>
          <h3 className="text-xl">Please enter here</h3>

          <div>
            <Field
              type="text"
              name="username"
              placeholder="Enter Your Full Name"
              className="input w-full"
              autoComplete="username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input w-full"
              autoComplete="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input w-full"
              autoComplete="new-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              className="input w-full"
              autoComplete="new-password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="btn btn-primary w-full sm:w-1/2 lg:w-1/3"
            >
              SignUp
            </button>
          </div>

          <h3>
            Already have an account?{" "}
            <Link to="/LoginPage" className="font-bold underline">
              Login
            </Link>
          </h3>
        </Form>
      </Formik>
    </div>
  );
}
