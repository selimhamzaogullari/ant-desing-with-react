import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Card, Button, Avatar, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import type { User } from "../type";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();
  return (
    <Col sm={24} lg={12} xl={8} xxl={8} key={user.id}>
      <Card
        style={{ minWidth: 300, maxWidth: 400 }}
        actions={[
          <Button type="text" variant="text" block icon={<EditOutlined />} />,
          <Button type="text" variant="text" block icon={<DeleteOutlined />} />,
        ]}
        onClick={() => navigate(`/users/${user.id}`)}
      >
        <Card.Meta avatar={<Avatar src={user.avatar} />} title={user.firstName + " " + user.lastName} />
        <div style={{ marginBottom: 8, marginTop: 24 }}>
          <b>Email: </b> {user.email}
        </div>
        <div style={{ marginBottom: 8 }}>
          <b>Phone: </b> {user.phone}
        </div>
      </Card>
    </Col>
  );
};

export default UserCard;
