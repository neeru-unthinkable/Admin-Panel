import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Routes from "./routes";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";



const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
