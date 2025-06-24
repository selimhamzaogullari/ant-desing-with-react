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
      <Layout>
        <Layout.Header style={{ padding: 0, background: "#fff", boxShadow: "0 1px 4px rgba(0,21,41,.08)" }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              borderRadius: 8,
              minHeight: 280,
              maxWidth: 1280,
              margin: "auto",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
