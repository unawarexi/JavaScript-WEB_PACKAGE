import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// provides the form components
import { Formik, Form, Field, ErrorMessage } from "formik";

// for validation
import * as Yup from "yup";
import Images from "../../assets/Image";

const Authentication = () => {
  /**
   * the isLogged to change form states
   * the navigate and useNavigate is to auto route you to the home page
   *
   * tips: study routing, master react and react-third party hooks
   */
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  /**
   * this makes use of yup to get the email and password names
   * the .email ensures that it follows standard email format
   * the required ensures that the input field is not empty
   *
   * tips: study react form validation using formik and yup
   */
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  /**
   * function to grab the value from form inputs
   * then initiate the auto navigate routing function
   *
   * tips: practice how to assign function to jsx and create customized functions
   * @param {*} values
   */
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/home");
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <img
          src={Images.image1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container px-5 py-24 mx-auto flex justify-center items-center h-screen">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {isLogged ? "Sign Up" : "Login"}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>

            {/* =============== THIS IS THE EMAIL FIELD ============= */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              {/* ************* THIS WHERE YOU CALL FIeld from formik ********** */}
              <Field
                type="email"
                id="email"
                name="email" // this id is what the form use to get the values
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {/* ************* THIS WHERE YOU CALL YOUR ERRORmessage from formik ********** */}
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* ================== this is the submit button =================== */}
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {isLogged ? "Sign Up" : "Login"}
            </button>

            {/* ====================== THIS IS WHERE YOU HANDLE THE DYAMIC FORM RENDERING ============ */}
            <p
              onClick={() => setIsLogged(!isLogged)}
              className="text-xs text-gray-500 mt-3 cursor-pointer"
            >
              {isLogged ? (
                <p>
                  Have an account?{" "}
                  <span className="text-indigo-500">Log in</span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span className="text-indigo-500">Sign Up</span>
                </p>
              )}
            </p>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Authentication;
