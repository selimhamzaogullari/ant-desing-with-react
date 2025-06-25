import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Flex, Row, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import NoData from "../components/NoData";
import Loading from "../components/Loading";
import Error from "../components/Error";
import type { User } from "../modules/users/type";
import UserCard from "../modules/users/components/UserCard";
import { fetchUsers } from "../modules/users/store/userSlice";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const Content = () => {
    if (loading) return <Loading />;
    else if (error) return <Error />;
    else if (users.length > 0)
      return (
        <Row gutter={[24, 24]} style={{ marginTop: 20 }}>
          {users.map((user: User) => (
            <UserCard user={user} key={user.id} />
          ))}
        </Row>
      );
    else if (users.length === 0) {
      return <NoData text="No Products Found" />;
    }
  };

  return (
    <>
      <Flex gap="middle" justify="space-between">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Users
        </Typography.Title>
        <Flex gap="small">
          <Button icon={<ReloadOutlined />} onClick={() => dispatch(fetchUsers())}>
            Refresh
          </Button>
          <Button icon={<PlusOutlined />} type="primary" onClick={() => navigate("/users/create")}>
            Add User
          </Button>
        </Flex>
      </Flex>
      <Content />
    </>
  );
};

export default Users;
