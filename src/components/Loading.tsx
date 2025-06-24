import { Spin } from "antd";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", padding: 50, margin: "auto" }}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
