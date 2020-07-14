import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import Content from './pages/content';
import {store}from './redux/configureStore';

function App() {
  return (
    <Provider store={store} className="App">
      <Header/>
      <Content/>
      <Footer/>
    </Provider>
  );
}

export default App;
