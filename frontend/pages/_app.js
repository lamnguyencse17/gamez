import "../styles.css";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "../components/store";

const store = configureStore();

function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>;
}

export default App;
