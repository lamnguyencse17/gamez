import "../styles.css";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "../components/store";
import axios from "axios";
import { setUser } from "../components/redux/actions/user";
import "draft-js/dist/Draft.css";
import "draft-js-emoji-plugin/lib/plugin.css";
import "./loader.css";
import Navbar from "../components/Common/Navbar";

const store = configureStore();

export function reportWebVitals(metric) {
  console.log(metric);
}

function App({ Component, pageProps }) {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    store.dispatch(setUser());
  });

  return (
    <Provider store={store}>
      <Navbar {...pageProps} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
