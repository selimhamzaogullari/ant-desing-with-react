import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import Error from "../../../components/Error";
import { Space, Typography, Button, Popconfirm, Descriptions, Avatar } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Loading from "../../../components/Loading";
import { deleteUser, fetchUserById } from "../store/userSlice";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { activeUser, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id]);

  const removeUser = async () => {
    try {
      await dispatch(deleteUser(id)).unwrap();
      navigate("/users");
    } catch (e) {
      console.log(e);
    }
  };

  const editUser = () => {
    console.log("Edit user");
  };
  if (loading) return <Loading />;
  if (error) return <Error />;
  else if (activeUser)
    return (
      <div style={{ width: 500, padding: 20, borderRadius: 4, border: "2px solid #efefef", margin: "auto" }}>
        <Space direction="vertical" size={24} style={{ width: "100%" }}>
          <Space align="center">
            <Avatar src={activeUser.avatar} size={64} />
            <Typography.Title level={3} style={{ margin: 0 }}>
              {activeUser.firstName} {activeUser.lastName}
            </Typography.Title>
          </Space>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Email">{activeUser.email}</Descriptions.Item>
            <Descriptions.Item label="Phone">{activeUser.phone}</Descriptions.Item>
          </Descriptions>
          <Space>
            <Button type="primary" icon={<EditOutlined />} onClick={editUser}>
              Edit
            </Button>
            <Popconfirm
              title="Delete the user"
              description="Are you sure to delete this user?"
              placement="bottom"
              onConfirm={removeUser}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
        </Space>
      </div>
    );
  else return false;
};

export default UserDetail;
