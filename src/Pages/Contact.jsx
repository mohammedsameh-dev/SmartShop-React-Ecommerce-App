import { Field, Form, Formik} from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email("Invalid email"),
    message: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    toast.success("Message sent successfully!");
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Toaster/>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-gray-100">
          Contact Us
        </h2>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <Field
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <Field
              as="textarea"
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
