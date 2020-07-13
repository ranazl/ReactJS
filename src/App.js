import React from "react";
import "./App.css";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Content from "./pages/content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
