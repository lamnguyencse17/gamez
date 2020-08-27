import "../styles.css";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "../components/store";
import axios from "axios";
import { setUser } from "../components/redux/actions/user";

const store = configureStore();

function App({ Component, pageProps }) {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    store.dispatch(setUser());
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
