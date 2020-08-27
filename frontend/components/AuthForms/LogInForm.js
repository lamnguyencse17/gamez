import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logInUser } from "../redux/actions/user";
import { useRouter } from "next/router";
import validateLogIn from "../../validators/logInValidator";

const validate = (values, props) => {
  const { email, password } = validateLogIn(values);
  if (email || password) {
    return { email, password };
  }
  return {};
};

function LogInForm(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErr, setErr] = useState("");
  const handleLogIn = async (values, actions) => {
    actions.setSubmitting(true);
    const logInResult = await dispatch(logInUser(values));
    if (!logInResult.status) {
      setErr(logInResult.message);
      actions.setSubmitting(false);
      actions.resetForm();
      setTimeout(() => setErr(""), 5000);
    } else {
      await router.push("/");
    }
  };
  return (
    <div className="w-full max-w-md mx-auto mt-20">
      <Formik
        validate={validate}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogIn}
      >
        {(props) => {
          const { handleSubmit, isSubmitting } = props;
          return (
            <Form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 w-full"
              onSubmit={handleSubmit}
            >
              <div className="text-red-500 lg:text-lg sm:text-sm mx-auto w-1/2">
                {formErr}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="someone@gmail.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  render={(msg) => (
                    <div className="text-red-500 text-xs italic">{msg}</div>
                  )}
                  name="email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  render={(msg) => (
                    <div className="text-red-500 text-xs italic">{msg}</div>
                  )}
                  name="password"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LogInForm;
