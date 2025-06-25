import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 50,
        rowGap: 12,
      }}
    >
      <Typography.Title level={3} type="danger">
        Something went wrong!
      </Typography.Title>
      <Button icon={<ArrowLeftOutlined />} onClick={() => navigate("/")}>
        Return Home Page
      </Button>
    </div>
  );
};

export default Error;
