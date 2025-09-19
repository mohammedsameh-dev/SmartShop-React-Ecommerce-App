import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function CheckInbox() {
  return (
    <div className="py-20 px-4 dark:bg-gray-800 border-b">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
          Stay in the Loop
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-100 mb-10">
          Get the latest deals, new arrivals, and exclusive offers delivered to
          your inbox
        </p>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            toast.success("Email Sent Successfully");
            console.log(values);
            resetForm();
          }}
        >
          <Form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1">
              <Field
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 text-lg"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-2 text-left"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg btn h-15  from-blue-600 to-purple-600 dark:from-blue-950 dark:to-green-900  hover:from-blue-700 hover:to-purple-700 border-0"
            >
              Subscribe
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
