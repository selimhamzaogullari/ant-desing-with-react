import { HomeOutlined, ProductOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Typography, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

const AppLayout = () => {
  let navigate = useNavigate();
  const menuItems: MenuProps["items"] = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Dashboard",
    },
    {
      key: "/products",
      icon: <ProductOutlined />,
      label: "Products",
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: "Users",
    },
  ];

  const menuItemClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Sider
        trigger={null}
        style={{
          background: "#fff",
          boxShadow: "2px 0 8px 0 rgba(29,35,41,.05)",
        }}
      >
        <Title level={4} style={{ marginTop: 20, marginBottom: 20, color: "#1890ff", textAlign: "center" }}>
          Menu
        </Title>
        <Menu items={menuItems} defaultSelectedKeys={["/"]} onClick={menuItemClick} style={{ border: 0 }} />
      </Sider>
      <Content style={{ padding: 20, maxWidth: 1200, margin: "0 auto" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
