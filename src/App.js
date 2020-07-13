import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import "./App.css";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Content from "./pages/content";

function App() {
  return (
    <Provider {...{ store }} className="App">
      <Header />
      <Content />
      <Footer />
    </Provider>
  );
}

export default App;
