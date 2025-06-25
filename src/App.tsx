import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/DashboardPage";
import Products from "./pages/ProductsPage";
import Users from "./pages/UsersPage";
import { store } from "./store";
import { Provider } from "react-redux";
import ProductDetail from "./modules/products/pages/ProductDetailPage";
import UserDetail from "./modules/users/pages/UserDetailPage";
import CreateUser from "./modules/users/pages/CreateUserPage";
import CreateProduct from "./modules/products/pages/CreateProductPage";
import EditProduct from "./modules/products/pages/EditProductPage";

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
            <Route path="products/create" element={<CreateProduct />} />
            <Route path="users/create" element={<CreateUser />} />
            <Route path="products/edit/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
