import { Button, Form, Input, InputNumber, Select, Space, Typography, type FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import type { Product } from "../types";
import { createProduct } from "../store/productSlice";
import { categories } from "../../../api/mockData";

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector((state: RootState) => state.products);

  const onFinish: FormProps<Product>["onFinish"] = async (values) => {
    try {
      console.log(values);
      await dispatch(createProduct(values)).unwrap();
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed: FormProps<Product>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ width: 500, padding: 20, borderRadius: 4, boxShadow: "0 1px 14px rgba(0,21,41,.1)", margin: "auto", background: "#fff" }}>
      <Typography.Title level={3} style={{ textAlign: "center", marginBottom: 40 }}>
        Add Product
      </Typography.Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<Product> label="Product Name" name="name" rules={[{ required: true, message: "Please input product name!" }]}>
          <Input />
        </Form.Item>

        <Form.Item<Product> label="Product Description" name="description" rules={[{ required: true, message: "Please input product description!" }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item<Product> label="Product Price" name="price" rules={[{ required: true, message: "Please input product price!" }]}>
          <InputNumber min={1} max={9999} defaultValue={1} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item<Product> label="Product Image Url" name="image" rules={[{ required: true, message: "Please input product image url!" }]}>
          <Input />
        </Form.Item>

        <Form.Item<Product> label="Product Category" name="category" rules={[{ required: true, message: "Please select product category!" }]}>
          <Select>
            {categories.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label={null}>
          <Space>
            <Button type="primary" disabled={loading} htmlType="submit">
              Submit
            </Button>
            <Button disabled={loading} onClick={() => navigate("/products")}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
