import React from "react";
import { GlobalStyle } from "./stylesPages/globalStiles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppProvider } from "./context";
import Checkout from './containers/checkout/Checkout'
import NotFound from "./pages/NotFound";
import Information from "./containers/information/information";
import Success from "./containers/sucess/Sucess";
import Category from "./containers/category/Category";
import OrdersHistory from "./containers/ordersHistory/OrdersHistory";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/information" element={<Information />} />
          <Route path="/checkout/success" element={<Success />} />
          <Route path="/category" element={<Category />} />
          <Route path="/history" element={<OrdersHistory />} />

          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App;
