import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { fetchProductById } from "../store/productSlice";
import Error from "../../../components/Error";
import { Space, Image, Typography, Button, Popconfirm, message, Flex, Tag, Descriptions } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Loading from "../../../components/Loading";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { activeProduct, loading, error } = useSelector((state: RootState) => state.products);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  const deleteProduct = () => {
    messageApi.success("Deleted Product");
  };

  const editProduct = () => {
    console.log("Edit Product");
  };
  if (loading) return <Loading />;
  if (error) return <Error />;
  else if (activeProduct)
    return (
      <>
        {contextHolder}
        <div style={{ display: "flex", columnGap: 32, alignItems: "start", flexWrap: "wrap" }}>
          <div style={{ flex: 1, height: 400, minWidth: 300, marginBottom: 32, borderRadius: 8, overflow: "hidden" }}>
            <Image
              width="100%"
              height="100%"
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={activeProduct.image}
              alt={activeProduct.name}
            />
          </div>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography.Title level={2} style={{ margin: 0 }}>
                {activeProduct.name}
              </Typography.Title>
              <Space>
                <Button type="primary" icon={<EditOutlined />} onClick={editProduct}>
                  Edit
                </Button>
                <Popconfirm
                  title="Delete the product"
                  description="Are you sure to delete this product?"
                  placement="bottom"
                  onConfirm={deleteProduct}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger>Delete</Button>
                </Popconfirm>
              </Space>
            </div>
            <Space>
              <Tag color="blue" style={{ marginTop: 8 }}>
                {activeProduct.category}
              </Tag>
            </Space>
            <Typography.Title level={3} style={{ color: "#1890ff", margin: 0, marginTop: 16, marginBottom: 32 }}>
              ${activeProduct.price}
            </Typography.Title>
            <Typography.Title level={4}>Description</Typography.Title>
            <Typography.Text>{activeProduct.description}</Typography.Text>
          </div>
        </div>
      </>
    );
  else return false;
};

export default ProductDetail;
