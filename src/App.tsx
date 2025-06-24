import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import { store } from "./store";
import { Provider } from "react-redux";
import ProductDetail from "./modules/products/pages/ProductDetail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="users" element={<Users />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
