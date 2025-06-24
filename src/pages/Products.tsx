import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Flex, Row, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchProducts } from "../modules/products/store/productSlice";
import type { Product } from "../modules/products/types";
import ProductCard from "../modules/products/components/ProductCard";
import NoData from "../components/NoData";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const Content = () => {
    if (loading) return <Loading />;
    else if (error) return <Error />;
    else if (products.length > 0)
      return (
        <Row gutter={[24, 24]}>
          {products.map((product: Product) => (
            <ProductCard product={product} />
          ))}
        </Row>
      );
    else if (products.length === 0) {
      return <NoData text="No Products Found" />;
    }
  };

  return (
    <>
      <Flex gap="middle" justify="space-between">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Products
        </Typography.Title>
        <Flex gap="small">
          <Button icon={<ReloadOutlined />}>Refresh</Button>
          <Button icon={<PlusOutlined />} type="primary">
            Add Product
          </Button>
        </Flex>
      </Flex>
      <Flex gap="small">Filter</Flex>
      <Content />
    </>
  );
};

export default Products;
