import React from "react";
import { Field, Form, Formik } from "formik";
import validateSignUp from "../validators/signUpValidator";

const validate = (values, props) => {
  const {name, email, password} = validateSignUp(values);
  if (name || email || password){
    return {name, email, password};
  }
  return {};
};

function SignUpForm(props) {
  return (
    <div className="w-full max-w-md mx-auto mt-20">
      <Formik validate={validate}
              initialValues={{
                name: "",
                email: "",
                password: ""
              }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                setTimeout(() => actions.setSubmitting(false), 5000);
              }}
      >
        {(props) => {
          const {errors, touched, handleSubmit, isSubmitting} = props;
          return (<Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <Field id="name" name="name" placeholder="Your Name"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              {errors.name && touched.name ? (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Field id="email" type="email" name="email" placeholder="someone@gmail.com"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              {errors.email && touched.email ? (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              ) : null}
            </div>
            <button type="submit" disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit
            </button>
          </Form>);

        }}

      </Formik>
    </div>
  );
}

export default SignUpForm;