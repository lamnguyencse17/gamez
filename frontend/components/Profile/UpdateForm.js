import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validateLogIn from "../../validators/logInValidator";
import validateUpdateUser from "../../validators/updateUserValidator";

function UpdateForm(props) {
  const [formErr, setErr] = useState("");
  const validate = (values, props) => {
    const { name, password, newPassword } = validateUpdateUser(values);
    if (password) {
      return { password, name: null, newPassword: null };
    }
    if (name && !password && newPassword) {
      return { name, password, newPassword };
    }
    return {};
  };
  const handleUpdateInfo = (values, actions) => {
    const { name, password, newPassword } = values;
    const updatedInfo = { password };
    if (name !== "") {
      updatedInfo.name = name;
    }
    if (newPassword !== "") {
      updatedInfo.newPassword = newPassword;
    }
    actions.setSubmitting(true);
    console.log(updatedInfo);
    setTimeout(() => actions.setSubmitting(false), 5000);
  };
  return (
    <div className="lg:h-1/2 lg:w-1/3 mt-10 mx-auto">
      <Formik
        validate={validate}
        initialValues={{
          name: props.user.name,
          password: "",
          newPassword: "",
        }}
        onSubmit={handleUpdateInfo}
      >
        {(props) => {
          const { handleSubmit, isSubmitting } = props;
          return (
            <Form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 w-full"
              onSubmit={handleSubmit}
            >
              <div className="text-red-500 lg:text-lg sm:text-sm mx-auto w-2/3">
                {formErr}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <Field
                  id="email"
                  type="text"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  render={(msg) => (
                    <div className="text-red-500 text-xs italic">{msg}</div>
                  )}
                  name="name"
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-6">
                <label
                  htmlFor="newPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  New Password
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="newPassword"
                  name="newPassword"
                  type="password"
                />
                <ErrorMessage
                  render={(msg) => (
                    <div className="text-red-500 text-xs italic">{msg}</div>
                  )}
                  name="newPassword"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UpdateForm;
