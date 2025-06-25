import { HeartOutlined, EditOutlined, DeleteOutlined, HeartFilled } from "@ant-design/icons";
import { Col, Card, Button } from "antd";
import type { Product } from "../types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { setFavorites } from "../store/productSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  // For render problem
  const isFavorited = useSelector((state: RootState) => state.products.favorites.includes(product.id));
  return (
    <Col sm={24} lg={12} xl={8} xxl={8} key={product.id}>
      <Card
        hoverable
        style={{ minWidth: 300, maxWidth: 600 }}
        cover={<img alt="example" src={product.image} onClick={() => navigate(`/products/${product.id}`)} />}
        actions={[
          <Button
            type="text"
            variant="text"
            block
            icon={isFavorited ? <HeartFilled style={{ color: "#ff4d4f" }} /> : <HeartOutlined />}
            onClick={() => dispatch(setFavorites(product.id))}
          />,
          <Button type="text" variant="text" block icon={<EditOutlined />} onClick={() => navigate(`/products/edit/${product.id}`)} />,
        ]}
      >
        <Card.Meta title={product.name} description={product.description} />
      </Card>
    </Col>
  );
};

export default ProductCard;
