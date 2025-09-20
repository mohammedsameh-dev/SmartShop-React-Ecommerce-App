import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { domain, useAuthStore, useUserStore } from "../Store";
import { useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const { users, setUsers } = useUserStore();
  const {login} = useAuthStore();
  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.length === 0) {
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
    }
  }, [users]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    const foundUser = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (foundUser) {
      toast.success("Login successful 🎉");
      login(foundUser.email);
      setTimeout(() => {
        navigate("/");
      }, 800);
    } else {
      toast.error("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-dvh">
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="dark:bg-gray-800 bg-gray-200 shadow-lg flex flex-col gap-5 justify-center w-3/4 min-w-70 lg:w-1/3 p-5 rounded-3xl">
          <h1 className="text-3xl">Welcome 👋</h1>
          <h3 className="text-xl">Please login here</h3>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="input w-full"
              autoComplete="current-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <button type="submit" className="btn btn-primary w-1/4">
              Login
            </button>
          </div>

          <h3>
            You don't have an account?{" "}
            <Link to="/RegisterPage" className="font-bold underline">
              Register
            </Link>
          </h3>
        </Form>
      </Formik>
    </div>
  );
}
