import { Button, Form, Input, InputNumber, Select, Space, Typography, type FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import type { User } from "../type";
import { createUser, updateUser } from "../store/userSlice";

interface EditUserProps {
  type?: "new" | "edit";
  user?: User | null;
}

const NewEditUser = ({ type, user }: EditUserProps) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
      });
    }
  }, []);

  const onFinish: FormProps<User>["onFinish"] = async (values) => {
    try {
      if (!user) await dispatch(createUser(values)).unwrap();
      else await dispatch(updateUser({ ...values, id: user.id })).unwrap();

      navigate("/users");
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed: FormProps<User>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ width: 500, padding: 20, borderRadius: 4, boxShadow: "0 1px 14px rgba(0,21,41,.1)", margin: "auto", background: "#fff" }}>
      <Typography.Title level={3} style={{ textAlign: "center", marginBottom: 40 }}>
        {type === "edit" ? "Edit User" : "Add User"}
      </Typography.Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<User> label="First Name" name="firstName" rules={[{ required: true, message: "Please input your firstName!" }]}>
          <Input />
        </Form.Item>

        <Form.Item<User> label="Last Name" name="lastName" rules={[{ required: true, message: "Please input your lastName!" }]}>
          <Input />
        </Form.Item>

        <Form.Item<User> label="Email" name="email" rules={[{ required: true, message: "Please input your email!", type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item<User> label="Phone Number" name="phone" rules={[{ required: true, message: "Please input your phone number!" }]}>
          <Input />
        </Form.Item>

        <Form.Item<User> label="Avatar" name="avatar" rules={[{ required: true, message: "Please input your avatar url!" }]}>
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Space>
            <Button type="primary" disabled={loading} htmlType="submit">
              {type === "edit" ? "Edit" : "Create"}
            </Button>
            <Button disabled={loading} onClick={() => navigate("/users")}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewEditUser;
