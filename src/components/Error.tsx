import { Typography } from "antd";

const Error = () => {
  return (
    <Typography.Title level={3} type="danger" style={{ textAlign: "center", padding: 50 }}>
      Something went wrong!
    </Typography.Title>
  );
};

export default Error;
