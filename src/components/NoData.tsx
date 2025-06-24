import { Button, Empty, Typography } from "antd";
interface NoDataProps {
  text?: string;
  onCreate?: () => void;
}
const NoData = ({ text = "No Data", onCreate }: NoDataProps) => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      styles={{ image: { height: 150, marginTop: 50 } }}
      description={<Typography.Text>{text}</Typography.Text>}
    >
      <Button type="primary" onClick={onCreate}>
        Create Now
      </Button>
    </Empty>
  );
};

export default NoData;
