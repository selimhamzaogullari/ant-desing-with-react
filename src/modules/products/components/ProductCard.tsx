import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Card, Button } from "antd";
import type { Product } from "../types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <Col sm={24} lg={12} xl={8} xxl={8} key={product.id}>
      <Card
        style={{ minWidth: 300, maxWidth: 600 }}
        cover={<img alt="example" src={product.image} />}
        actions={[
          <Button type="text" variant="text" block icon={<HeartOutlined />} />,
          <Button type="text" variant="text" block icon={<EditOutlined />} />,
          <Button type="text" variant="text" block icon={<DeleteOutlined />} />,
        ]}
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <Card.Meta title={product.name} description={product.description} />
      </Card>
    </Col>
  );
};

export default ProductCard;
