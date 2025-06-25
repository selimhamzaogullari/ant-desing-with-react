import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import { store } from "./store";
import { Provider } from "react-redux";
import ProductDetail from "./modules/products/pages/ProductDetail";
import UserDetail from "./modules/users/pages/UserDetail";
import CreateUser from "./modules/users/pages/CreateUser";
import CreateProduct from "./modules/products/pages/CreateProduct";

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
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="users/create" element={<CreateUser />} />
            <Route path="products/create" element={<CreateProduct />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
