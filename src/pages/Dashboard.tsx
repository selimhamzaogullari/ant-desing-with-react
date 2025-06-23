import { Card, Flex, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchProducts } from "../modules/products/store/productSlice";
import { Link } from "react-router-dom";
import { fetchUsers } from "../modules/users/store/userSlice";
const { Title } = Typography;

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Flex gap="middle">
        <Link
          to={{
            pathname: "/products",
          }}
        >
          <Card title="Products" style={{ width: 300 }}>
            <span>Total: {products.length}</span>
          </Card>
        </Link>
        <Link
          to={{
            pathname: "/users",
          }}
        >
          <Card title="Users" style={{ width: 300 }}>
            <span>Users: {users.length}</span>
          </Card>
        </Link>
      </Flex>
    </div>
  );
};

export default Dashboard;
