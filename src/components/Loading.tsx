import { Spin } from "antd";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
